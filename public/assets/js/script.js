
$(function() {
  $(".devour-burger").on("click", function(event) {
    event.preventDefault();
 
    var id = $(this).data("id");
    
    $.ajax("/burgers/" + id, {
      method: "PUT",
    }).then(
      function(data) {
      console.log(data)
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
   
    event.preventDefault();
   

    var newBurger = {
      burger_name: $("#br").val().trim()
    };

    console.log(newBurger)

    $.ajax("/burgers", {
      method: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });

});