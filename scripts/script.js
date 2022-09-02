$( document ).ready(function() {
  

  $('.depts').slick({
    dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left' aria-label='Previous'></button>",
              nextArrow:"<button type='button' class='slick-next pull-right' aria-label='Next'></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.25,
          slidesToScroll: 3
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.slick-workspace').slick({
    dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left' aria-label='Previous'></button>",
              nextArrow:"<button type='button' class='slick-next pull-right' aria-label='Next'></button>",
    infinite: false,
    speed: 300,
    slidesToShow:5.25,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.slick').slick({
    dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left' aria-label='Previous'></button>",
              nextArrow:"<button type='button' class='slick-next pull-right' aria-label='Next'></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 4.25,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
   $('#blog-swiper').slick({
    dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left' aria-label='Previous'></button>",
              nextArrow:"<button type='button' class='slick-next pull-right' aria-label='Next'></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
       {
              breakpoint: 9999,
              settings: "unslick"
       },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 2
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
    
    
    
    // SEARCH EMULATE
    $('input#search-input').on('focus', function() {
     // console.log(this.value.length);
      $(this).parent().addClass('active');
      });
    
     $('input#search-input').on('blur', function() {
     // console.log(this.value.length);
      $(this).parent().removeClass('active');
      });
    
    
    
    
    
    $('#underlay, button.close').on('click', function() {
     $('body').removeClass('openrightmenu openleftmenu menuopen');
      $('#rightMenu, #leftMenu').attr('aria-expanded', 'false');
    });
    
    
    $('#accountToggle').on('click', function() { 
     $('body').toggleClass('openrightmenu');
      $('body').toggleClass('menuopen');
        $('#rightMenu').attr('aria-expanded', function (i, attr) {
          return attr == 'true' ? 'false' : 'true';
        });
    });
    
    
    
    $('#menuToggle').on('click', function() {
     $('body').toggleClass('openleftmenu');
      $('body').toggleClass('menuopen');
        $('#leftMenu').attr('aria-expanded', function (i, attr) {
          return attr == 'true' ? 'false' : 'true';
        });
    });
    
    
    // Accordion fix
    
     $('.accordion .btn').on('click', function() { 
       if ($(this).closest('.card').hasClass("accordionopen")) {
        $(this).closest('.card').removeClass('accordionopen');
      }else{
        $('.accordion .card').removeClass('accordionopen');
       $(this).closest('.card').addClass('accordionopen');
      }
       
       
     });
    
    
   
    
    // Copy link to page
    $('#urlcopy').on('click', function() { 
     /* var dummy = document.createElement('input'),
      text = window.location.href;
  
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      //console.log(text);*/
       $(this).find('span').text("Link copied to clipboard");
          setTimeout( function(){ 
          $('#urlcopy span').text("Copy link to this page");
        }  , 2000);
    });
    
  }); // end of doc ready