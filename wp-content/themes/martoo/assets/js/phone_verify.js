(function($) {
    'use strict';


    /***************************** Phone Number *******************************************/

    var phone_VER_buton_send_otp = '';
    var phone_VER_buton_resend_otp = '';
    var phone_VER_msg_otp_incorrect = '';
    var phone_VER__plc_put_otp = '';
    var phone_VER__plc_put_otp_change_number = '';
    var phone_VER__plc_put_otp_want_to_change = '';
    var phone_VER__plc_put_otp_first_time_change_number = '';
    var phone_VER_invalid_Number = '';
    var phone_VER_invalid_Country_code = '';
    var phone_VER_too_short = '';
    var phone_VER_too_long = '';
    var phone_VER_enter_mobile = '';
    var phone_VER_email_IS_invalid = '';

    if (iS_MARTOO_RTL()) {

        phone_VER_buton_send_otp = "أرسل رمز التحقق";
        phone_VER_buton_resend_otp = "إعادة ارسال رمز التحقق";
        phone_VER_msg_otp_incorrect = "رمز التحقق غير صحيح";
        phone_VER__plc_put_otp = "الرجاء إدخال الأرقام الأربعة التي تلقيتها على";
        phone_VER__plc_put_otp_change_number = "تغيير الرقم";
        phone_VER__plc_put_otp_want_to_change = "ليس رقمك؟";
        phone_VER__plc_put_otp_first_time_change_number = "تغيير";
        phone_VER_invalid_Number = "الرقم غير صحيح";
        phone_VER_invalid_Country_code = "رمز البلد غير صحيح";
        phone_VER_too_short = "قصير جدا";
        phone_VER_too_long = "طويل جدا";
        phone_VER_enter_mobile = "يرجى إدخال رقم  الهاتف فقط";
        phone_VER_email_IS_invalid = "البريد الإلكتروني غير صحيح";

    } else {

        phone_VER_buton_send_otp = "Send Code";
        phone_VER_buton_resend_otp = "Resend Code";
        phone_VER_msg_otp_incorrect = "OTP is incorrect";
        phone_VER__plc_put_otp = "Please enter the 4 digits you received on";
        phone_VER__plc_put_otp_change_number = "Change number";
        phone_VER__plc_put_otp_want_to_change = "Not your number?";
        phone_VER__plc_put_otp_first_time_change_number = "Change";
        phone_VER_invalid_Number = "Invalid number";
        phone_VER_invalid_Country_code = "Invalid country code";
        phone_VER_too_short = "Too short";
        phone_VER_too_long = "Too long";
        phone_VER_enter_mobile = "Please enter only mobile numbers";
        phone_VER_email_IS_invalid = "Email is invalid";

    }

    $(document).ready(function() {




        var input = document.querySelector("#phone"),
            errorMsg = document.querySelector("#error-msg"),
            validMsg = document.querySelector("#valid-msg");

        // here, the index maps to the error code returned from getValidationError - see readme
        var errorMap = [phone_VER_invalid_Number, phone_VER_invalid_Country_code, phone_VER_too_short, phone_VER_too_long, phone_VER_invalid_Number];

        /*var martoo_phone_fld_placeholder = '';
         if(iS_MARTOO_RTL()){
            martoo_phone_fld_placeholder = "(Only UAE Numbers)";
        }else {
            martoo_phone_fld_placeholder = "(Only UAE Numbers)";
        }
         customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                return selectedCountryPlaceholder + " " +martoo_phone_fld_placeholder;
            },
        */

        // initialise plugin
        var iti = window.intlTelInput(input, {
            nationalMode: true,
            onlyCountries: ["ae"],
            allowDropdown: false,
            initialCountry: "ae",
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                return "05x xxx xxxx";
            },
            utilsScript: "/wp-content/themes/martoo/assets/js/phone/build/js/utils.js?1603274336113"
        });

        var reset = function() {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            /* errorMsg.classList.add("hide"); */
            validMsg.classList.add("hide");
        };


        // on blur: validate
        input.addEventListener('keyup', function() {

            if ($(input).is('[readonly=""]')) {
                return false;
            }
            reset();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    var numberType = window.intlTelInput.getNumberType;
                    //console.log(numberType);
                    //if (numberType == intlTelInputUtils.numberType.MOBILE) {
                    //alert('true');

                    //}
                    var validreg = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56)\d{7}$/;

                    var mobilenumber = input.value;
                    var numbermobile = mobilenumber.replace(/\s+/g, '');
                    //alert(numbermobile);
                    if (numbermobile.match(validreg)) {

                        if ($("#phone").parents(".register-phonenumber").find(".phone_verify_tick").length < 1) {


                            //alert('test');
                            /* $('#error-msg').hide();	 */
                            $("#phone").parent().find(".phone_verify_tick").remove();
                            $('#otpvarify').remove();
                            $("body").addClass("body_blurrr");
                            setTimeout(function() {
                                $('#createuser').prop("disabled", true);
                            }, 1500);

                            if ($('body #resending').val() == '1') {
                                $('#valid-msg').after('<div id="otpvarify"><div id="message"></div><button type="button" name="optbutton" id="optmartoo">' + phone_VER_buton_resend_otp + '</button><p class="mt-4" id="send_otp_text_edit_p">' + numbermobile + ' - ' + phone_VER__plc_put_otp_want_to_change + ' <span id="phone_redit">' + phone_VER__plc_put_otp_first_time_change_number + '</span></p>');
                            } else {
                                $('#valid-msg').after('<div id="otpvarify"><div id="message"></div><button type="button" name="optbutton" id="optmartoo">' + phone_VER_buton_send_otp + '</button><p class="mt-4" id="send_otp_text_edit_p">' + numbermobile + ' - ' + phone_VER__plc_put_otp_want_to_change + ' <span id="phone_redit">' + phone_VER__plc_put_otp_first_time_change_number + '</span></p>');
                            }


                            validMsg.classList.remove("hide");
                        }
                    } else {
                        $("body").removeClass("body_blurrr");
                        input.classList.add("error");
                        var errorCode = iti.getValidationError();
                        errorMsg.innerHTML = phone_VER_enter_mobile;
                        errorMsg.classList.remove("hide");
                        $('#otpvarify').remove();
                        $('body #phone').parents(".register-phonenumber").find(".phone_verify_tick").remove();
                        setTimeout(function() {
                            $('#createuser').prop("disabled", true);
                        }, 1500);

                    }
                } else {
                    $("body").removeClass("body_blurrr");
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    errorMsg.innerHTML = errorMap[errorCode];
                    errorMsg.classList.remove("hide");
                    $('#otpvarify').remove();
                    $('body #phone').parents(".register-phonenumber").find(".phone_verify_tick").remove();
                    setTimeout(function() {
                        $('#createuser').prop("disabled", true);
                    }, 1500);
                }
            }

        });

        // on keyup / change flag: reset
        input.addEventListener('change', reset);
        //input.addEventListener('keyup', reset);
        input.addEventListener('keypress', reset);

        input.addEventListener('keydown', reset);

    });



    /******************************** otp ***************************************/


    $(document).ready(function() {



        $("body").on('click', '#optmartoo', function() {


            var phonenumber = $('#phone').val();
            //alert(phonenumber);
            $.ajax({
                type: 'POST',
                url: martoo_phone_ajax_obj.ajaxURL,
                secure: true,
                data: {
                    'action': 'martoocallotpRestApi',
                    'phone': phonenumber,
                    'nonce': martoo_phone_ajax_obj.nonce
                },
                beforeSend: function() {
                    $('body #optmartoo').addClass('loading');
                },
                complete: function() {
                    $('body #optmartoo').removeClass('loading');
                },
                success: function(data) {
                    $('body #send_otp_text_edit_p').remove();
                    $('body #resending').val("1");
                    $('body #message').show();
                    $('body #message').html(data);
                    setTimeout(function() {
                        $('body #message').hide();
                    }, 2000);
                    //$('body #optmartoo').remove();
                    $('body #optmartoo').text(phone_VER_buton_resend_otp);
                    if ($("input[name='otpvalid']").length <= 0) {
                        $('body #optmartoo').before("<p class='mb-2'>" + phone_VER__plc_put_otp + " " + phonenumber + ". <span id='phone_redit'>" + phone_VER__plc_put_otp_change_number + "</span></p><input type='text' name='otpvalid' maxlength='4' class='form-control rounded' required><small id='otp_message' class='text-danger'></small>");
                    }
                    $("body input[name='otpvalid']").val("").focus();

                    $('#createuser').prop("disabled", false);
                }
            });
        });



    });

    /***************************** Phone Number verify *******************************************/
    $(document).ready(function() {
        $("#optmartoo").on('click', function() {

            var phonenumber = $('#phone').val();
            //alert(phonenumber);
            $.ajax({
                type: 'POST',
                url: martoo_phone_ajax_obj.ajaxURL,
                secure: true,
                data: {
                    'action': 'martoocallotpverifyRestApi',
                    'phone': phonenumber,
                    'nonce': martoo_phone_ajax_obj.nonce
                },
                success: function(data) {

                }
            });





            /*  var data = {
                'action': 'martoocallotpRestApi',
                'martoo_search': phonenumber,
                'nonce': martoo_phone_ajax_obj.nonce
            };
            $.post( martoo_phone_ajax_obj.ajaxURL, data, function( data ) {
                alert( "Data Loaded: " + data ); 
                
            }); */


        });

        $("body").on('keyup', 'input[name="otpvalid"]', function() {

            /* if($(this).val().length == $(this).attr("maxlength")){
                $(this).blur();
            } */

            if ($(this).val().length > 3) {

                var entered_otp = $(this).val();
                var base_url = window.location.protocol + "//" + window.location.hostname;
                //alert(entered_otp);
                $.ajax({
                    type: 'POST',
                    url: martoo_phone_ajax_obj.ajaxURL,
                    secure: true,
                    data: {
                        'action': 'martoo_otp_VERIFY',
                        'entered_otp': entered_otp,
                        'nonce': martoo_phone_ajax_obj.nonce
                    },
                    beforeSend: function() {
                        $('body #otp_message').addClass('loading');
                    },
                    complete: function() {
                        $('body #otp_message').removeClass('loading');
                    },
                    success: function(data) {
                        /* console.log(data); */
                        if ($.trim(data) == "Code is wrong.") {
                            $('body #phone').parent().find("small.text-success").remove();
                            $('body #otp_message').html(phone_VER_msg_otp_incorrect);
                        } else {
                            $("body").removeClass("body_blurrr");
                            $('#createuser').prop("disabled", false);
                            $('body #resending').val("");
                            $('body #otpvarify').hide();
                            $('body #optmartoo').remove();
                            $('body #otp_message').remove();
                            $('body input[name="otpvalid"]').attr("type", "hidden");
                            $('body #message').html("");
                            $('body #phone').after('<small class="phone_verify_tick text-success float-right mr-2" style="position:relative;margin-top:-3em;"><img src="' + base_url + '/wp-content/themes/martoo/assets/img/checkmark_green_circle.jpg"></small>');
                        }

                    }
                });

            }
        });

    });

    /***************************** Phone Number RE-edit *******************************************/
    $(document).ready(function() {
        $("body").on("click", "#phone_redit", function() {
            $("body").removeClass("body_blurrr");
            $('body #resending').val("");
            $('body #otpvarify').remove();
            $('body #optmartoo').remove();
            $('body #otp_message').remove();
            $('body input[name="otpvalid"]').attr("type", "hidden");
            $('body #message').html("");
            $('body input#phone').val("").focus();
        });
    });


    /***************************** EMAIL already exist *******************************************/

    $(document).ready(function() {
        $(document).on('change', '#registerform #email', function() {
            var email_pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

            var base_url = window.location.protocol + "//" + window.location.hostname;

            if (email_pattern.test($(this).val())) {

                $(this).parent().find(".text-danger").html("");

                var email_Address = $(this).val();

                $.ajax({
                    type: 'POST',
                    url: martoo_phone_ajax_obj.ajaxURL,
                    secure: true,
                    data: {
                        'action': 'martooemailExists',
                        'martoo_register_email': email_Address,
                        'nonce': martoo_phone_ajax_obj.nonce
                    },
                    success: function(data) {
                        if (data != 0) {
                            $("#registerform #email").parent().find(".text-success").html("");
                            $("#registerform #email").parent().find(".text-danger").html(data);
                            setTimeout(function() {
                                $('#createuser').prop("disabled", true);
                            }, 1500);
                        } else {
                            $(this).parent().find(".text-danger").html("");
                            $("#registerform #email").parent().find(".text-success").html("<img src='" + base_url + "/wp-content/themes/martoo/assets/img/checkmark_green_circle.jpg'/>");
                            /* $('#registerform #email').prop("readonly", true); */
                            $('#createuser').prop("disabled", false);
                        }

                    }
                });


            } else {

                $(this).parent().find(".text-success").html("");
                $(this).parent().find(".text-danger").html(phone_VER_email_IS_invalid);
            }

        });


    });



})(jQuery);