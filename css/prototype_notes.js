$(document).ready(function() {
  $(".prototype_note").click(function() {
    $(".prototype_note_content").slideToggle("fast",function() {
      $(".prototype_note > h3").toggleClass('open');
    });
  });
});