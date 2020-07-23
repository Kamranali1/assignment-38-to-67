//task 1 starts here 
var arr = [1,2,3,4,5]
var arr_1 = [arr] 
//task 1 ends here 


//task 2 starts here 
var arr = new Array(4)
for (i = 0; i < 4; i++)
    arr[i] = new Array(4);
arr[0][0] = "0"; arr[1][0] = "1"; arr[2][0] = "2"; 
arr[0][1] = "1"; arr[1][1] = "0"; arr[2][1] = "1"; 
arr[0][2] = "2"; arr[1][2] = "1"; arr[2][2] = "0"; 
arr[0][3]= "3"; arr[1][3] = "2"; arr[2][3] = "1"
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        document.write(arr[i][j] + "&emsp;")
    }
    document.write("<br>")
}
//task 2 ends here 

//task 3 starts here 
var i;

for (var i = 1; i <= 10; i++) {
  document.write(i+"<br>")
}
//task 3 ends here 

//task 4 starts here 
var a = "Enter A number to get its multiplication"
var b = "enter length upto which you want multiplication "
var num1 = +prompt(a)
var num2 = +prompt(b)

var i;

for (var i = 1; i <=num2 ; i++) {
  document.write(num1 + " " + "x" + " " + i + "=" + num1 * i + "<br>")
}
//task 4 ends here 

//task 5 starts here 
var fruits = ["apple", "banana", "mango", "orange"];
var i,  text;
for (i = 0, text = ""; i < fruits.length; i++) {
 document.write( text + fruits[i] + "<br>")
}


var fruits = ["apple", "banana", "mango", "orange"];
var i,  text;
for (i = 0, text = ""; i < fruits.length; i++) {
 document.write( text +"Element at index"+i+"is" + fruits[i] + "<br>")
}

//task 5 ends here 


//task 6 starts here 
var i;
document.write("Counting  <br>")
for (var i = 1; i <= 15; i++) {
    document.write(i + " , ")
}

document.write("<br>" + "Revrse Counting <br>")
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var i;
for (i = arr.length - 1; 0 <= i; i--) {
    document.write(+arr[i] + ",  ")
}

var i;
document.write("<br> Even number <br>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 ===0 ){
        document.write(i+" ")
    }
}

var i;
document.write("<br> Odd number <br>")
for (var i = 0; i <= 20; i++) {
    if (i % 2!==0 ){
        document.write(i+" ")
    }
}

var i;
document.write("<br> Even number <br>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 ===0 ){
        document.write(i+"k,")
    }
}
//task 6 ends here 

//task 7 starts here 
var a = "Wellcome to our bakery"
var items = ["cake", "apple pie", "cookie", "chips", "patties"] 
var search = prompt(a,"Enter product you are looking for ")
var search = search.toLowerCase(search)
if(items.indexOf(search) !==-1 ){
    document.write(search+" "+"is available at index "+ " "+items.indexOf(search)+"  in our bakery" )
}
else{
    document.write("We are sorry. "+ search +" "+ "is not available in our bakery")
} 
//task 7 ends here 

//task 8 starts here 
var arr = [24,53,78,91,12,];
document.write("array items:"+arr + "<br>")
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
document.write("The largest number is: "+max+"<br>")

//task 8 ends here 

//task 9 starts here 
var arr = [24,53,78,91,12,];
document.write("array items "+arr + "<br>")
var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
document.write(" The smallest number  is "+min)
//task 9 ends here 

//task 10 starts here 
var i;
document.write("<br> Multiples of 5 <br>")
for (i = 0; i <= 100; i++) {
    if (i % 5 ===0 ){
        document.write(i+",")
    }
}
//task 10 ends here 
