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
