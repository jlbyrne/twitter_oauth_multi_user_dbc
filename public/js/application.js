$(document).ready(function() {
  
	$('form#tweet_out').submit(function(e) {
    e.preventDefault();
    $('form').attr('disabled', 'disabled')
    $('.confirmation').html("<img src='ajax-loader.gif'>");

    var request = $.post('/tweet_me', $(this).serialize())

    request.done( function(response) {
      $('form').removeAttr('disabled');
      $('.confirmation').html("you've YAWPed!");
    });
    
    request.fail( function(response){
      $('form').removeAttr('disabled');
      $('.confirmation').html("Something went wrong.  YAWP again.");
    });
  });
  
});
