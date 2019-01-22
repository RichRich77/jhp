makeEmptyBI();

function makeEmptyBI() {
    // set variables
    var itemLink = "https://via.placeholder.com/150";
    var itemName = "Blue Shirt";
    var itemPrice = 15.00;
    var itemSize = "small";
    var itemQTY = 2;

    var bagItem = $("<div>");
    bagItem.addClass("columns");

    // create left side of item
    var itemLeft = $("<div>");
    itemLeft.addClass("column");

    // create image to be added
    var img = $("<img>");
    // img.attr("src", itemLink);
    // img.attr("alt", itemName);
    img.attr("id", "biImage");

    // // add image to left side. add left side to item
    itemLeft.append(img);
    bagItem.append(itemLeft);

    // create right side of item
    var itemRight = $("<div>");
    itemRight.addClass("column is-three-quarters");

    // create column for delete button
    var itemDeleteColumn = $("<div>");
    itemDeleteColumn.addClass("column has-text-right");

    // add delete button to delete column
    itemDeleteColumn.append("<a href='#'><i class='fas fa-times'></i></a>");

    // create top row to hold delete button
    var itemDeleteRow = $("<div>");
    itemDeleteRow.addClass("columns");

    // add delete column to delete row. add delete row to right side
    itemDeleteRow.append(itemDeleteColumn);
    itemRight.append(itemDeleteRow);

    // create info portion of item
    var itemInfo = $("<div>");
    itemInfo.addClass("columns");

    // create basic info section
    var itemBasicInfo = $("<div>");
    itemBasicInfo.addClass("column");

    // add content to basic info
    var basicName = $("<p>")
    basicName.addClass("heading");
    basicName.attr("id", )
    // itemBasicInfo.append("<p class='heading' id='biName'>PRODUCT NAME</p>");
    // itemBasicInfo.append("<p class='heading'>$ <span id='biPrice'></span></p>")

    // add basic info to info portion of item
    itemInfo.append(itemBasicInfo);

    // // create size info section
    // var itemSizeInfo = $("<div>");
    // itemSizeInfo.addClass("column");

    // // add size heading to size info section.
    // itemSizeInfo.append("<p class='heading'>SIZE</p>");

    // // create size dropdown
    // var sizeDD = $("<div>");
    // sizeDD.addClass("dropdown is-hoverable");

    // // create sizedropdown label
    // var sizeDDInactive = $("<div>");
    // sizeDDInactive.addClass("dropdown-trigger");

    // // create size dropdown button
    // var sizeDDButton = $("<button>");
    // sizeDDButton.addClass("button is-small");
    // sizeDDButton.attr("aria-haspopup", TRUE);
    // sizeDDButton.attr("aria-controls", "dropdown-menu4");

    // // add spans to dropdown button
    // sizeDDButton.append("<span class='heading' id='biSize'></span>");
    // sizeDDButton.append("<span class='icon is-small' <i class = 'fas fa-angle-down' aria-hidden = 'true'></i></span>");

    // // size button should display desired size
    // $("#biSize").text(itemSize);

    // // add dropdown button to inactive dropdown
    // sizeDDInactive.append(sizeDDButton);
    // sizeDD.append(sizeDDInactive);

    // // sizedropdown content
    // var sizeDDContent = $("<div>");
    // sizeDDContent.addClass("dropdown-menu");
    // sizeDDContent.attr("id", "dropdown-menu4");
    // sizeDDContent.attr("role", "menu");

    // // size dropdown list
    // var sizeDDList = $("<div>");
    // sizeDDList.addClass("dropdown-content");

    // // add content to dropdown list
    // sizeDDList.append("<a href='#' class='dropdown-item heading biSizeSelect' value='small'>SMALL</a>");
    // sizeDDList.append("<a href='#' class='dropdown-item heading biSizeSelect' value='medium'>MEDIUM</a>");
    // sizeDDList.append("<a href='#' class='dropdown-item heading biSizeSelect' value='large'>LARGE</a>");

    // // add dropdown list to dropdown content
    // sizeDDContent.append(sizeDDList);
    // sizeDD.append(sizeDDContent);

    // // add dropdown to size info
    // itemSizeInfo.append(sizeDD);

    // // add size info to item info
    // itemInfo.append(itemSizeInfo);

    // // create qty info section
    // var itemQtyInfo = $("<div>");
    // itemQtyInfo.addClass("column");

    // // add heading to qty info
    // itemQtyInfo.append("<p class='heading'>QTY</p>");

    // // create qty counter
    // var qtyCounter = $("<p>");

    // // add +/- and qty to qty counter
    // qtyCounter.append("<a href = '#' class = 'heding biQtyLine' id = 'biDecQty'>- </a>");
    // qtyCounter.append("<span class='heading biQtyLine' id='biQty'></span>");
    // qtyCounter.append("<a href = '#' class = 'heading biQtyLine' id='biIncQty'> +</a>");

    // $("#biQty").text(itemQty);
    // itemQtyInfo.append(qtyCounter);
    // itemInfo.append(itemQtyInfo);

    // // create subtotal info seciont
    // var itemSubtotalInfo = $("<div>");
    // itemSubtotalInfo.addClass("column");

    // // add heading and info to subtotal info
    // itemSubtotalInfo.append("<p class='heading'>SUBTOTAL</p>");
    // itemSubtotalInfo.append("<p class='heading'>$ <span id='biSubtotal'>" + (parseFloat(itemPrice * itemQty)).toFixed(2) + "</span></p>");

    // // add subtotal info to item info
    // itemInfo.append(itemSubtotalInfo);

    // // add item info to right side
    itemRight.append(itemInfo);

    // add right side to item
    bagItem.append(itemRight);

    setBIValues(img);
    // add item to baglist  
    $("#bagList").append(bagItem);

}

function setBIValues(img) {
    console.log("hello");
    // set variables
    var itemLink = "https://via.placeholder.com/150";
    var itemName = "Blue Shirt";
    var itemPrice = 15.00;
    var itemSize = "small";
    var itemQTY = 2;

    img.attr("src", itemLink);
    img.attr("alt", itemName);




    $("#biPrice").text(itemPrice);
}