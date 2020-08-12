// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-meal").on("click", function(event) {
    var id = $(this).data("id");
  

    // var newSleepState = {
    //   devoured: true
    // };

    // Send the PUT request.
    $.ajax("/api/meals/" + id, {
      type: "PUT",
      data: this.data
    }).then(
      function() {
        console.log("user ate meal");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newMeal = {
      name: $("#ca").val().trim(),
      // devoured: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/meals", {
      type: "POST",
      data: newMeal
    }).then(
      function() {
        console.log("created new meal");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-meal").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/meals/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted meal", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
