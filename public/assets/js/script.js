
$(function() {
  $(".devour-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    
    $.ajax("/burgers/" + id, {
      method: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed to", newDevoured);
      
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
   
    event.preventDefault();
    console.log("in script.js createform")

    var newBurger = {
      burger_name: $("#br").val().trim(),
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