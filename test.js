
function multiplyBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    let num= num1 / num2;
    let n= num.toFixed(2)
    document.getElementById("result").innerHTML = n;
}

function SUBTRACTBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}
function AddBy()
{
     var num1 = document.getElementById("firstNumber").value;
     var num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = Number(num2) + Number(num1);
}
document.getElementById('button').onclick=function(){
  var elem=document.getElementById('changetext');
  elem.innerHTML="LAB 6 is Fun ";
  elem.style.color="red";
  elem.style.fontSize="48px";
}
