function screenChange(screenWidth) {
  if (screenWidth < 768) {

    $(window).scroll(function() {
      var scrolledY = $(window).scrollTop();

    });


    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {

      } else {

      };
    });

  } else if (screenWidth >= 768 && screenWidth < 992) {




    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {


      } else {

      };
    });
  } else if (screenWidth >= 992) {


    if (screenWidth > 2000) {
      var borda = (screenWidth / 100);

    };

    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {

      };
    });
  }
};

screenChange(window.innerWidth);






$(window).resize(function() {






  screenChange(window.innerWidth);

});