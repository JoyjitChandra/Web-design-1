window.onload=function(){
    // $('.slider').slick({
    // autoplay:true,
    // autoplaySpeed:1500,
    // centerMode:true,
    // slidesToShow:4,
    // slidesToScroll:3,
    // arrow:false,
    
    // });
    $('.responsive').slick({
      
      infinite: false,
      speed: 300,
       autoplay:true,
      autoplaySpeed:2000,
   
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots:true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  };
  