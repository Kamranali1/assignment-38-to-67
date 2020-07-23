//task 1 starts here 
var a = "Enter a chracter"
var char = prompt(a)
var string = char.charCodeAt(char)
if (string >= 65 && string <= 90) {
    alert("your chracter is Uppercase")
}
else if (string >= 97 && string <= 122) {
    alert(" your capital is lowercase")
}

else {
    alert("Your character is a number")
}
//task 1 ends here 

//task 2 starts here 
var a = "Enter a integer"
var num1 = +prompt(a)
var num2 = +prompt(a)
if (num1 > num2){
    alert("this number is larger"+num1)
}
else if (num2 > num1){
    alert("this number is larger"+num2)
}
else if (num1 == num2){
    alert(num1+"is equal to "+num2)
}
//task 2 ends here 

//task 3 starts here 
var a = "enter a number"
var num = +prompt(a)
if (num > 0) {
    alert("your number is positive")
}
else if (num === 0) {
    alert("your number is 0")
}
else if (num < 0) {
    alert("your number is negative")
}
else {
    alert("wrong number")
}
//task 3 ends here 

//task 4 starts here 
var a = "Enter a letter"
var letter = prompt(a)
var vowel1 = "a"
var vowel2 = "e"
var vowel3 = "i"
var vowel4 = "o"
var vowel5 = "u"
if (letter == vowel1) {
    alert("your letter is vowel")
}
else if (letter == vowel2) {
    alert("your letter is vowel")
}
else if (letter == vowel3) {
    alert("your letter is vowel")
}
else if (letter == vowel4) {
    alert("your letter is vowel")
}
else if (letter == vowel5) {
    alert("your letter is vowel")
}
else{
    alert("your letter is consonants")
}
//task 4 ends here 

//task 5 starts here 
var a = "Enter your Password"
var Password = prompt(a)
var Passwordoriginal = "asdf"
if(Password === Passwordoriginal){
    alert("your password is correct")
}
else if(Password !== Passwordoriginal){
    alert("your password is Incorrect")
}
else {
    alert("please enter your password")
}
//task 5 ends here 

//task 6 starts here 
var greeting;
var hour = 13;
if (hour < 18) { greeting = "Good day"; alert (greeting)}
else { greeting = "Good evening";  alert (greeting) }
//task 6 ends 


//task 7 starts here 
var a = "enter time in 24 hour form "
var time = +prompt(a)
if (time >= 0000 && time < 1200) {
    alert("Good morning")
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}
else {
    alert("wrong time")
}
//task 7 ends here 