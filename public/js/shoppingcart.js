$(document).ready(function () {

    var smallInput = $("#smallInput");
    var mediumInput = $("#mediumInput");
    var largeInput = $("#largeInpt");
    var oneQuant = $("#one");
    var twoQuant = $("#two");
    var threeQuant = $("#three");
    var fourQuant = $("#four");
    var fiveQuant = $("#five");
    var quantity = $("#quantity");
    var black = $("#black");
    var red = $("#red");
    var white = $("#white");
    var blue = $("#blue");
    var green = $("#green");

$(document).on("click", "#addToBag", handleShirtSubmit);

    function handleShirtSubmit(event) {
        event.preventDefault();

        if ((!smallInput || !mediumInput || !largeInput) && 
        (!oneQuant || !twoQuant || !threeQuant || !fourQuant || !fiveQuant) && 
        (!black || !red || !white || !blue || !green)) {
            return;
        }

        upsertUser({
            clothing_type: "shirt",
            gender: "male",
            if (smallInput) {
                small_quantity: quantity.val()
            },
            if (mediumInput) {
                medium_quantity: quantity.val()
            },
            if (largeInput) {
                medium_quantity: quantity.val()
            },
            // color: 
        });
    }

    function upsertUser(userData) {
        $.put("/api/shoppingcart", userData)
            .then(getUsers);
    }

    function getUsers() {
        $.get("api/shoppingcart", userData);
    }
});
