/* ===================================== Rules ===================================== */
// ⭐ String = Using "", "Howie"
// ⭐ Number = Using nothing, 100
// ⭐ Boolean = Using true or false, true
// ⭐ Array = Using [], ["student"]
// ⭐ Object = Using {}, {Content}
// ⭐ let = I can change stuff. It is different from const.
// ⭐ const = I CANNOT change String. It is different from let Unless Array, Object.
// "use strict"; → Strict mood. If I have some bugs, system will tell me.
// Static box = const 
// Transform = let
// Use ID to find = getElementById()
// Use class to find = getElementsByClassName()
// Use ID, class, label to find. More efficient = getquerySelector()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Example-1 */
// const name = document.querySelector(".name");
// const → Box, name → Name of box, document.querySelector = Find class which is called .name
// function changeColor() { name.style.color = "blue";}
// create a function, changeColor-function name(I can call any what I want), box.style.color = box-name, style-element, color-property and "blue"-transform

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Example-2 */
// const name = document.querySelector(".name");
// function changeColor(color) {name.style.color = color;}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

"use strict";

const wrap = document.querySelector(".title");
function move() { wrap.style.margin = "50px"; }


const box = getElementID(".change");
function change() { alert("Hello, testing is OK!") }




// Self-Practice
// element.addEventListener("Eventtype", 要做的事);
const name = document.querySelector(".name-2");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    name.style.color = "blue";
});