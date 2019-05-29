$(window).on('resize', setSectionHeight);
$(window).on('load', checkSectionHeight);


// Start carousel
$(document).ready(function() {
        //Initializes the carousel 
        $('.carousel').carousel({
            interval: 3000,
            pause: "hover"
        })
        //Stop it when window width is > 768px
        // const windowWidth = $(window).width();
        // if(windowWidth >= 768){
        //     $('.carousel').carousel('pause'); 
        //     console.log('over 768px');
        // }
    }
);
// //Add class to carousel item
// $(document).ready(function() {
//     let windowWidth = $(window).width();
//     if(windowWidth >= 768) {
//         $('.no-active').addClass('active');
//     }
// });

// // Remove class from carousel item when width is < 768
// $(window).on('resize', function(){
//     const windowWidth = $(window).width();
//     if(windowWidth < 768) {
//         $('.no-active').removeClass('active');
//     }
// });

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
