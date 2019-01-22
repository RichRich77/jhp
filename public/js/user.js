$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});


$(document).ready(function() {

var nameInput = $("#user-name");
var emailInput = $("#email-input");
var passwordInput = $("#password-input");
var nameInput2 = $("#name-input2");
var passwordInput2 = $("#password-input2");

 $(document).on("submit", ".register-form", handleUserFormSubmit);
 $(document).on("submit",".login-form", handleUserFormSubmit2);

 function handleUserFormSubmit(event) {
     event.preventDefault();
    //  var userData = {
    //     email: emailInput.val().trim(),
    //     password: passwordInput.val().trim()
    //   };

       
     if(!nameInput.val().trim().trim() && !emailInput.val().trim().trim() && !passwordInput.val().trim().trim()) {
         return;
     }
     var successMessage = '<a href="/"><h3>Success!</h3><h3>Click to Continue</h3></a>';
     $('.message').html(successMessage);

     upsertUser({
         name: nameInput.val().trim(),
         email: emailInput.val().trim(),
         password: passwordInput.val().trim()
     
     });
     

 

 function upsertUser(userData) {
     $.post("api/users", userData)
     .then(getUsers);
 }

 function getUsers() {
     $.get("api/users", userData);
 }
}

//====================================================================

function handleUserFormSubmit2(event) {
    event.preventDefault();
   //  var userData = {
   //     email: emailInput.val().trim(),
   //     password: passwordInput.val().trim()
   //   };

      
    if(!nameInput2.val().trim().trim() && !passwordInput2.val().trim().trim()) {
        return;
    }
    var successMessage2 = '<a href="/"><h3>Success!</h3><h3>Click to Continue</h3></a>';
    $('#message').html(successMessage2);

    upsertUser({
        name: nameInput2.val().trim(),
        password: passwordInput2.val().trim()
    
    });
    



function upsertUser(userData) {
    $.post("api/users", userData)
    .then(getUsers);
}

function getUsers() {
    $.get("api/users", userData);
}
}



//====================================================================
});
