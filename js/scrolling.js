
var sections = document.querySelectorAll(".menu_nav_link"); /*get all the sections that are specific for all menu items*/ 
var ahref = document.querySelectorAll("#desktop_menu a"); /*get all the desktop a links*/

/* add window.onscroll function and add the current variable that will take the id*/
window.onscroll = () => {
    var current = "";

    sections.forEach((div) => { /*for each section get the top of that div in pixels
                                 If the PageY in pixels is >= 100px get the id of the 
                                 current div. If the user is in the top of the page than
                                 the id= presentation, first div*/
        var sectionTop = div.offsetTop;
        

        if (pageYOffset >= sectionTop -100) {
            current = div.getAttribute("id");
        }

        if (pageYOffset <= 100) {
            current = "presentation";  
        }

    });

    ahref.forEach((a) => {   /*for each a in the menu, if the a class contains the id from the
                              current variable then make the a active adding the class active
                              Else remove the class active from the a menu*/
      
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }

        else {
            a.classList.remove("active");
        }
    });
    
};

  
