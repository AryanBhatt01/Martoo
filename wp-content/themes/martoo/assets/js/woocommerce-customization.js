(function($) {
    'use strict';

    $(document).ready(function($) {
        $('.remove_from_wishlist-custom').click(function(e) {
            e.preventDefault();
            if (confirm('Are you Sure')) {

                var id = $(this).data('id');
                var data = $('#' + id).serialize();
                //var nonce = wp_obj.nonce,
                $.ajax({
                    type: "POST",
                    url: wp_obj.admin_ajax,
                    data: data,
                    success: function() {
                        location.reload();
                    },
                    fail: function(xhr, textStatus, errorThrown) {
                        alert('request failed');
                    }
                });
            }

        });
    });


    /* $(document).ready(function(){
    	$("body").on("click",'#send_otp', function(){
    		
    		var phoneotp = $("#shippingform").find("#phone").val();
    		
    		alert(phoneotp);

    			
    			var data = {
    				'action': 'martoocallGenerateRestApi',
    				'phonenumber': phoneotp,
    				'nonce': wp_obj.nonce
    			};
    		
    			$.post( wp_obj.admin_ajax, data,function( data ) {
    				alert( "Data Loaded: " + data );
    			});
    		
    		
    	});
    	
    }); */

    /* on load if form is there in header and body both then remove header one */

    $(document).ready(function() {
        if ($(".entry-content #loginform, #registerform").length) {
            var error_or_notice = $("header").find("#loginform").prev(".woocommerce-notices-wrapper").html();
            $(".entry-content #loginform").prev(".woocommerce-notices-wrapper").html(error_or_notice);
            $("header").find("#loginform").parents(".dropdown-login").remove();
        }
        $(".martoo_toggle_password").click(function() {

            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $(this).parent().find("input[name=password]");
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    });

    $(document).ready(function() {

        $("body").on('click', '.martoo_radio', function() {

            var orderid = this.id;

            $("#orderid").val(orderid);
        });

    });


})(jQuery);