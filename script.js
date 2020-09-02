var input = document.getElementById("userinput");
var button = document.getElementById("addButton");
var ul = document.getElementById("itemsUL");
var clearItems = document.getElementById("reset");
var hide = document.getElementsByTagName("SPAN");
var elmnt = document.getElementById("itemsUL").children;


function checkLength(){
    return input.value.length;
    console.log(listLength);

}

function AppendElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var span = document.createElement("SPAN");
    li.appendChild(span);
    ul.appendChild(li);
    span.appendChild(document.createTextNode("X"));
    span.classList.add("close");
    addClearListButton();
    input.value = "";
    listLength++;
    console.log(listLength);

}

function addListAfterCLick() {
    if (checkLength() > 0){
        AppendElement();
    }
}

function addListKeypress() {
    if (checkLength() > 0 && event.keyCode === 13) {
        AppendElement();
    }
}

function lineThrough() {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done")
    }
}

function hideElement() {
    if (event.target.tagName === "SPAN"){
        var thisElement = event.target;
        thisElement.parentElement.style.display = "none";
        listLength--;
        console.log(listLength);
        checkClearListButton()
    }
}

function clearList() {
    ul.innerHTML = "";
    clearItems.style.display = "none";
    listLength = 0;

}

function addClearListButton() {
    if (clearItems.style.display = "none") {
        clearItems.style.display = "";
    }
}

function checkClearListButton() {
    console.log(listLength);
    if (listLength === 0) {
        clearItems.style.display = "none"
    }
}


// Create a close button

var i = 0;
for (i = 0; i<elmnt.length; i++) {
    var span = document.createElement("SPAN");
    span.appendChild(document.createTextNode("X"));
    elmnt[i].appendChild(span);
    span.classList.add("close");
}

var listLength = 3;
console.log(listLength);
button.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListKeypress);
ul.addEventListener("click", lineThrough);
ul.addEventListener("click", hideElement);
clearItems.addEventListener("click",clearList);












