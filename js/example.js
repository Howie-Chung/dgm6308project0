/* ===================================== Rules ===================================== */
// ⭐ String = Using "", "Howie"
// ⭐ Number = Using nothing, 100
// ⭐ Boolean = Using true or false, true
// ⭐ Array = Using [], ["student"]
// ⭐ Object = Using {}, {Content}
// ⭐ let = I can change stuff. It is different from const.
// ⭐ const = I CANNOT change String. It is different from let Unless Array, Object.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* "use strict"; → Strict mood. If I have some bugs, system will tell me. */
"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 1. 定義顏色常數
/* CORPORATE_COLOR, DEFAULT_COLOR and theData → Name of box. */
const CORPORATE_COLOR = "#EB4F3F"
const DEFAULT_COLOR = "blue"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2. 定義變數
let theWord = "hello"//theWord → Name of box.
/* i.e. */
// let theWord = "hello"
// theWord = "goodbye" I CAN do it.

/* Doesn't work */
// theWord[2] = "x"
/* i.e. */
// let theWord = "hello"
//                01234   ← order
//theWord[2] = "x"  // I wanna change "l" to "x", but I CANNOT.
// ⚠️ This is because string CANNOT be changed.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 3. Define info stucture
const theData = []// 空陣列，用來記錄操作
/* i.e. */
// const buylist = ["Apple", "Banana", "Cat"]
// theData.push("Apple") I can pull stuff into the box.
// theData.push("Banana")
// ⭐ theData = [] I CANNOT change the box.

/* Object literal syntax. Revise are more easy. */
const config = { // one = is "assignment operator"
    paragraphId: "my-paragraph",
    color: DEFAULT_COLOR,
    "7 day": true
    // Because it starts with a space and a number, it must be enclosed in quotation marks.
    // "7 day": true // Contains a "space"
    // "my-color": "blue" // Contains a "minus sign"
    // "123": "value" // Starts with a "number"
}

// config.color = CORPORATE_COLOR; = config["color"] = CORPORATE_COLOR;
// setTextColor(config.color);

alert(config["7 day"])
// There are 2 way I can alert them
// 1. config.name → Normal condition
// 2. config[] → Special condition

delete config["7 day"];

/* Display in the F12 console */
console.log(config)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 4. Define function
// Get text color
function getTextColor() {
    let a = 1;
    let b = 2;
    console.log(a + b);
    return document.getElementById(config.paragraphId).style.color
}
// Set text color
function setTextColor(color) {
    document.getElementById(config.paragraphId).style.color = color
}

// 測試功能（點擊標題時執行）
/* Track and Debug */
function test() {
    alert(getTextColor());
    theData.push("greetUser called")// i.e. Record：How many times has this button been pressed?
    console.log(theData[0], theData["length"]); // Display：What is first record, How many info does it has?
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* initialization */
setTextColor(config.color)  // 套用藍色    
/* Display in the F12 console */
console.log(theWord) // 顯示 "hello"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Display in the F12 console */
const secondArray = Array.from({
    length: 10
})
console.log(secondArray);
alert(window)