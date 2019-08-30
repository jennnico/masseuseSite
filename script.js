$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    var nav = $('.navigation')
    // var sticky = nav.offsetTop;
    // if(window.pageYOffset >= sticky){
    //   nav.addClass("sticky");
    // }else{
    //   nav.removeClass("sticky");
    // }

     /* Check the location of each desired element */
     $('.fade').each( function(i){

         var bottom_of_object = $(this).position().top + $(this).outerHeight();
         //var middle_of_object = $(this).position().top + $(this).outerHeight()/2;
         var middle_of_object = $(this).position().top + 600;
         var bottom_of_window = $(window).scrollTop() + $(window).height();

         /* If the object is completely visible in the window, fade it it */
         if( bottom_of_window > middle_of_object ){

             $(this).animate({'opacity':'1'},800);

               nav.addClass("sticky");

         } else{

           nav.removeClass("sticky");

         }

     });  /*fade-in*/

  }); /*window scroll*/

//Variables for pagespeed
var mobileNav = $('.nav-items')
var rhombus = $('.rhombus')

  //Mobile hamburger click
  $('.mobile-menu').click(function(){

    //toggle mobile nav and rhombuses
    if((mobileNav).hasClass('mobile-nav')){
      mobileNav.removeClass('mobile-nav');
      rhombus.css("display", "inline");
    }else{
        mobileNav.addClass('mobile-nav');
        rhombus.css("display", "none");

        //Close nav when the user makes a selection
        $('a').click(function(){
          mobileNav.removeClass('mobile-nav');
          rhombus.css("display", "inline");
        });
    }
  });

  /*Nav needs:
    X  1. Close nav when the user clicks on a nav item
      2. Sticky nav
  */

})
