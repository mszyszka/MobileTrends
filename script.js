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

// scrollTo shot v
let links = document.getElementsByClassName('nav-link');

const scrollToElem = {
    behavior : "smooth",
    block : 'start',
    inline : 'center'
};

[].forEach.call(links, function(el) {
    el.addEventListener('click', function() {
        const dataTarget = this.dataset.target;
        console.log(dataTarget);
        const target = document.getElementById(dataTarget);

        target.scrollIntoView(scrollToElem);
    })
});



// const link1 = document.getElementsByClassName('link1');
// const link2 = document.getElementsByClassName('link2');
// const link3 = document.getElementsByClassName('link3');
// const link4 = document.getElementsByClassName('link4');
// const link5 = document.getElementsByClassName('link5');
// const link6 = document.getElementsByClassName('link6');

// link1[0].addEventListener('click', function() {
//     const target1 = document.getElementById('target1');
//     target1.scrollIntoView(scrollToElem);
// })

// link2[0].addEventListener('click', function() {
//     const target2 = document.getElementById('target2');
//     const target2md = document.getElementById('target2-md');
//     target2.scrollIntoView(scrollToElem);
//     target2md.scrollIntoView(scrollToElem);
// })

// link4[0].addEventListener('click', function() {
//     const target4 = document.getElementById('target4');
//     target4.scrollIntoView(scrollToElem);
// })

// link5[0].addEventListener('click', function() {
//     const target5 = document.getElementById('target5');
//     target5.scrollIntoView(scrollToElem);
// })

// link6[0].addEventListener('click', function() {
//     const target6 = document.getElementById('target6');
//     target6.scrollIntoView(scrollToElem);
// })

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
});

$(document).ready(function(){
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


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);









