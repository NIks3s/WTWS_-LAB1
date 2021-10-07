//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function changeFontSize(type){
console.log(type);
  let ids =["#h","#p"];
  ids.forEach(id => {
    let e1=document.querySelector(id);

    let fontSize = window.getComputedStyle(e1, null).getPropertyValue("font-size");
    fontSize= parseFloat(fontSize);

    if(type === "increase"){
      e1.style.fontSize=(fontSize + 5) + "px";
    }else{
      e1.style.fontSize=(fontSize - 5)+ "px";
    }
  });

}
function changeColor(){
var element=document.getElementsByClassName("mypara");
for(var x=0;x<element.length;x++){
  element[x].style.color="red";
  element[x].style.fontSize="30px";
}
}
function changeColor2(){
var element=document.getElementsByClassName("mypara2");
for(var x=0;x<element.length;x++){
  element[x].style.color="green";
  element[x].style.fontSize="40px";
}
}

let lightTheme = "light.css";
let darkTheme = "dark.css";

// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
