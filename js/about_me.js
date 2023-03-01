

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

