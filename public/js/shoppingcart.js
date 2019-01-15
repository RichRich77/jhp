var numItems = 0; // number of items in cart
$("#numItems").text(4);
$("#cartSubtotal").text(234.43);
$("#cartTax").text((234.43 * 0.075).toFixed(2));
$("#cartTotal").text((0 +(234.43 * 1.075)).toFixed(2));