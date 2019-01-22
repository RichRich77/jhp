$(document).ready(function() {
  
});



// var numItems; // number of items in cart
// $("#cartSubtotal").text(234.43);
// $("#cartTax").text((234.43 * 0.075).toFixed(2));
// $("#cartTotal").text((0 + (234.43 * 1.075)).toFixed(2));

// // add onclick for adding to cart     to increment numitems however many


// // When the page loads, grab and display all of our chirps
// // $.get("/shoppingcart", function(data) { //pretty sure gotta change this line

// //     if (data.length !== 0) {
  
// //       for (var i = 0; i < data.length; i++) {
  






// //         var row = $("<div>");
// //         row.addClass("chirp");
  
// //         row.append("<p>" + data[i].author + " chirped.. </p>");
// //         row.append("<p>" + data[i].body + "</p>");
// //         row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
// //         $("#chirp-area").prepend(row);
  
// //       }
  
// //     }
  
// //   });
  


    

    
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





// // }
// $(document).ready(function () {

//     var smallInput = $("#smallInput");
//     var mediumInput = $("#mediumInput");
//     var largeInput = $("#largeInpt");
//     var oneQuant = $("#one");
//     var twoQuant = $("#two");
//     var threeQuant = $("#three");
//     var fourQuant = $("#four");
//     var fiveQuant = $("#five");
//     var quantity = $("#quantity");
//     var black = $("#black");
//     var red = $("#red");
//     var white = $("#white");
//     var blue = $("#blue");
//     var green = $("#green");


//     $(function () {
//         $('.button').click(function () {
//             $(this).toggleClass('on');
//         });
//     });

//     $(document).on("click", "#addToBag", handleShirtSubmit);

//     function handleShirtSubmit(event) {
//         event.preventDefault();

//         // if ((!smallInput || !mediumInput || !largeInput) &&
//         //     (!oneQuant || !twoQuant || !threeQuant || !fourQuant || !fiveQuant) &&
//         //     (!black || !red || !white || !blue || !green)) {
//         //     return;
//         // }

//         upsertItem({
//             clothing_type: "shirt",
//             gender: "men",
//             small_quantity: 1,
//             medium_quantity: 0,
//             large_quantity: 0,
//             color: "white",
//             price: 54.99,
//             review: "5",
//             image: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/09/11/57d5cb5e2599fe3e2a00776d/m_57d5cb5e2599fe3e2a00776e.jpg"
//         });
//     }

//     function upsertItem(itemData) {
//         $.post("/api/shoppingcart", itemData)
//             .then(getItems);
//     }

//     function getItems() {
//         $.get("/api/shoppingcart", itemData);
//     }
// });
