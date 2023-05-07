let immage = document.getElementById("pointer");
let formaDiv = document.querySelector(".formaDiv")




immage.addEventListener("mouseenter", function(){
    formaDiv.classList.toggle("show")
});
immage.addEventListener("mouseleave", function(){
    formaDiv.classList.toggle("show")
})