// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eat-btn").on("click", function (event) {
    
    var id = this.id;
    
    console.log("this in burger js", this);
    console.log("this . id", this.id);

    var newState = {
      "id": id      

    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("burger has been sent");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit-btn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurger = {
        burger_name: $("#burger-name").val().trim(),
        
      };

      // Send the POST request.
      $.ajax("/api/create", {
        type: "POST",
        data: newBurger
      }).done(
        function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });

});