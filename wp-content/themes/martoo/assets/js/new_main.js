(function($) {
    'use strict';
    $(document).ready(function() {
        $(".header-search .searchtop").keyup(function() {
            var datasearch;
            if ($(this).val().length >= 3) {
                $("#martoo_product_search button[type='submit']").removeAttr('disabled');
                var datasearch = $(this).val();

                var data = {
                    'action': 'martoo_woocommerce_product_search',
                    'martoo_search': datasearch,
                    'nonce': martoo_ajax_obj.nonce
                };
                $.post(martoo_ajax_obj.ajaxURL, data, function(data) {
                    /* alert( "Data Loaded: " + data ); */
                    $("#search_result_div").slideDown().html(data);
                });

                /*  if($("#search_result_div .each_col").length >= 3) {   
                     setTimeout(function(){ 
                         $("#martoo_product_search button[type='submit']").html("<span class='see-more'>See More</span>");
                     }, 500);
                 } */
                /* else {
                    $("#martoo_product_search button[type='submit']").attr("disabled", true);
                } */

            } else {
                $("#search_result_div").hide();
                /* $("#martoo_product_search button[type='submit']").html("<i class='fas fa-search'></i>"); */
            }

        });

    });

})(jQuery);


function updateqty(clicked_id) {

    var id = document.getElementsByClassName(clicked_id)[0].value = "0";

}