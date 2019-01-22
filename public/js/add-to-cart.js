// The code in add-to-cart.js handles what happens when the user adds an item to the cart.
$(document).ready(function () {

    // When user clicks addToCart
    $("#addToBag").click(function() {
        // event.preventDefault();

        // // Get basic info about selection
        var sIID = $(this).parent().attr("id").trim();
        var sIQty = $(this).parent().find("#itemQty").text().trim();
        var sISize = "small".trim();
        var sIColor = "blue".trim();
console.log("made");

        // Make a new cart item object
        var newCartItem = {
            productID: parseInt(sIID),
            selectedSize: sISize,
            selectedQty: parseInt(sIQty),
            color: sIColor            
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/shoppingcart", newCartItem)
        .then (function(data){
            console.log(data);
        });

    });

    // get size desired
    $(".size-selection").click(function () {
        var selSize = $(this).attr("id");
        $(this).parent().innerHTML = selSize;
    
    // TODO
        // set ID for grandparent to size so we can access it later
    });

    // set desired color
    $(".color-selection").click(function() {
        var selColor = $(this).attr("id");
        var curVal = $(this).parent().parent().attr("value");
        // console.log("currval = " + curVal + "   selVal = " + selColor);

    // TODO
        // manage to get the darn color
    });


    // decrement particular item before adding to cart
    $("#decItemQty").click(function(){
        var curQty = $(this).siblings("#itemQty").text();
        console.log(curQty + "-");
        if (curQty > 0){
            curQty--;
            $(this).siblings("#itemQty").text(curQty);
        }
    });

    // increment particular item before adding to cart
    $("#incItemQty").click(function(){
        var curQty = $(this).siblings("#itemQty").text();
        // var stockCheckID = $(this).parent().parent().parent().val();
        if (true){ //checkStock(stockCheckID)){
            curQty++;
            $(this).siblings("#itemQty").text(curQty);
        }
    });
});