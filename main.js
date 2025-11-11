var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    items: 4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplayHoverPause:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

