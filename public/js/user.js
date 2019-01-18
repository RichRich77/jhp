$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });


$(document).ready(function() {

var nameInput = $("#user-name");
var emailInput = $("#email-input");
var passwordInput = $("#password-input");

 $(document).on("submit", ".register-form", handleUserFormSubmit);

 function handleUserFormSubmit(event) {
     event.preventDefault();
    //  var userData = {
    //     email: emailInput.val().trim(),
    //     password: passwordInput.val().trim()
    //   };

     if(!nameInput.val().trim().trim() && !emailInput.val().trim().trim() && !passwordInput.val().trim().trim()) {
         return;
     }

     upsertUser({
         name: nameInput.val().trim(),
         email: emailInput.val().trim(),
         password: passwordInput.val().trim()
     });
     
    //  $('#log-info').html("Logged In");
 }

 function upsertUser(userData) {
     $.post("api/users", userData)
     .then(getUsers);
 }

 function getUsers() {
     $.get("api/users", userData);
 }
});