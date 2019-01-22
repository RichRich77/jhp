var numItems; // number of items in cart
$("#cartSubtotal").text(234.43);
$("#cartTax").text((234.43 * 0.075).toFixed(2));
$("#cartTotal").text((0 + (234.43 * 1.075)).toFixed(2));

// add onclick for adding to cart to increment numitems however many


// When the page loads, grab and display all of our chirps
// $.get("/shoppingcart", function(data) { //pretty sure gotta change this line

//     if (data.length !== 0) {
  
//       for (var i = 0; i < data.length; i++) {
  






//         var row = $("<div>");
//         row.addClass("chirp");
  
//         row.append("<p>" + data[i].author + " chirped.. </p>");
//         row.append("<p>" + data[i].body + "</p>");
//         row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
//         $("#chirp-area").prepend(row);
  
//       }
  
//     }
  
//   });
  


    

    
// function loadShoppingCart() {
//     // display how many items in cart
//     $("#numItems").text(numItems); // update 

//     // left join. and then use new joined shopping cart to do everything
//     // SELECT * FROM ShoppingCart
//     // LEFT JOIN Clothing ON ShoppingCart.ProductID = Clothing.ID
//     // ORDER BY ShoppingCart.ID;

//     for (var i = 1; i <= numItems; i++) {
//         SELECT 
//         addToBagList();
//     }





// }