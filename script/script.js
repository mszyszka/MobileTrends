$(window).on('resize', setSectionHeight, setCarouselItemHeight);
$(window).on('load', checkSectionHeight, setCarouselItemHeight);

$(window).on('scroll', function(){
    addShadowToNavbarContainer();
    changeSizeOfNavbar();
});

// make .nav-container fixed and ad shadow to it when user scroll bellow header
function addShadowToNavbarContainer(){
    let scrollPosition = window.scrollY;
    let navContainer = document.getElementsByClassName('nav-container')[0];

    if(scrollPosition >= 1) {
        navContainer.classList.add('shadow');
    } else  {
        navContainer.classList.remove('shadow');
    }
}

//change size of navbar when scroll position Y is > 0
function changeSizeOfNavbar() {
    let scrollPosition = window.scrollY;
    let navbar = document.getElementById('navbarId');

    if(scrollPosition >=1) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }

}

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

function scrollToSection() {
    $('a[href^="#"]').on('click',function(e) {
        let dataTarget = e.target.dataset.target;
        let target = document.getElementsByClassName(dataTarget)[0];
        const documentWidth = $(document).width();

        // I need this if condition becouse I have two sections with target2 class.
        //first one is display < 768px, second is open > 768px
        //If I do not change the index of the searched class to [1] above 768px,
        // the script will take class.target2 with index [0] as the target, which is no longer displayed
        if(documentWidth >= 768 && (dataTarget == 'target2')) {
            target = document.getElementsByClassName(dataTarget)[1];
        }
        $(window).scrollTo(target, 500, {offset:-220});
    });
}

scrollToSection();

// owl carousels start & options
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

//height for owl-carousel item base on site with to make item responsive

function setCarouselItemHeight() {
    let windowWidth = window.innerWidth;
    let itemHeight = windowWidth - (windowWidth/2.5);
    let carouselItem = $('.ago-carousel-item');
    carouselItem.css('height', itemHeight);
}


