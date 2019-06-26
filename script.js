var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// an arraylike object that stores all list items under the 'ul' object
var listItem = ul.querySelectorAll("li");

// A not so relevant counter variable this would be used later on to add automated id names to buttons  
classNo = 0;

/*
 * This adds a listener to the ul object which checks for clicks,   
 * every click from a "LI" (list item), perfroms the specified
 * function, which is to toggle the class of the list item to the 
 * done class 
 */

ul.addEventListener('click', function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("done");
    }
})

/*This function creates a button when called this button is also assigned a unique id (not a necessary feature i though of using it before but i used something else instead, but i decided to leave it, it could come in handy later on).*/

function doneButton() {
    ++classNo
    var doneButton = document.createElement("button");
    var doneText = document.createTextNode("done");
    doneButton.appendChild(doneText);
    var className = "done" + classNo;
    doneButton.id = className;
    return doneButton;
}

//This adds the button to every present list item when the page is loaded 
for (var i = 0; i < listItem.length; i++) {
    listItem[i].appendChild(doneButton());
}

/*
  This adds a listener to the ul object which checks for clicks  
 every click from a "Button" (the done button), perfroms the specified function, which is to delete the list item which the particular button is*/

ul.addEventListener('click', function(e) {
    if (e.target.tagName == "BUTTON") {
        e.currentTarget.removeChild(e.target.parentNode);
    }
})


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    //this adds a button to every new list created
    li.appendChild(doneButton());
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);