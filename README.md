# jhp
clothing store:


### Requirements

Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)


# Unit 16 - Project Suggestions

### Overview

Since projects are being worked on this unit, you won't have a homework assignment, but a project is a perfect context in which to practice writing tests! 

Incorporate a few of the below suggestions into your project. You'll write better code, and it will help you consolidate your testing habits.

- - -

### Testing Suggestions

* Set up Karma so you can run your tests as you develop.

* Prior to implementing a feature, use Nightmare to write a functional test for it.

* Prior to implementing a function, use Mocha and Chai to write unit tests against it.

* Run your tests prior to committing your code so you can be sure nothing breaks between commits.

* **Non-Obligatory Bonus**: If you're confident and feel like you have some time to tinker, set up [Travis CI](https://travis-ci.org/). This will automatically run your tests whenever you or any of your team members makes a commit. 



### Bluebook
Clothing = {
    clothing_type:  {shirt, short, pant, sock, underwear}
    gender          {male, female, unisex}
    small_quantity  INT
    medium_quantity INT
    large_quantity  INT
    color           {white,black, blue, red, green}
    price           FLOAT
    image           STRING
}

**Shopping Cart**
    myBagTitle          -- My Bag (<number of items in cart>) title
    keepShopping        -- link to keep shopping (next to myBagTitle)
    myBagBody           -- body of mybag (includes bagList and checkoutBox)
    bagList             -- display of items in cart
    checkoutBox         -- checkout card
    orderSummaryTitle   -- title for order summary card
    cartSubtotal        -- subtotal to be used in order summary card
    cartTax             -- estimated tax to be used in order summary card.
    cartTotal           -- order total
    ShoppingCart        -- shopping cart table
    loadShoppingCart    -- js function to load shopping cart

  **FOR JQUERY**
    #myBagTitle         -- header for shopping cart
    #numItems           -- number of items in cart
    #keepShoppingLink   -- link to keep shopping
                            - sends you to all products
    #myBagBody          -- body of my bag
    #bagList            -- display of all items in cart
    #biImage            -- image of item. 
                            - change src and alt
    #biName             -- name of item
                            - change text with name of item
    #biPrice            -- price of item
                            - change text with unit price of item
    #biSize             -- dropdown set to chosen size
    .biSizeSelect       -- options in size dropdown
                            - changeable
    #biQuantity         -- quantity of item at that size
                            - changeable
    #biDecQuant         -- button to decrement quantity of item
    #biIncQuant         -- button to increment quantity of item
    .biQuantLine        -- elements that should all be on one line for quantity of item
    #biSubtotal         -- subtotal of that number of carts 

**Home**
    PATH: /
    METHOD:
    AJAX REQUESTS:
        ON LOAD:
        ON CLICK:
    LINKS TO:
        /products
        /cart
        /aboutJHP
**All Products** -- wishlist - sort by & filter by categories
    PATH: /products
        /products/:categories
    METHOD:
    AJAX REQUESTS: 
        ON LOAD:   
        ON CLICK:  
    LINKS TO:
**Individual Product**
    PATH: /products/:itemID
    METHOD:
    AJAX REQUESTS:
        ON LOAD:
        ON CLICK:
    LINKS TO:
**Cart**
    PATH: /cart
    METHOD:
    AJAX REQUESTS:
        ON LOAD:
        ON CLICK:
    LINKS TO:
**Checkout**
    PATH:   /cart/checkout
    METHOD:
    AJAX REQUESTS:
        ON LOAD:
        ON CLICK:
    LINKS TO:
**Mission Statement**
    
    PATH: /aboutJHP
    METHOD:
    AJAX REQUESTS:
        ON LOAD:
        ON CLICK:
    LINKS TO:


sign in/sign up - modal



# API Routes

## Random Pupper

### CLIENT (REQUESTS):

**PATH:** /api/randompupper

**METHOD:** GET

**DESCRIPTION:** Returns information about a random pupper.

### SERVER (RESPONSES):

**STATUSES:** 200 - Good, 500 - Server Error

**EXAMPLE RESPONSE BODY:**: 
```json
{
    "id": 5,
    "name": "doggo",
    "picture": "https://image.com",
    "info": "Doggo is the best doggo in the whole world of doggos, loves everyone.",
    "shelterEmail": "help@savedogs.com",
    "shelterName": "Save Dogs",
}
```

## New Pupper

### CLIENT (REQUESTS):

**PATH:** /api/newpupper

**METHOD:** POST

**DESCRIPTION:** Stores a new pupper in the database.

**EXAMPLE REQUEST BODY:** 
```json
{
    "name": "doggo",
    "picture": "https://image.com",
    "info": "Doggo is the best doggo in the whole world of doggos, loves everyone.",
    "shelterEmail": "help@savedogs.com",
    "shelterName": "Save Dogs",
}
```

### SERVER (RESPONSES):

**STATUSES:** 200 - Good, 500 - Server Error

**EXAMPLE RESPONSE BODY:**: 
On Success:
```json
{
    "id": 5,
    "name": "doggo",
    "picture": "https://image.com",
    "info": "Doggo is the best doggo in the whole world of doggos, loves everyone.",
    "shelterEmail": "help@savedogs.com",
    "shelterName": "Save Dogs",
}
```