$(document).ready(function() {
  //We create a delegated event!
  $( "#list" ).on( "click", "a", function( event ) {
    event.preventDefault();
    console.log($(this).text());
  });
});

