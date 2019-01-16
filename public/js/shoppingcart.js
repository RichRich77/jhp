var numItems; // number of items in cart
$("#numItems").text(4); // update 
$("#cartSubtotal").text(234.43);
$("#cartTax").text((234.43 * 0.075).toFixed(2));
$("#cartTotal").text((0 + (234.43 * 1.075)).toFixed(2));

// add onclick for adding to cart to increment numitems however many

for (var i = 1; i <= numItems; i++){
    addToBagList()
}