$(document).ready(function() {
  $("#list a").on( "click", function(event){
    event.preventDefault();
    console.log( $( this ).text() );
  });
});

