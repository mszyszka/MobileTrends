$(window).on('resize', setSectionHeight);
$(window).on('load', checkSectionHeight);

//Check section.confirm-your-presence height and set it to content height
function checkSectionHeight(){
    let windowWidth = $(window).width();
    let imgHeight = $('.jumping-lady').height();
    let sectionHeight = $('section.confirm-your-presence').height();
    const section = $('section.confirm-your-presence');

    if(sectionHeight > imgHeight && windowWidth > 768){
        section.css('height', imgHeight);
    }
}

//Make section.confirm-your-presence height = to img.jumping-lady height
function setSectionHeight(){
    let windowWidth = $(window).width();
    let imgHeight = $('.jumping-lady').height();
    const section = $('section.confirm-your-presence');

    if(windowWidth >= 768) {
        section.css('height', imgHeight);
    } else if (windowWidth < 768) {
        section.css('height', 'auto');
    };
}

//scrollTo
const scrollToElem = {
    behavior : "smooth",
    block : 'start',
    inline : 'center'
};

let links = document.getElementsByClassName('nav-link');

[].forEach.call(links, function(el) {
    el.addEventListener('click', function() {
        let dataTarget = this.dataset.target;
        let target = document.getElementsByClassName(dataTarget)[0];
        const documentWidth = $(document).width();

        // I need this if condition becouse I have two sections with target2 class.
        //first one is display < 768px, second is open > 768px
        //If I do not change the index of the searched class to [1] above 768px,
        // the script will take class.target2 with index [0] as the target, which is no longer displayed
        if(documentWidth >= 768 && (dataTarget = 'target2')) {
            target = document.getElementsByClassName(dataTarget)[1];
        }
        target.scrollIntoView(scrollToElem);
    })
});

// owl carousels 
$(document).ready(function(){

    $('.loop.first').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            600:{
                items:1
            }
        }
    });

    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            600:{
                items:1.3
            }
        }
    });

});

//sprawdzianie które elementy wychodzą za viewport
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);









