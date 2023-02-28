/*change the color of desktop navbar when the user click the menu
 * this is made through the 2 clases: default and active*/

var navbar = document.getElementById("desktop_menu");
var buttonsArray = navbar.getElementsByTagName("A"); // get all A Tags of Menu

navbar.addEventListener("click", function () {
    var buttonClicked = event.target; // save the click event to the var buttonClicked
    if (buttonClicked.tagName == "A") { // If one of A from Navbar is clicked, set her class to active. Else let it to default
        for (var i = 0; i < buttonsArray.length; i++) {
            if (buttonsArray[i] == buttonClicked) buttonsArray[i].className = "active";
            else buttonsArray[i].className = "default";
        }
    }
});

/* mobile menu to change the color of menu when it is clicked 
 The idea is the same with desktop menu, only that the event listener is added to mobile nav*/

var navbar_mobile = document.getElementById("mobile-menu");
var buttonsArray_mobile = navbar_mobile.getElementsByTagName("A");
navbar_mobile.addEventListener("click", function () {
    var buttonClicked = event.target;
    if (buttonClicked.tagName == "A") {
        for (var i = 0; i < buttonsArray_mobile.length; i++) {
            if (buttonsArray_mobile[i] == buttonClicked) buttonsArray_mobile[i].className = "active";
            else buttonsArray_mobile[i].className = "default";
        }
    }
});