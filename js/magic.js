$( "button" ).on( "click", function() {
  var newHtml = "<div class='col-lg-12'>" +
                "<h1 class='page-header'>Darragh's Amazing Card Trick! </h1>" +
            "</div>" +
  "<div class='col-lg-2 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='images/jack_of_spades2.png' alt=''><a></div>" +
  "<div class='col-lg-2 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='images/jack_of_diamonds2.png' alt=''><a></div>" +
  "<div class='col-lg-2 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='images/queen_of_clubs2.png' alt=''><a></div>" +
  "<div class='col-lg-2 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='images/queen_of_hearts2.png' alt=''><a></div>" + 
  "<div class='col-lg-2 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='images/BurgerKing.jpg' alt=''></a><h2> TA'DA! </h2></div>";
  

  $( ".magic" ).html(newHtml);
 
 
});