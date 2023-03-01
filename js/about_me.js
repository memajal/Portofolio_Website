

var view_my_cv_btn = document.getElementById("view_my_cv"); // get the view_my_cv button
var cv_img = document.getElementById("cv_img"); // get the cv image on about_me

cv_img.addEventListener("mouseover", (event) =>  /*add event to the cv image, so that when the user hovers on it
                                                    the image opacity changes and the button is shown*/
{
    cv_img.style.opacity = "0.2";
    view_my_cv_btn.style.display = "block";
});

/* add event to the cv image, so that when the user moves the mouse out
 * it returns the element how they were*/
cv_img.addEventListener("mouseout", (event) => {
    cv_img.style.opacity = "1";
    view_my_cv_btn.style.display = "none";
});

/*add the same event on mouse over also 
 when the user hover the view my cv button*/

view_my_cv_btn.addEventListener("mouseover", (event) => {
    cv_img.style.opacity = "0.2";
    view_my_cv_btn.style.display = "block";
});


var tablinks = document.getElementsByClassName("tablinks");  // get the 3 tablinks
var about_content = document.getElementsByClassName("content"); // get the 3 content of tablinks

function Event(i) {  // create a function that will hold the specific event on the user clicks a tablinks
    var i;
    for (var j = 0; j < tablinks.length; j++)  // create another variable to move through the 3 tablinks
        if (j == i) {   /*IF the new variable is equals with the variable that the user clicks, than if the content 
            is shown, hide it. Else show it */

            if (about_content[i].style.display == "block") {
                about_content[i].style.display = "none";
            } else {
                about_content[i].style.display = "block";
            }
        }

        else about_content[j].style.display = "none"; // Else, if F is not equals with what the user clicks, hide the other contents 
}
