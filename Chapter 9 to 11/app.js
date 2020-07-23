
// task 1 starts here 
var a = "Enter your city name "
var city = prompt(a)
var city = city.toLowerCase(city)
if (city === "karachi" ){
    alert("Wellcome to city of lights")
    
}else{
    alert("welcome")
}
//task 1 ends here 


//task 2 starts here 
var a = "write your gender"
var gender = prompt(a)
var gender = gender.toLowerCase(gender)
if(gender === "male"){
    alert("Good morning Sir")

}
else{
    alert("Good morning ma'am")
}
//task 2 ends here 

//task 3 starts here 
var a = "Input signal color"
var signal = prompt(a)
var signal = signal.toLowerCase(signal)
if (signal === "red") {
    alert("Stop")

}
else if (signal === "yellow") {
    alert("Ready to move")
}
else if (signal === "green"){
    alert("Move now")
}
else {
    alert("wrong color")
}
//task 3 ends here 

// task 4 start here 
var a = "input Remaining fuel"
var fuel = +prompt(a)
if(fuel < 0.25 ){
    alert("Please refill the fuel in  your car")

}
else {
    alert("fuel is enough")
}
//task 4 ends here 

//task 5 starts here 
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true")
}  else {
    alert("given condition for variable a is not true")
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
} 
else {
    alert("Given condition for variable b is not true")
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
} else{
    alert("condition 1 is not true")
}

if (c === 13) {
    alert("condition 2 is true");
} else{
    alert("condition 2 is not true ")
}
if (++c < 14) {
    alert("condition 3 is true");
} 
else{
    alert("Condition 3 is not true")
} 
if (c === 14) {
    alert("condition 4 is true");
}
else{
    alert("Condition 4 is not true")
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
else{
    alert("The cost is not equal")
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//task 5 ends here 



//task 6 starts here 
var totalmarks = 300
var a = "Enter marks obtained "
var marksobtained = +prompt(a)
var percentage = marksobtained / totalmarks * 100
var inFo = "Total Marks :" + totalmarks + "<br>" +"Marks Obtained"+marksobtained
if (percentage >= 80) {
    document.write(  inFo+ "<br>" +"Grade: A <br> Remarks :Excellent")
}
else if (percentage >= 70) {
    document.write(inFo+ "<br>"+ "Grade: B <br> Remarks :Good")
}
else if (percentage >= 60) {
    document.write( inFo+ "<br>"+ "Grade: C <br> Remarks : You need to improve") 
}
else if (percentage <= 59) {
    document.write( inFo+ "<br>" +"Grade: Fail <br> Remarks : Sorry")
}
else {
    document.write("wrong info ")
}
//task 6 ends here 


//task 6 starts here 
var secret = 6
var a = " Enter a num between 1 to 10 "
var yournum = +prompt(a)
var num2 = secret+1
if (yournum === secret) {
    alert("Bingoo!! your Number is correct")

}
else if ( yournum === num2 ){
    alert("your number is close ")

}
else {
    alert("Wrong number ")
}

//task 7 ends here 

//task 8 starts here 
var a = "Enter a num to know if it is divisable by 3 "
var num = +prompt(a)
var num1 = num % 3  
if(num1 === 0){
    alert("your num is divisable by 3")
}
else {
    alert("your num is not divisable by 3")
}
//task 8 ends here 

// task 9 starts here 
var a = "Enter a num to know if it is Even or odd number "
var num = +prompt(a)
var num1 = num % 2 
if(num1 === 0){
    alert("Given number is even")
}
else {
    alert("Given number is odd")
}
//task 9 ends here 

//task 10 starts here 
var a = "Enter temperature"
var temp = +prompt(a)
if (temp > 40) {
  alert("It is too hot outside")
}
else if (temp >30) {
    alert("the weather today is normal")
  }
  else if (temp >20) {
    alert("Today's weather is cool")
  }
  else if (temp >10) {
    alert("OMG! Today's weather is Soo cool")
  }
  else {
      alert("nothing")
  } 
  //task 10 ends here 

  //task 11 starts here 
var a = "Enter First num"
var b = "Enter Second num"
var c = "Enter opreation"
var firstnum = +prompt(a)
var opreation = prompt(c)
var secondnum = +prompt(b)
var Addition = firstnum + secondnum
var Subtraction = firstnum - secondnum
var multiplication = firstnum * secondnum
var Division = firstnum / secondnum
var Modulus = firstnum % secondnum
if (opreation == "+") {
    alert(Addition)
}
else if (opreation == "-") {
    alert(Subtraction)
}
else if (opreation == "*") {
    alert(multiplication)
}
else if (opreation == "/") {
    alert(Division)
}
else if (opreation == "%") {
    alert(Modulus)
}
else {
    alert("wrong opreation")
}
//task 11 ends here 


