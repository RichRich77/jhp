// initiate bulma carousel
document.addEventListener('DOMContentLoaded', function(){
   var carousels = bulmaCarousel.attach();
 }, false);

$.get("/api/clothing/gender/women", function(data){
   // console.log (data)
})