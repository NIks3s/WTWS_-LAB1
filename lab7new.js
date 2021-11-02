
var student =  {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12  };

document.getElementById("obj").innerHTML = student.name + ", " +student.sclass + ", " + student.rollno;

  function Remove(){
    delete student.rollno;
    document.getElementById("obj").innerHTML = student.name + ", " +student.sclass + ", " + student.rollno;
  }

  Object.objsize = function(Myobj) {
      var osize = 0, key;
      for (key in Myobj) {
          if (Myobj.hasOwnProperty(key)) osize++;
      }
      return osize;
  };

  var student1 =  {
    name : "Nikunj Baid",
    sdept : "IT",
    rollno : 18,
  regno:201800195  };

    document.getElementById("abc").innerHTML = student1.name + ", " +student1.sdept + ", " + student1.rollno + ", " + student1.regno;


  var objsize = Object.objsize(student1);
  function Length(){
  document.getElementById("xyz").innerHTML=('Size of the current object : '+objsize);
}

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

     document.getElementById("see").innerHTML= JSON.stringify(library, null, 2);
function Change(){
for (var i = 0; i < library.length; i++)
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      document.getElementById("text").innerHTML="Already read " + book;
    } else
    {
     document.getElementById("text1").innerHTML="You still need to read " + book;
    }
   }
     document.getElementById("text").innerHTML= "Already read 'Bill Gates' by The Road Ahead." + "<br>" + " Already read 'Steve Jobs' by Walter Isaacson."
 }
// IDEA: Volume of cylinder
 function Cylinder(){


         var radius = parseInt(document.getElementById("radi").value);
         var hieght = parseInt(document.getElementById("height").value);

         var volume = (Math.PI * radius * radius * hieght).toFixed(4);


     //you can use these variables to either display on the page or do something like
     //this.
     alert("Volume: " + volume );
 }







// IDEA: SUBSTRING

 function substr(str) {
   var i, j, result = [];

   for (i = 0; i < str.length; i++) {
       for (j = i + 1; j < str.length + 1; j++) {
           result.push(str.slice(i, j));
       }
   }
   return result;
 }

 var theString = 'dog';
 function substring(){
 document.getElementById("newText").innerHTML=(substr(theString));
}





 function my_Clock()
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function ()
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs)
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};

function clock(){
var clock = new my_Clock();
  clock.run();
}
function stop(){
  clearInterval(clock);
}


// Sort an array in object

var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

 document.getElementById("seen").innerHTML= JSON.stringify(library, null, 2);
 var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x)
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));
function answer(){
document.getElementById("result").innerHTML=JSON.stringify(newobj, null, 2);
}



// IDEA: CIRCLE

function Circle(){


        var radius = parseInt(document.getElementById("rad").value);

        var area = Math.round(Math.PI * radius * radius).toFixed(2);
        var perimeter = Math.round(2*Math.PI*radius).toFixed(2);

    //you can use these variables to either display on the page or do something like
    //this.
    alert("Area: " + area + " and Circumference: " + perimeter );
}




// IDEA: JavaScript function to print all the methods in an JavaScript object.

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}


function all_properties(obj)
{
 return Object.getOwnPropertyNames(obj);
}
function greet(){
  console.log(FindAllMethods(Math));
  console.log(FindAllMethods(Array));
console.log(all_properties(Math));

console.log(all_properties(Array));
}
