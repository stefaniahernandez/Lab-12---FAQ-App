/*eslint-env browser*/

var i, h2, div, h2Elements, faqs;

var $ = function (id) {
    //you can put anything you want in parenthesis
    "use strict";
    return window.document.getElementById(id);
};

var toggle = function (e) {
    "use strict";
    //GET THE CURRENTLY CLICKED HEADING
    h2 = e.currentTarget; //e represents the object is currently selected (currentTarget is the element)
    //GET THE H2 TAG'S SIBLING DIV TO SHOW OR HIDE
    div = h2.nextElementSibling;
    //GET THE ARRAY OF H2 ELEMENTS
    h2Elements = faqs.getElementsByTagName("h2");
    //LOOP THROUGH ARRAY OF H2 ELEMENTS
    for (i = 0; i < h2Elements.length; i += 1) {
        //IF THE H2 ELEMENT IN THE ARRAY DOESN'T EQUAL THE CURRENTLY
        //CLICKED H2, THEN HIDE ALL CLASS ATTRIBUTES FOR THE H2 AND CHILD DIVS
        if (h2Elements[i] !== e.currentTarget) {//went into the CSS to find tag (plus and minus image)
            h2Elements[i].removeAttribute("class");//this removes it from the <a>
            h2Elements[i].nextElementSibling.removeAttribute("class");//this removes it from the <div>
        }
    }
    //TOGGLE PLUS AND MINUS IMAGE IN H2 ELEMENTS BY ADDING OR REMOVING A CLASS
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }
    //TOGGLE DIV VISIBILITY BY ADDING OR REMOVING A CLASS
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");//open represents the tag name
    }
};

window.addEventListener("load", function () {
    "use strict";
    //GET THE MAIN ACCORDIAN
    faqs = $("faqs");
    //GET THE H2 ELEMENTS OUT OF THE ACCORDIAN
    h2Elements = faqs.getElementsByTagName("h2");
    //returns an array of elements that you specify within that method?
    //ATTACH EVENT HANDLERS TO EACH H2 ELEMENT
    //we're looping through this H@ element's array
    for (i = 0; i < h2Elements.length; i += 1) {
        h2Elements[i].addEventListener("click", toggle);
        //make a click event (we're calling it toggle--the function)
    }
    //SET FOCUS ON FIRST TWO H2 ELEMENTS <a> TAG
    h2Elements[0].firstChild.focus();
    //this is optional, he just wanted to demonstrate the use of firstChild
});