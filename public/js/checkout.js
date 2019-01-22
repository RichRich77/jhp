$(document).ready(function () {

$(document).on("click", ".checkout", checkoutButton);

    function checkoutButton(event) {
        event.preventDefault();

        // if ((!smallInput || !mediumInput || !largeInput) &&
        //     (!oneQuant || !twoQuant || !threeQuant || !fourQuant || !fiveQuant) &&
        //     (!black || !red || !white || !blue || !green)) {
        //     return;
        // }


        var successMessage = '<a href="/"><h3>Success!</h3><h3>One Step closer to curing cancer!</h3></a>';
        $('.message').html(successMessage);


       updateClothing();
    }

    function updateClothing(itemData) {
        $.ajax({
          method: "PUT",
          url: "/api/posts",
          data: { small_quantity: 99}
        })
          .then(getItems);
      }

    function getItems() {
        $.get("/api/clothing", itemData);
    }
});