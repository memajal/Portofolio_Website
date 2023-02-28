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


/* javascript code to change the menu color when the user click the arrows */

var arrow_array = document.getElementsByClassName("arrow"); // get all arrows

document.addEventListener("click", function () {
    var buttonClicked = event.target;
    if (buttonClicked.className == "arrow") { /* If one of arrows is clicked then set the specific nav 
        from desktop and mobile class to active. Set also Home class to default. 
        Else if it is not clicked set the class to default*/

        for (var i = 0; i < arrow_array.length; i++) {
            if (arrow_array[i] == buttonClicked) {
                buttonsArray[i + 1].className = "active";
                buttonsArray_mobile[i + 1].className = "active";

                buttonsArray[0].className = "default";
                buttonsArray_mobile[0].className = "default";
            }
            else {
                buttonsArray[i + 1].className = "default";
                buttonsArray_mobile[i + 1].className = "default";
            }

        }

    }
});
