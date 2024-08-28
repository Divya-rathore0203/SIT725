$(document).ready(function () {
 
    $('#clickMeButton1').click(() => {
  
        $.ajax({url: "index.html", success: function(result){
            alert("You clicked on Healthy Recipies!")
       
       }});
    })}
)
