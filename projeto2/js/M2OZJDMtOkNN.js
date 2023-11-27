/*
 Project name:       MODELTHEME
 Project author:     ModelTheme
 File name:          Custom JS
*/

(function ($) {
    'use strict';


    new WOW().init();

    // jQuery preloader
    jQuery(window).load(function(){
        jQuery( '.quintuswp_preloader_holder' ).fadeOut( 1000, function() {
            jQuery( this ).fadeOut();
        });
    });

    jQuery("#myCarousel").carousel();

    jQuery('a.print-portfolio').on( "click", function(event) {
        event.preventDefault();
    });

    jQuery('[data-toggle="tooltip"]').tooltip();


    if (jQuery('.author-content').length){
        jQuery(".author-content").stickit({
            screenMinWidth: 768,
            top: 100,
        });
    }
    if (jQuery('.right-side-sharer').length){
        jQuery(".right-side-sharer").stickit({
            screenMinWidth: 768,
            top: 90,
        });
    }

    // FIXED SEARCH FORM
    jQuery('.mt-search-icon').on( "click", function() {
        jQuery('.fixed-search-overlay').toggleClass('visible');
    });

    jQuery('.fixed-search-overlay .icon-close').on( "click", function() {
        jQuery('.fixed-search-overlay').removeClass('visible');
    });
    jQuery(document).keyup(function(e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
            jQuery('.fixed-search-overlay').removeClass('visible');
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
        }
    });



    jQuery('#mt-nav-burger').on( "click", function() {
        // jQuery(this).toggleClass('open');
        jQuery('.fixed-sidebar-menu').toggleClass('open');
        jQuery(this).parent().find('#navbar').toggleClass('hidden');
        jQuery('.fixed-sidebar-menu-overlay').addClass('visible');
    });

    /* Click on Overlay - Hide Overline / Slide Back the Sidebar header */
    jQuery('.fixed-sidebar-menu-overlay').on( "click", function() {
        jQuery('.fixed-sidebar-menu').removeClass('open');
        jQuery(this).removeClass('visible');
    });    
    /* Click on Overlay - Hide Overline / Slide Back the Sidebar header */
    jQuery('.fixed-sidebar-menu .icon-close').on( "click", function() {
        jQuery('.fixed-sidebar-menu').removeClass('open');
        jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
    });




    // 9th MENU Toggle - Hamburger
    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-btn-active") === true) ? this.classList.remove("is-btn-active") : this.classList.add("is-btn-active");
      });
    }
    

    $(document).ready(function() {

        jQuery( ".fixed-sidebar-menu .menu-button" ).on( "click", function() {
            jQuery(this).parent().parent().parent().parent().toggleClass('open');
            jQuery(this).toggleClass('open');
        });

        if (jQuery(window).width() < 760) {
            jQuery( ".menu-item-has-children" ).on( "click", function() {
                jQuery(this).find('.sub-menu').first('.sub-menu').toggle('shown');
                jQuery('.sub-menu.shown').removeClass('.shown');
            });
        }
   
        jQuery("#contact01_form").validate({
            //Ajax validation rules
            validClass:'validated',
            rules: {
                user_first_name: {
                    required: true,
                    minlength: 2
                },
                user_last_name: {
                    required: true,
                    minlength: 2
                },
                user_message: {
                    required: true,
                    minlength: 10
                },
                user_subject: {
                    required: true,
                    minlength: 5
                },
                user_email: {
                    required: true,
                    email: true
                }
            },
            //Ajax validation messages
            messages: {
                user_first_name: {
                    required: "Please your first name",
                    minlength: "Your first name must consist of at least 2 characters"
                },
                user_last_name: {
                    required: "Please your last name",
                    minlength: "Your last name must consist of at least 2 characters"
                },
                user_message: {
                    required: "Please enter a message",
                    minlength: "Your message must consist of at least 10 characters"
                },
                user_subject: {
                    required: "Please provide a subject",
                    minlength: "Your subject must be at least 5 characters long"
                },
                user_email: {
                    required: "Please enter a valid email address"
                } 
            },
            //Submit via Ajax Form
            submitHandler: function() {
                jQuery('#contact01_form').ajaxSubmit();
                jQuery('.success_message').fadeIn('slow');
            }
        });
        //End: Validate and Submit contact form via Ajax




        jQuery('#contact01_form input[name="user_first_name"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("user_first_name-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("user_first_name-validated");
            }
        });
        jQuery('#contact01_form input[name="user_last_name"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("user_last_name-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("user_last_name-validated");
            }
        });
        jQuery('#contact01_form input[name="user_email"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("email-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("email-validated");
            }
        });
        // $("#textbox").on('change keyup paste', function() {
        jQuery('#contact01_form input[name="user_subject"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("subject-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("subject-validated");
            }
        });
        jQuery('#contact01_form input[name="user_message"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("message-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("message-validated");
            }
        });


        
        //Begin: Parallax
        if (jQuery('.parralax-background').length){
            jQuery('.parralax-background').parallax("50%", 0.5);
        }
        if (jQuery('#parallax_pricin').length){
            jQuery('#parallax_pricing').parallax("50%", 0.3);
        }
        if (jQuery('#parallax_clients').length){
            jQuery('#parallax_clients').parallax("50%", 0.2);
        }
        if (jQuery('#parallax_contact').length){
            jQuery('#parallax_contact').parallax("50%", 0.1);
        }
        //End: Parallax



        /*Begin: Clients slider*/
        jQuery(".categories_shortcode").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   5],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Products by category*/
        jQuery(".clients-container").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : true,
            slideSpeed      : 700,
            paginationSpeed : 700,
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   3],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Portfolio single slider*/
        jQuery(".portfolio_thumbnails_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["",""],
            singleItem      : true
        });
        /*End: Portfolio single slider*/
        /*Begin: Testimonials slider*/
        jQuery(".post_thumbnails_slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        var owl = jQuery(".post_thumbnails_slider");
        jQuery( ".next" ).on( "click", function() {
            owl.trigger('owl.next');
        })
        jQuery( ".prev" ).on( "click", function() {
            owl.trigger('owl.prev');
        })
        /*End: Testimonials slider*/
        
        /*Begin: Testimonials slider*/
        jQuery(".testimonials_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        /*End: Testimonials slider*/
        /* Animate */
        jQuery('.animateIn').animateIn();
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = jQuery('.back-to-top');




        //hide or show the "back to top" link
        jQuery(window).scroll(function(){
            ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('modeltheme-is-visible') : $back_to_top.removeClass('modeltheme-is-visible modeltheme-fade-out');
            if( jQuery(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('modeltheme-fade-out');
            }
        });



        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });



        // contact form effect
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }




        //Begin: Skills
        jQuery('.statistics').appear(function() {
            jQuery('.percentage').each(function(){
                var dataperc = jQuery(this).attr('data-perc');
                jQuery(this).find('.skill-count').delay(6000).countTo({
                    from: 0,
                    to: dataperc,
                    speed: 5000,
                    refreshInterval: 100
                });
            });
        }); 
        //End: Skills 

    })
} (jQuery) )





;
