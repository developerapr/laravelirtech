 $(window).on("load",function(){     
    $(".scrolldata").mCustomScrollbar();
});
$(document).ready(function () {
$('.about-us__nav .nav-item a[href^="#"], .irtab__nav .nav-item a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if(target != "#history"){
            $('.thecompany').addClass("show active");
            $('.irtab').addClass("show active");
            $('.history').removeClass("show active");
            setTimeout(function(){
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 25
                }, 900, 'swing', function () {
                    // window.location.hash = target;
                });
            },100);
        } else {
            $('.thecompany').removeClass("show active");
            $('.irtab').removeClass("show active");
        }
        $(this).parent().addClass('active');
        $('.nav-link').not(this).parent().removeClass('active');
    });
  $('.infra-carousel, .career-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        navContainerClass:'owl-nav owl-nav-irtech position-relative w-100',
        navClass:['owl-prev text-right m-0','owl-next text-left m-0'],
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.management-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.infra-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $("#menu").mmenu({
        "extensions": [
            "pagedim-black",
            "position-right"
        ],
        navbars: [{
            position: 'top',
            content: [
                'prev',
                'title',
                'close'
            ]
        }, ]

    });
    
    $('.subnavttl').click(function() {

        if ($(this).parent('.subnavdetailblk').hasClass('activenav')) {

            $('.subnavinfoblk').slideUp();
            $('.subnavdetailblk').removeClass('activenav');
            return false;
        }

        $('.subnavinfoblk').slideUp();
        $('.subnavdetailblk').removeClass('activenav');

        $(this).next('.subnavinfoblk').slideDown();
        $(this).parent('.subnavdetailblk').addClass('activenav');

    });
  /* search */
   document.querySelector('.searchContainer').addEventListener("click",function(){
        $('.search').focus();
        $('.topMenuChnage .Left_nav').hide();
    });
    $('.search').blur( function() {
      $('.topMenuChnage .Left_nav').show('slow'); 
    });

     $('#bannerSlider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
    })
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    if ($(".filter-button").hasClass("active")) {

    } else {
        $(".topTabs ul li:nth-child(1) .filter-button").addClass("active");
    }

    $(".filter-button").click(function () {
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });


    $('#clients').owlCarousel({
        items:5,
        loop: true,
        margin: 40,
        autoplay: true,
        lazyload:true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 2
            },

            600: {
                items: 3
            },
            700: {
                items: 5
            }
        }
    })
    $('#productsSlider').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        lazyload:true,
        autoplayTimeout: 2500,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 2,
            },
            700: {
                items: 3,
            }
        }
    });


    // back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    // back to top end
});
//close the alert after 3 seconds.
$(document).ready(function () {
    if ($(".alert").length) {
        setTimeout(function () {
            $(".alert").alert('close');
        }, 3000);
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("header").addClass("whiteBG");
    } else {
        $("header").removeClass("whiteBG");
    }
});
$(document).ready(function () {
      var bigimage = $("#big");
      var thumbs = $("#thumbs");
      bigimage.find(".paddingDiv").css({ opacity: 0, left: "200px" })
      bigimage.find(".paddingDiv").stop(true, true).delay(100).animate({ opacity: 1, left: "0" }, 400)

      //var totalslides = 10;
      var syncedSecondary = true;

      bigimage
        .owlCarousel({
        items: 1,      
        loop: true, 
        autoplay: true,
        autoplayHoverPause:true,
        autoplayTimeout:12000,
        nav: false,         
        dots: true,          
        responsiveRefreshRate: 200,
        navText: [
            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
          ]
        })
});
$(document).ready(function () {
      $(".left_navigation > ul > li a").click(function (i) {
        $(this).closest("li").siblings().find("div").slideUp(100), $(this).next("div").slideToggle(100)
      })
      $(".select_ind_inner").click(function () {
        $(this).toggleClass("select_ind_add"), $(".inner_menu_2").slideToggle(150)
      })
      $(".searchIcon").click(function () {
        $(".searchDiv").toggle();
      })
});
$(function () {
    $('#requestForm').submit(function (e) {
        e.preventDefault();
        var form = $("#requestForm");
        var formData = new FormData(form[0]);
        $(".invalid-feedback").children("strong").text("");
        $("#requestForm input").removeClass("is-invalid");
        $.ajax({
            method: "POST",
            processData: false,
            contentType: false,
            url: form.attr('action'),
            data: formData,
            success: (response) =>{
              if(response.status==200){
                $('#requestForm').trigger("reset");              
                  swal({                       
                         icon: "success",
                         title: "Success!",
                         text: "Thank you, you hab been subscribe success fully.",                       
                         className: "red-bg",
                         timer:5000
                 });  
              }
            },
            error: (response) => {
                if(response.status === 422) {
                      let errors = response.responseJSON.errors;
                    Object.keys(errors).forEach(function (key) {
                          swal({
                        buttons: false,
                         title: "Error!",
                         text:errors[key][0],                       
                         className: "red-bg",
                         timer: 1500
                     });                        
                    });
                  
                } else {
                    window.location.reload();
                }
            }
        })
    });
});
/* product slider*/
$(document).ready(function(){
    var sync1 = $(".slider");
    var sync2 = $(".navigation-thumbs");

    var thumbnailItemClass = '.owl-item';

    var slides = sync1.owlCarousel({
        video:true,
        startPosition: 0,
        items:1,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
        nav: false,
        dots: false
    }).on('changed.owl.carousel', syncPosition);

    function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
    }else{
        var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
        var duration = 300;
        sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
    }
    var thumbs = sync2.owlCarousel({
    startPosition: 0,
    items:3,
    loop:false,
    margin:10,
    autoplay:false,
    nav: true,
    dots: false,
    navContainerClass:'owl-nav owl-nav-im d-flex justify-content-between position-absolute m-auto',
    navClass:['owl-prev m-0','owl-next m-0'],
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    onInitialized: function (e) {
        var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
        thumbnailCurrentItem.addClass('synced');
    },
    })
    .on('click', thumbnailItemClass, function(e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
    }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
    });
});
