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