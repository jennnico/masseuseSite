$(document).ready(function() {

  $(window).scroll(function(){

    /*Sticky nav*/
    var nav = $('.navigation')
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
var mobileNav = $('.nav-items');
var rhombus = $('.rhombus');
var home = $('#home');//main header text

$('.mobile-menu').click(function(){

  //toggle mobile nav and rhombuses
  if((mobileNav).hasClass('mobile-nav')){
    mobileNav.removeClass('mobile-nav');
    mobileNav.animate({left: "100%"});
    rhombus.css("display", "block");
    $('body').css("overflow", "auto");
  }else{
      mobileNav.addClass('mobile-nav');
      mobileNav.animate({left: "0"});
      rhombus.css("display", "none");
      $('body').css("overflow", "hidden");

      //Close nav when the user makes a selection
      $('a').click(function(){
        mobileNav.removeClass('mobile-nav');
        mobileNav.animate({left: "100%"});
        rhombus.css("display", "block");
        $('body').css("overflow", "auto");
      });//a element click
  }//else
}); //Hamburger


})
