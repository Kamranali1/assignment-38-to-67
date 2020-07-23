// task 1 starts here
function pow(base, power) {
    let result = base;

    for (let i = 1; i < power; i++) {
        result *= base;
    }

    return result;
}

var base = prompt("base", '');
var power = prompt("power", '');

if (power < 1) {
    alert(`Power ${power} is not supported, use a positive integer`);
} else {
    alert(pow(base, power));
}
//task 1 ends here 




//task 2 starts here 

function checkLeapyear(y) {
    if (y % 100 != 0 && y % 4 == 0 || y % 400 == 0) {
        alert(y + "is leap year")
    } else {
        alert(y + "is not leap year")
    }

}

checkLeapyear(+prompt("Enter year to check if it is leap year or not", ""))
//task 2 ends here 

//task 3 starts here
var a = +prompt("enter a value")
var b = +prompt("enter a value")
var c = +prompt("enter a value")
function s(a, b, c) {
   var S = (a + b + c) / 2;
   return S;
}
var S = s(a,b,c)
function area(a,b,c){
   var a = S*(S-a)*(S-b)*(S-c)
   return a ;
}
alert(area(a,b,c))
//task 3 ends here 

//task 4 starts here 
var subject1 = +prompt("enter your marks in subject1","")
var subject2 = +prompt("enter your marks in subject2","")
var subject3 = +prompt("enter your marks in subject3","")
function avarage(a,b,c){
   var avgMarks = (a+b+c)/3
   return avgMarks;
}
function percentage(a,b,c){
    var totalmarks = 500
    var per= ((a+b+c)/totalmarks)*100
    return per;
 }
 
 
 function mainFunction(){
    var a = avarage(subject1,subject2,subject3)
    var b = percentage(subject1,subject2,subject3)
    alert(a+"avarage marks"+"\n"+b+"%")
 }
 
 mainFunction()
 //task 4 ends here 


 //task 5 starts here  
 function convertKeyCode(a) {
    var chara = "";
    if(a == 10){
       chara="A"
    }
    
    return chara;
 
 }
 alert(convertKeyCode(10))
 //task 5 ends here 


//task 6 starts here 
function vowelCut(string){

         let characterArray = string.split("")
         return characterArray.map(character => {
             if(/[aeiouyAEIOUY]/.test(character)){
                character = ""
             } else {return character}
         }).join("")
      }
 alert( vowelCut(prompt("Enter a sentence ","")))
 //task 6 ends here 

 // task starts 7 here 
function findOccurrences() {
  var str = prompt("enter sentence","");
  var count = 0;
  let haveSeenVowel = false;

  for (const letter of str.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        {
          if (haveSeenVowel) {
            count++;
            haveSeenVowel = false;
          } else {
            haveSeenVowel = true;
          }
          break;
        }
      default:
        haveSeenVowel = false
    }
  }

  return count
}

alert(findOccurrences());
//task 7 ends here 

//task 8 starts here 
var kiloMeter = +prompt("enter distance between to cities in kilometer")
function kiloMetertometers(){
    var meter = kiloMeter*1000
    return meter;
}
function  kiloMetertofeet(){
    var feet = kiloMeter*1000 *3.28
    return feet;
}
function kiloMetertoinches(){
    var inches = kiloMeter*1000 *3.28 *12
    return inches;
}
function kiloMetertocm(){
    var cm = kiloMeter*1000*100
    return cm 
}
document.write(kiloMeter+"kilometer to meter"+kiloMetertometers()+"meter <br>" + kiloMeter+"kilometer to feet "+kiloMetertofeet()+"feet <br>"+ kiloMeter+"kilometer to inches"+kiloMetertoinches()+"inches <br>"+kiloMeter+"kilometers to cm"+kiloMetertocm()+"cm " )
//task 8 ends here 

//task 9 starts here
var timeWorked = +prompt("Enter Worktime ","")
function overtimepay(){
var overTime = timeWorked-40

if (timeWorked>40){
    alert(12*overTime)
}else{
    alert("nothing")
}
}
overtimepay()
//task 9 ends here 

//task 10 starts here 
function currencyDenomination() {
    var cash = +prompt("Enter cash (in hundreds): ");
    var hundred = Math.floor(( cash / 100))
    var fifty =Math.floor(( cash %100 )/ 50)
    var ten = Math.floor(((cash%100) % 50 ) / 10)
    alert("you will have "+hundred+"hundred Notes"+fifty+"fifty Notes"+ten+"ten Notes" )
}
    currencyDenomination()
//task 10 ends here 


