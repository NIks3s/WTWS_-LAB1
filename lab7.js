function factorial(){
var i,no,fact,
no=Number(document.getElementById("num").value);
fact=1;
for(i=no;i>=1;i--){
  fact=fact*i;
}
document.getElementById("answer").value= fact;
}

var a = [6,4,0,3,-2,1];
        	document.getElementById("sort").innerHTML = a;

        	function myFunction()
        	{
            	a.sort(function (a, b) { return a - b });
            	document.getElementById("sort").innerHTML = a;
        	}




          var i,j;
          var arr1 = [
           [1, 1, 1],
           [1, 1, 1],
           [1, 1, 1]
          ];
          var arr2 = [
           [2, 2, 2],
           [2, 2, 2],
           [2, 2, 2]
          ];
          var arr3 = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
];
          document.write("Matrix A (3 x 3):<br>");
          for(i=0; i<3; i++)
          {
           for(j=0; j<3; j++)
            document.write(arr1[i][j] +" ");
           document.write("<br>");
          }

          document.write("Matrix B (3 x 3):<br>");
          for(i=0; i<3; i++)
          {
           for(j=0; j<3; j++)
            document.write(arr2[i][j] +" ");
           document.write("<br>");
          }
function add() {
  document.write("Sum of Matrix:<br>");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
 {
  arr3[i][j] = arr1[i][j] + arr2[i][j];
  document.write(arr3[i][j] +" ");
 }
 document.write("<br>");
}
}
