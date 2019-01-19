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


    $(function () {
        $('.button').click(function () {
            $(this).toggleClass('on');
        });
    });

    $(document).on("click", "#addToBag", handleShirtSubmit);

    function handleShirtSubmit(event) {
        event.preventDefault();

        // if ((!smallInput || !mediumInput || !largeInput) &&
        //     (!oneQuant || !twoQuant || !threeQuant || !fourQuant || !fiveQuant) &&
        //     (!black || !red || !white || !blue || !green)) {
        //     return;
        // }

        upsertItem({
            clothing_type: "shirt",
            gender: "men",
            small_quantity: 1,
            medium_quantity: 0,
            large_quantity: 0,
            color: "white",
            price: 54.99,
            review: "5",
            image: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/09/11/57d5cb5e2599fe3e2a00776d/m_57d5cb5e2599fe3e2a00776e.jpg"
        });
    }

    function upsertItem(itemData) {
        $.post("/api/shoppingcart", itemData)
            .then(getItems);
    }

    function getItems() {
        $.get("/api/shoppingcart", itemData);
    }
});
