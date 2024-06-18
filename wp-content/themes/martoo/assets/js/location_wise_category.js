 var position, coords, latitude, longitude;

 function getdetails(position) {

     var xmlHttp = new XMLHttpRequest();
     xmlHttp.open("GET", 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyAmWOAM3cm_FoyLo_xwjXMws03i6OR1ZgQ&language=en', false); // false for synchronous request
     xmlHttp.send(null);

     var response = xmlHttp.responseText;
     var obj = JSON.parse(response);
 }

 (function($) {
     'use strict';
     $(document).ready(function() {

         function martoo_location_setCookie(cname, cvalue) {
             let d = new Date();
             d.setTime(d.getTime() + (60 * 1000));
             let expires = "expires=" + d.toGMTString();
             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
         }

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

         function checkCookie() {

             let location_value = martoo_location_getCookie("geolocation");
             if (location_value != "") {
                 console.log("Welcome again " + location_value);

                 /* var location_data = {
                     'action': 'martoo_lcoation_wise_category',
                     'martoo_loc': 'marina'
                 };
                 $.post( martoo_location_ck_ajax_obj.lcoationURL, location_data,function( location_data ) {
                     alert(location_data);
                 }); */

             } else {
                 //getdetails(position);
                 //location_value = prompt("Please enter your name:","");
                 //if (location_value != "" && location_value != null) {
                 martoo_location_setCookie("geolocation", 'marina');
                 //}
             }
         }

         checkCookie();
     });

 })(jQuery);