//----------------------------------------------------------------
// >>> TABLE OF CONTENTS:
//----------------------------------------------------------------



// Adding function to start RTL translation in js files

function iS_MARTOO_RTL() {
    if ((jQuery("html").attr("lang") == "ar") || (jQuery("html").attr("dir") == "rtl")) {
        return true;
    } else {
        return false;
    }
}

// 01. Header Mega Menu/Dropdown Menu

(function($) {
    'use strict';

    $(function() {

        $(document).ready(function() {



            function martoo_location_getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            var cp_date = new Date();
            cp_date.setTime(cp_date.getTime() + (60 * 60 * 1000));
            var expiry = '; expires=' + cp_date.toUTCString();


            var mcp_val = martoo_location_getCookie("cpopupset");

            if (mcp_val != '') {
                $("#constructionModal").removeClass("d-block");
            } else {
                $("#constructionModal").addClass("d-block");
                document.cookie = 'cpopupset=1' + expiry + '; path=/';
            }


            $("body").on('click', '.constructionModalclose', function() {
                $(".constructionModalclose").parents("#constructionModal").removeClass("d-block");
            });

            var martoo_c_direction = $("html").attr("dir");
            var rtlVal = '';
            //var navText_val = '';
            var navText_val_1 = '';
            var navText_val_2 = '';
            if (martoo_c_direction == 'rtl') {
                rtlVal = true;
                navText_val_1 = "<i class='fas fa-chevron-right'></i>";
                navText_val_2 = "<i class='fas fa-chevron-left'></i>";
            } else {
                rtlVal = false;
                //navText_val = "<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>";
                navText_val_1 = "<i class='fas fa-chevron-left'></i>";
                navText_val_2 = "<i class='fas fa-chevron-right'></i>";
            }

            // Hero slider JS
            $('#home_hero_slider').owlCarousel({
                rtl: rtlVal,
                animateOut: 'fadeOutLeft',
                animateIn: 'fadeIn',
                items: 1,
                loop: false,
                rewind: true,
                margin: 0,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false
            });
            var home_slider_owl = $('#home_hero_slider');
            // Listen to owl events:
            home_slider_owl.on('changed.owl.carousel', function(event) {
                var current = event.item.index;
                var newClaName = "home_sliding_" + current;
                var classStr = $('.home_body').attr('class');
                var lastClass = classStr.substr(classStr.lastIndexOf(' ') + 1);
                if (lastClass != newClaName) {
                    $(".home_body").removeClass(lastClass);
                }
                $(".home_body").addClass(newClaName);
            });

            /*product related slider*/
            $("#martoo_categories_home_carousel").owlCarousel({
                rtl: rtlVal,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                lazyLoad: true,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 3,
                        margin: 5
                    },
                    650: {
                        items: 5,
                        margin: 5
                    },
                    992: {
                        items: 6
                    },
                    1200: {
                        items: 7
                    },
                    /*1400: { items: 4, },  */
                    1800: {
                        items: 9
                    },
                }
            });

            $("#left_side_four").owlCarousel({
                rtl: rtlVal,
                items: 4,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    320: {
                        items: 2,
                        margin: 5
                    },
                    376: {
                        items: 2,
                        margin: 5
                    },
                    650: {
                        items: 3,
                    },
                    /* 992: { items: 4, }, */
                    1200: {
                        items: 3,
                    },
                    1400: {
                        items: 4,
                    },
                    1800: {
                        items: 5,
                    },
                }
            });

            $("#right_side_one").owlCarousel({
                rtl: rtlVal,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    320: {
                        items: 2,
                        margin: 5
                    },
                    376: {
                        items: 2,
                        margin: 5
                    },
                    650: {
                        items: 3,
                    },
                    992: {
                        items: 1,
                    }
                }
            });
            $("#right_side_TWO").owlCarousel({
                rtl: rtlVal,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    320: {
                        items: 2,
                        margin: 5
                    },
                    376: {
                        items: 2,
                        margin: 5
                    },
                    650: {
                        items: 3,
                    },
                    992: {
                        items: 1,
                    },
                    1300: {
                        items: 2,
                    }
                }
            });

            /*MARTOO LOADER ------ hiding */
            $("#martoo_ajaxloader").hide();

            var relatedslider = $("#related-product-carousal");
            relatedslider.owlCarousel({
                rtl: rtlVal,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    320: {
                        items: 2,
                        margin: 5
                    },
                    376: {
                        items: 2,
                        margin: 5
                    },
                    650: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    },
                    1400: {
                        items: 6,
                    },
                    1800: {
                        items: 7,
                    },
                }
            });

            /*relatedslider.on('mousewheel', '.owl-stage', function (e) {if (e.deltaY>0) {relatedslider.trigger('prev.owl');} else {relatedslider.trigger('next.owl');}e.preventDefault();});*/

            $("section.product-slider").each(function() {
                var item = $(this);
                item.appendTo(item.next().find(".wpb_wrapper"));
            });

            $(".horizontal-carousel .horizontal_sliding").each(function() {
                var martoo_points_clone = $(this).find(".left_side .reward_points").clone();
                var martoo_sale_clone = $(this).find(".left_side .onsale").clone();

                $(this).find(".percentage_side").prepend(martoo_sale_clone);
                $(this).find(".right_side").prepend(martoo_points_clone);

                $(this).find(".left_side .onsale").remove();
                $(this).find(".left_side .reward_points").remove();

            });

            $(".horizontal-carousel").owlCarousel({
                rtl: rtlVal,
                loop: false,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    576: {
                        items: 2,
                        margin: 5
                    },
                    768: {
                        items: 2,
                        margin: 15
                    },
                    992: {
                        items: 1,
                    },
                }
            });

            /*people may like slider**/

            var peoplemylikeslider = $("#people-may-carousal");
            peoplemylikeslider.owlCarousel({
                rtl: rtlVal,
                loop: false,
                margin: 0,
                stagePadding: 0,
                nav: true,
                lazyLoad: true,
                navText: [navText_val_1, navText_val_2],
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    376: {
                        items: 2,
                        nav: false
                    },
                    650: {
                        items: 3,
                        nav: false
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    },
                    1400: {
                        items: 6,
                    },
                    1600: {
                        items: 7,
                    },
                }
            });

            /*relatedslider.on('mousewheel', '.owl-stage', function (e) {if (e.deltaY>0) {relatedslider.trigger('prev.owl');} else {relatedslider.trigger('next.owl');}e.preventDefault();});*/


            /* product verticle slider*/

            /* $(".product-single-slider").owlCarousel({ items: 3, autoWidth: true, loop: false, mouseDrag: true, touchDrag: true, pullDrag: false, rewind: true, autoplay: false, lazyLoad: true, margin: 0, nav: false, itemsDesktop: false, itemsDesktopSmall: false, itemsTablet: false, itemsMobile: false }); */

            $(".product-single-slider-new .flex-control-nav").owlCarousel({
                rtl: rtlVal,
                items: 3,
                loop: false,
                margin: 10,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false
            });

            /**Add to cart***/
            //     $(document).on('click', '.martooplus, .martoominus ', function (e) { 
            //         e.preventDefault(); 
            //         var $thisbutton = $(this), $form = $thisbutton.closest('form.cart'), id = $thisbutton.val(), product_qty = $form.find('input[name=quantity]').val() || 1, product_id = $form.find('input[name=product_id]').val() || id, variation_id = $form.find('input[name=variation_id]').val() || 0; 
            //         var data = { action: 'woocommerce_ajax_add_to_cart', product_id: product_id, product_sku: '', quantity: product_qty, variation_id: variation_id, }; 
            //         $(document.body).trigger('adding_to_cart', [$thisbutton, data]); 
            //         $.ajax({ type: 'post', url: wc_add_to_cart_params.ajax_url, data: data, beforeSend: function (response) { $thisbutton.removeClass('added').addClass('loading'); }, complete: function (response) { $thisbutton.addClass('added').removeClass('loading'); }, success: function (response) { if (response.error && response.product_url) { window.location = response.product_url; return; } else { $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]); } }, }); return false; });				/**Add to cart end***/					/* function strict */

            /* single order item in list dashborad */

            $(".order_list_carousel").owlCarousel({
                rtl: rtlVal,
                margin: 5,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                lazyLoad: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                    1600: {
                        items: 5,
                    },
                }
            });

            $(".owl-carousel").owlCarousel({
                rtl: rtlVal,
                loop: false,
                margin: 15,
                stagePadding: 0,
                navText: [navText_val_1, navText_val_2],
                nav: true,
                // lazyLoad: true,  
                dots: false,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    320: {
                        items: 2,
                        margin: 5
                    },
                    376: {
                        items: 2,
                        margin: 5
                    },
                    650: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    },
                    1400: {
                        items: 6,
                    },
                    1800: {
                        items: 7,
                    },
                }
            });


        });


        $(document).ready(function() {
            /*Mobile Menu*/

            /*-------------------------------------------------------- */

            var bodyObj = $('body');

            var MenuObj = $("#menu");

            var mobileMenuObj = $('#mobile-menu');

            bodyObj.wrapInner('<div id="page"></div>');

            var toggleMenu = {

                elem: MenuObj,

                mobile: function() {

                    /*activate mmenu*/

                    mobileMenuObj.mmenu({

                        slidingSubmenus: false,

                        position: 'left',

                        zposition: 'front'

                    }, {

                        pageSelector: '#page'

                    });



                    /*hide desktop top menu*/

                    this.elem.hide();

                },



                desktop: function() {

                    /*close the menu*/

                    mobileMenuObj.trigger("close.mm");



                    /*reshow desktop menu*/

                    this.elem.show();

                }

            };
            Harvey.attach('screen and (min-width:1px)', {

                setup: function() {

                    /*called when the query becomes valid for the first time*/

                },

                on: function() {

                    /*called each time the query is activated*/

                    toggleMenu.mobile();

                },

                off: function() {

                    /*called each time the query is deactivated */

                }

            });





            Harvey.attach('screen and (min-width:1000000000000000px)', {

                setup: function() {

                    /* called when the query becomes valid for the first time */

                },

                on: function() {

                    /* called each time the query is activated */

                    toggleMenu.desktop();

                },

                off: function() {

                    /* called each time the query is deactivated */

                }

            });


        });


        /************Add Qty******************/

        /* ------------ Categoty dropdown ------------- */
        $(document).ready(function() {

            //removing the category links
            //$(".widget_product_categories ul.product-categories li.cat-parent > a").attr("href","javascript:void(0)");
            /* $(".widget_product_categories ul.product-categories li.cat-parent > a").each(function(){
        var the_text = $(this).text();
        $(this).html(the_text+"<i class='fas fa-angle-down'></i>");
      });
    

      $(".widget_product_categories ul.product-categories li:has(ul)").find("a").find("i").click(function(event) {
		    event.preventDefault();
        var parent = $(this).parent();
        parent.siblings().find("ul").slideUp("slow").parent().removeClass("shown").find("i").removeClass("fa-angle-up").addClass("fa-angle-down"); 
        parent.find("ul:first").slideToggle("slow").parent().toggleClass("shown"); 
        $(".widget_product_categories ul.product-categories li.cat-parent").each(function(){
          if($(this).hasClass("shown")) {
            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
            console.log("shown");
          }
          else {
            $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            console.log("hidden");
          }
        });
        
      }); */
            /* $("#mobile-menu .widget_product_categories ul.product-categories li.cat-parent > a").each(function(){
        $( "<i class='fas fa-angle-down'></i>" ).insertAfter( $(this) );
      });
    

      $("#mobile-menu .widget_product_categories ul.product-categories li:has(ul)").find("a").next("i").click(function(event) {
		    event.preventDefault();
        var parent = $(this).parent();
        parent.siblings().find("ul").slideUp("slow").parent().removeClass("shown").find("i").removeClass("fa-angle-up").addClass("fa-angle-down"); 
        parent.find("ul:first").slideToggle("slow").parent().toggleClass("shown"); 
        $("#mobile-menu .widget_product_categories ul.product-categories li.cat-parent").each(function(){
          if($(this).hasClass("shown")) {
            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
           
          }
          else {
            $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            
          }
        });
        
      }); */



            // $("ul.menu.mm-list li.menu-item-has-children > a").attr("href","javascript:void(0)");
            $("ul.menu.mm-list li.menu-item-has-children > a.mm-subopen").remove();
            $("ul.menu.mm-list li.menu-item-has-children > a").each(function() {
                //var the_text = $(this).text();
                //$(this).html(the_text+"<i class='fas fa-angle-down'></i>"); 
                $("<i class='fas fa-angle-down'></i>").insertAfter($(this));
            });


            $("ul.menu.mm-list li:has(ul)").find("a").next("i").click(function() {
                var parent = $(this).parent();
                parent.siblings().find("ul").slideUp("slow").parent().removeClass("shown");
                parent.find("ul:first").slideToggle("slow").parent().toggleClass("shown");
                $("ul.menu.mm-list li.menu-item-has-children").each(function() {
                    if ($(this).hasClass("shown")) {
                        $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
                        console.log("shown");
                    } else {
                        $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
                        console.log("hidden");
                    }
                });

            });


            /* ----------------- Checkout page dom --------- */

            /*  setTimeout(function(){
               $("#mycred-partial-payment-woo").prependTo("#payment .martoo_inner_white_checkout");
               $("<div id='checkbox_for_partial_payment_holder'><input id='payment_method_mycred' type='checkbox' name='payment_method' value='mycred' data-order_button_text=''><label for='payment_method_mycred'>Pay with martoo wallet </label></div>").insertBefore("#mycred-partial-payment-woo");
               
               $("#payment_method_mycred").click(function(){
                 $("#mycred-partial-payment-woo").slideToggle();
               });
             },1000 );
             setTimeout(function(){
               $("#mycred-partial-payment-woo").slideUp();
             },1000 );
             $(".checkout_page_default_Shipping_address").appendTo("#order_review .martoo_inner_white_checkout");
              */








        });


        $(document).ready(function() {

            $('body ').on('click', '.cart button.martooplus, .cart button.martoominus', function(event) {
                event.preventDefault();
                setTimeout(function() {
                    $('.woocommerce-info').remove();
                }, 1000);
            });
        });
        /* $('#dropdownLoginMenu').on('click', function(){
        	
        	
        	$('#loginformheader').toggle();
        	
        }); */


        /* Header when sticky -------------------- */
        $(document).ready(function() {

            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var header = $("header");
                if (scroll > 0) {
                    header.addClass("sticky_header");

                } else {
                    header.removeClass('sticky_header');
                }
            });

            /* $(".price .amount > bdi").each(function(){
              var the = $(this).html();
              var split_1 = the.split(".")[0];
              var split_2 = the.split(".")[1];
              var new_sup = ".<sup>"+split_2+"</sup>";

              $(this).html(split_1+new_sup);
            }); */


            /* homepage */

            function section_equal() {
                $(".comparing_section_height").each(function() {
                    var left_side_height = $(this).find(".comparing_section_height_left").height();
                    var right_side_height = $(this).find(".comparing_section_height_right").height();

                    if ($(window).width() > 991) {
                        if (left_side_height > right_side_height) {
                            console.log(">");
                            var diff_left_right = left_side_height - right_side_height;
                            var left_side_height_of_image = $(this).find(".home-ads-banners img").height();
                            var new_img_height = left_side_height_of_image - diff_left_right;

                            $(this).find(".home-ads-banners img").css("height", new_img_height);
                        } else {
                            console.log("<");
                            var diff_left_right = right_side_height - left_side_height;
                            var left_side_height_of_image = $(this).find(".home-ads-banners img").height();
                            var new_img_height = left_side_height_of_image + diff_left_right;

                            $(this).find(".home-ads-banners img").css("height", new_img_height);
                        }
                    }
                });
            }

            setTimeout(function() {
                section_equal();
            }, 1000);

            $(window).resize(function() {
                $(".comparing_section_height .home-ads-banners img").css("height", "auto");
                footer_base_main_height();

                /* setTimeout(function(){
                  section_equal();
                },200); */

            });

            function footer_base_main_height() {

                var martoo_footer_height = $("footer.site-footer").height();
                var martoo_body_height = $(window).height();
                var martoo_header_height = $("header").height();
                var new_martoo_calc_height_main = martoo_body_height - martoo_header_height - martoo_footer_height;
                $("main.site-main").css("min-height", new_martoo_calc_height_main + "px");
            }

            footer_base_main_height();

            /* setTimeout(function(){
              if($('html').attr('lang') == 'ar') {

                var need_to_translate = {
                  "We will update you once we launch!":"سوف يتم إعلامكم فور إطلاق الموقع!",
                  "Type your email":"أدخل بريدك الإلكتروني",
                  "Update me":"اطلعني على",
                  "Social Connect":"التواصل الإجتماعي"
                };
               
                $.each( need_to_translate, function( key, value ) {
                  $('body').html($('body').html().replace(key, value));
                  console.log( key + ": " + value );
                });
              }
            }, 1000); */

            $("body").click(function(e) {
                if ($(e.target).attr('id') == 'search_result_div') {
                    return;
                } else if ($(e.target).attr('id') == 'marTOO_search_submit') {
                    return;
                } else {
                    $("form#martoo_product_search input[type='text']").val('');
                    $('#search_result_div').slideUp();
                }
            });

            $('body').on('updated_checkout', function() {
                $(".woocommerce-terms-and-conditions-link").attr("class", 'woocommerce-terms-and-conditions');

                if ($('#payment_method_mycred').is(':checked')) {
                    $('#mycred-partial-payment-woo').slideUp();
                } else {
                    $('#mycred-partial-payment-woo').slideDown();
                }

                if ($('form.checkout input[name^="payment_method"]').length > 0) {
                    //$('form.checkout #place_order').addClass("greybutton");
                    if ($('form.checkout input[name^="payment_method"]').is(':checked')) {
                        $('form.checkout #place_order').removeClass("greybutton");
                    } else {
                        $('form.checkout #place_order').addClass("greybutton");
                    }
                } else {
                    $('form.checkout #place_order').removeClass("greybutton");
                }

            });

            $(document).ajaxComplete(function() {
                if ($('body').hasClass('woocommerce-cart')) {
                    $('html, body').stop();
                }
            });

        });

    });
})(jQuery);
jQuery(function() {
    var M_reg_firstname_required = '';
    var M_reg_lastname_required = '';
    var M_reg_only_letters = '';
    var M_reg_required_field = '';

    if (iS_MARTOO_RTL()) {
        M_reg_firstname_required = "يرجى ادخال الاسم الاول";
        M_reg_lastname_required = "تفضل بإدخال الإسم العائلي";
        M_reg_only_letters = "مسموح بإدخال الحروف فقط";
        M_reg_required_field = "هذه الخانة مطلوبة";

    } else {
        M_reg_firstname_required = "Please enter your firstname";
        M_reg_lastname_required = "Please enter your lastname";
        M_reg_only_letters = "Only letters are allowed";
        M_reg_required_field = "This field is required";

    }

    jQuery.validator.addMethod("lettersonlyy", function(value, element) {
        //return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
        return this.optional(element) || /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\s]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\s]*$/i.test(value);
    }, "Only letters are allowed");

    jQuery("form[id='registerform']").validate({
        // Specify validation rules
        rules: {
            fname: {
                lettersonlyy: true,
                required: true,
            },
            lname: {
                lettersonlyy: true,
                required: true,
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        // Specify validation error messages
        messages: {
            fname: {
                required: M_reg_firstname_required,
                lettersonlyy: M_reg_only_letters
            },
            lname: {
                required: M_reg_lastname_required,
                lettersonlyy: M_reg_only_letters
            },
            email: {
                required: M_reg_required_field,
            },
            phone: {
                required: M_reg_required_field,
            },
            password: {
                required: M_reg_required_field,
            }

        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    /* jQuery("#mobile_search_icon").on("click", function(){
      jQuery(".search_col").slideToggle();

      
      if( jQuery("body .search_col").css('display') == 'block' ){
        jQuery("body #woocommerce-product-search-field-0").focus();
      }
      
    }); */

    jQuery('#mobile_search_icon').click(function() {
        var clicks = jQuery(this).data('clicks');
        if (clicks) {
            // odd clicks
            jQuery("body .search_col").slideUp();
            jQuery("body #woocommerce-product-search-field-0").blur();
        } else {
            // even clicks       
            jQuery("body .search_col").slideDown();
            jQuery("body #woocommerce-product-search-field-0").focus();
        }
        jQuery(this).data("clicks", !clicks);
    });


    // Reset password ----- woocommerce account 

    var M_Reset_pass_required = '';
    var M_Reset_pass_min_length = '';
    var M_Reset_pass_mismatch = '';

    if (iS_MARTOO_RTL()) {
        M_Reset_pass_required = "يرجى إدخال كلمة السر الجديدة";
        M_Reset_pass_min_length = "يرجى إدخال 8 أحرف كحد أدنى";
        M_Reset_pass_mismatch = "كلمات السر غير متطابقة";
    } else {
        M_Reset_pass_required = "Please enter a new password";
        M_Reset_pass_min_length = "Password must be a minimum of 8 characters";
        M_Reset_pass_mismatch = "Passwords are not identical";
    }

    jQuery("form[id='Martoo_Reset_passw_wc']").validate({
        // Specify validation rules
        rules: {
            password_1: {
                required: true,
                minlength: 8
            },
            password_2: {
                required: true,
                minlength: 8,
                equalTo: '[name="password_1"]'
            }
        },
        // Specify validation error messages
        messages: {
            password_1: {
                required: M_Reset_pass_required,
                minlength: M_Reset_pass_min_length
            },
            password_2: {
                required: M_Reset_pass_required,
                minlength: M_Reset_pass_min_length,
                equalTo: M_Reset_pass_mismatch
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });


    // ---------- New close icon toggle for mobile view of site -----------------------

    jQuery(document).ready(function() {
        if (jQuery(window).width() < 768) {
            jQuery('body').on('click', '.menu-toggle-icon', function() {
                jQuery(this).toggleClass("menu__opened", "menu_close");
            });

            jQuery('body').on('click', '.menu__opened', function() {
                jQuery('#mobile-menu .close').trigger("click");
            });

            jQuery('body #mm-blocker').on('touchstart', function() {
                jQuery('body .menu-toggle-icon').removeClass("menu__opened");
            });

            jQuery('body').on('click', '#mobile-menu .close', function() {
                jQuery('body .menu-toggle-icon').removeClass("menu__opened");
            });

        }
    });


});