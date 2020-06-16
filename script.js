var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
var btn = document.getElementsByTagName("button");


function inputLength() {
	return input.value.length;
}

function strikethrough(event){
	if(event.target.tagName === "LI")
	{
		event.target.classList.toggle("done");
	}
}



function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(document.createElement("button")).innerHTML = "Delete";
	
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

function donelist(event) {
	li2.classList.toggle("done");
}

function remove(e) {
	if(e.target.tagName === "BUTTON"){
	e.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikethrough);

ul.addEventListener("click", remove);


