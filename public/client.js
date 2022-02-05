$(document).ready(function(){
    $.getJSON("/datastore", function(result){
      $.each(result, function(i, k){
        $("#display").append(
            '<div class="box" data-aos="flip-down"> <h2>' + k.username + '</h2><br>' + 
            '<h3>' + k.topic + '</h3>' + '<br>' +
            '<h3>' + k.comment + '</h3></div>'
        );
      });
    });
});