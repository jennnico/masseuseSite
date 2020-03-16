$(document).ready(function() {

  $(window).scroll(function(){

    /*Sticky nav*/
    var $this = $(this);
    var headerHeight = $('.parallax.one').outerHeight();

    if($this.scrollTop() > headerHeight - 200){
        nav.addClass("sticky");
        $('.parallax.one').css("opacity", "0.9")
    } else{
        nav.removeClass("sticky");
        $('.parallax.one').css("opacity", "0.7")
    } /*sticky-nav*/

     /*Fade-in panels*/
     $('.fade').each( function(i){

         var bottom_of_object = $(this).position().top + $(this).outerHeight();
         //var middle_of_object = $(this).position().top + $(this).outerHeight()/2;
         var middle_of_object = $(this).position().top + 200;
         var bottom_of_window = $(window).scrollTop() + $(window).height();

         /* If the object is partially visible in the window, fade it in */
         if( bottom_of_window > middle_of_object ){
             $(this).animate({'opacity':'1'},800);
         }

     });  /*fade-in panels*/

  }); /*window scroll*/


//Hamburger
var nav = $('.navigation');
var stickyNav = $('.sticky');
var mobileNav = $('.navigation__items');
var rhombus = $('.rhombus');
var home = $('#home');//main header text

$('.navigation__burger').click(function(){

  //toggle mobile nav and rhombuses
  if((mobileNav).hasClass('mobile-nav')){
    stickyNav.css("height", "auto");
    mobileNav.removeClass('mobile-nav').animate({right: "-100%"});
    rhombus.css("display", "block");
    $('body').css("overflow", "auto");
  }else{
      stickyNav.css("height", "100%");
      mobileNav.addClass('mobile-nav').animate({right: "0"});
      rhombus.css("display", "none");
      $('body').css("overflow", "hidden");

      //Close nav when the user makes a selection
      $('a').click(function(){
        // nav.css("overflow", "hidden");
        mobileNav.removeClass('mobile-nav').animate({right: "-100%"});
        rhombus.css("display", "block");
        $('body').css("overflow", "auto");
      });//a element click
  }//else
}); //Hamburger


})
