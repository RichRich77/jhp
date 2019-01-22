// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#deleteCartItem").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/shoppingcart/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Cart Item Was Deleted.");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  