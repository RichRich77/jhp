// The code in add-to-cart.js handles what happens when the user adds an item to the cart.

// When user clicks addToCart
$("#addToBag").on("click", function(event) {
    event.preventDefault();

    // Get id, size, & qty of item
    var itemID = $(this).val();
    console.log(itemID);
    // Make a new cart item object
    var newCartItem = {
      
    //   author: $("#author").val().trim(),
    //   genre: $("#genre").val().trim(),
    //   pages: $("#pages").val().trim()
    };
  
    // // Send an AJAX POST-request with jQuery
    // $.post("/api/new", newCartItem)
    //   // On success, run the following code
    //   .then(function(data) {
    //     // Log the data we found
    //     console.log(data);
    //   });
  
  
  });
  