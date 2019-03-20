$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 8,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
});

$( ".owl-prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
$( ".owl-next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');