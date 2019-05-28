// Start carousel
$(document).ready(function() {
        //Initializes the carousel 
        $('.carousel').carousel({
            interval: 3000,
            pause: "hover"
        })
        // //Stop it when window width is > 768px
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
