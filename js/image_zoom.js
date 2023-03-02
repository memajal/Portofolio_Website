

var img_modal = document.getElementById('img_zoom'); // get the div that will contain the image and the x button
var img_zoom = document.getElementById('img_zoom_content'); // get the image zoomed

document.addEventListener('click', function () {
    var buttonClicked = event.target;
    if (buttonClicked.className == "myImg") { /* if the user clicks one of the images shown for every image
                                                 show the specific modal and add to the modal src the src of the image clicked */
        var image_array = document.getElementsByClassName("myImg"); 
        for (var i = 0; i < image_array.length; i++) {
            if (image_array[i] == buttonClicked) {
               img_modal.style.display = "block";
                img_zoom.src = buttonClicked.src;
            }
        }
    }
});

// Get the < span > element that closes the modal
var close = document.getElementById("close");
// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    img_modal.style.display = "none";
}

