$(window).on('resize', setSectionHeight);
$(window).on('load', checkSectionHeight);


// // Start carousel
// $(document).ready(function() {
//         //Initializes the carousel 
//         $('.carousel').carousel({
//             interval: 3000,
//             pause: "hover"
//         })
//     }
// );

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
