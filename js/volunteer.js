$(document).ready(function() {

  $(".cta-volunteer").click(function(evt) {
        evt.preventDefault();
        console.log("btn clicked");

    $(".volunteer-container").fadeIn(300);
  })

  $('.overlay, .volunteer-close, .volunteer-close-btn').click(function() {
    console.log("overlay clicked");
     $(".volunteer-container").fadeOut(300);
  })

  $(".volunteer-form").submit(function() {
    $(".volunteer-subhead, .volunteer-submit-btn, #vol-form-qtns").hide();
    $('.volunteer-thnx').fadeIn(200);


  })


});
