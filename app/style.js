
const navButton = document.getElementById("btn");
const navigation = document.querySelector(".show");

navButton.addEventListener('click', function(){
    console.log("hello");

    navigation.classList.toggle("show");

});