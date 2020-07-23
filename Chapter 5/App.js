//task 1 start here 
var a = "enter a number for addition"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 + no2;
document.write("<h1>" + "addition of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)
//task 1 ends here 

//task 2 starts here 
var a = "enter a number for subtraction"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 - no2;
document.write("<h1>" + "Divison of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)

var a = "enter a number for multiplication "
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 * no2;
document.write("<h1>" + "Multiplication of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)


var a = "enter a number for divison"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 / no2;
document.write("<h1>" + "Divison of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)


var a = "enter a numbe for modolus"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 % no2;
document.write("<h1>" + "Modolus of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total + "<br> <br>")
// task 2 ends here 

//task 3 stars here 
var a = "1"
document.write("Value after variable declearation is " + a + "<br>")
var intialValue = 5
document.write("Initial value is " + " " + intialValue + "<br>")
var valueAfterincreament = intialValue++
document.write(" value after increament is " + intialValue + "<br>")
var valueAfterAdition = intialValue + valueAfterincreament
document.write("value after addition is" + valueAfterAdition + "<br>")
var valueAfterdecreament = --valueAfterAdition
document.write("Value after decreament is" + valueAfterdecreament + "<br>")
var reminder = valueAfterdecreament - 10
document.write("the reminder is " + reminder + "<br> <br> <br>")
//task 3 ends here 

//task 4 starts here 
var Costofticket = 600
var ticketbought = 5
var totalCost = Costofticket * ticketbought
document.write("Total cost to buy 5 tickets is " + totalCost + "PKR <br> <br> ")
//task 4 ends here 



//task 5 starts here 
var i;

for (var i = 1; i <= 10; i++) {
  document.write("4" + " " + "x" + " " + i + "=" + 4 * i + "<br>")
}
//task 5 ends here 

//task 6 starts here 
var a = "Enter centigrade value"
var celsius = +prompt(a)
var  Fahrenheit = (celsius*9/5)+32
document.write(celsius+"centigrade is"+ Fahrenheit+"Fahrenheit <br>")

var a = "Enter Fahrenheit value"
var Fahrenheit = +prompt(a)
var  celsius = (Fahrenheit-32)*5/9
document.write(Fahrenheit+"Fahrenheit is"+celsius+"centigrade")
//task 6 ends here 

//task 7 starts here 
var a = "Enter price of item 1"
var PriceOfitem1 = +prompt(a)

var b = "Enter price of item 2"
var PriceOfitem2 = +prompt(b)

var c = "Enter order quantity of item1 "
var orderquantityofitem1 = +prompt(c)

var d = "Enter order quantity of item2 "
var orderquantityofitem2 = +prompt(d)

var Shippingcharges = 100

totalcostoforder = (PriceOfitem1 * orderquantityofitem1) + (PriceOfitem2 * orderquantityofitem2) + Shippingcharges
document.write ("Price of item 1 is  "+PriceOfitem1+"<br>"+"Order Quantity of item 1 is  "+orderquantityofitem1+ "<br>"+ "Price of item 2 is  "+PriceOfitem2 +"<br> "+"Order quantity of item 2 is "+orderquantityofitem2 +"<br>" + "Shipping charges  "+Shippingcharges +"<br> <br>"+"total cost of your order is"+ " " +totalcostoforder)
//task 7 ends here 

//task 8 starts here 
var Totalmarks = 980
a = "Enter your Marks"
var Marksobtained = +prompt(a)
var Percentage =  Marksobtained/980*100
document.write("Total marks "+ Totalmarks+"<br>"+"Marks Obtained "+Marksobtained+"<br>"+"Percentage is "+ Percentage+"%")
//task 8 ends here 

// task 9 starts here 
var Dollar = 104.80
var Riyal = 28
var a = "Enter Dollar value"
var b = "Enter Riyal value"
var dollar = +prompt(a)
var riyal = +prompt(b)
var Pkrvalue = (dollar*Dollar)+(riyal*Riyal)
document.write(" <h1> CURRENCY IN PKR"+"<br> <br> <br>" + "Total currency in PKR :"+Pkrvalue)
//task 9 ends here 

//task 10 starts here 
var a = "Enter your Value "
var num1 = +prompt(a)
var result = (num1+5)*10/2
 document.write ("This is result"+result)
 //task 10 ends here 


//task 11 starts here 
var CurrentYear = 2020
var currentYear = 2021
var a = "Enter your birth year"
var BirthYear = +prompt(a)

var age = CurrentYear-BirthYear 
var Age = currentYear-BirthYear
document.write("You are either"+" "+age+"or"+" "+Age+"Years old" )
// task 11 ends here 

//task 12 starts here 
var a = " Enter Radius Of a circle"
var Radius = +prompt(a)
var circumference = 2*3.142*Radius
var Area = 3.142*Radius*Radius
document.write("Radius of circle:"+Radius+"<br>"+ "The circumference is:"+circumference+"<br>"+ "The Area is :"+Area )

// task 12 ends here 

//task 13 starts here 
var a = "Enter your favourit snack"
var Favsnack = prompt(a)
var b = "Enter your age"
var Age = +prompt(b)
var c = "Enter Maximum Age"
var maximumAge = +prompt(c)
var Supplyperday = 3
var Totalsupplyneeded = (365 * 65) - (365 * 15) * 3
document.write("<h1>" + "The lifetime supply calculator" + "<br> <br> <br>" + "Favourite Snack:" + Favsnack + "<br>" + "Current age:" + Age + "<br>" + "Estimated Maximum age :" + maximumAge + "<br>" + "Amount of snack per day " + Supplyperday + "<br>" + "You will need" + Totalsupplyneeded + Favsnack + " " + "to last you until  the ripe old age of " + maximumAge)
//task 13 ends here 
