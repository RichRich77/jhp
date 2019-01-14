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