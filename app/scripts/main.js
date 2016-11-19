$(document).ready(function() {
  $("#list a").on( "click", function(event){
    event.preventDefault();
    console.log( $( this ).text() );
  });

  //We add a new element to the list after binding event.
  // Add a new element on to our existing list
  $( "#list" ).append( "<li><a href='http://newdomain.com'>Item #5</a></li>" );
});

