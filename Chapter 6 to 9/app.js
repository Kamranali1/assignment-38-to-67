// task 1 starts here 
var a = 10
document.write( "result: <br>"+"the value of a is" + a +"<br> <br> <br>")
var a = ++a
document.write("the value of ++a is " + a + "<br> now the value of a is " + a + "<br> <br> <br> ")
var a = a
document.write("the value of a++ is " + a + "<br>")
var a = ++a
document.write("now the value of is"+a+ "<br> <br> <br> ")
var a  = --a
document.write("the value of --a is"+a+"<br> Now the value of a is "+a+"<br> <br> <br> ")
var a= a--
document.write("the value of a-- is " + a + "<br>")
var a = --a
document.write("now the value of a is  " + a )
//task 1 ends here 

//task 2 starts 
var a = 2
var b = 1
var result = --a - --b + ++b + b--
//             1 - 0 + 1 + 1
document.write ("a is " +a+"<br>"+"b is "+b+"<br>"+"the result is"+result  )
//task 2 ends here 

//task 3 starts here 
var a = "Enter your user name"
var Username = prompt(a)
alert("wellcome to our page "+Username)
//task 3 ends here 

 //task4 was empty 

//task 5 starts here 
var a = "Enter your num"
var num1 = 5
var num = +prompt(a,num1 )


var i;

for (var i = 1; i <= 10; i++) {
  document.write(num + " " + "x" + " " + i + "=" + num * i + "<br>")
}
//task 5 ends here 

//task 6 starts here 
var a = "Enter subject1 name"
var b = "Enter subject2 name"
var c = "Enter subject3 name"
var d = "Enter subject1 marks"
var e = "Enter subject2 marks"
var f = "Enter subject3 marks "
var subject1 = prompt(a)
var subject2 = prompt(b)
var subject3 = prompt(c)
var Subject1 = +prompt(d)
var Subject2 = +prompt(e)
var Subject3 = +prompt(f)
var totalmarks = 100
var subJect1 = Subject1 / totalmarks * 100
var subJect2 = Subject2 / totalmarks * 100
var subJect3 = Subject3 / totalmarks * 100
var Totalmarks = totalmarks * 3
var marksobtained = Subject1 + Subject2 + Subject3
var percentage = marksobtained/Totalmarks*100
document.write ("Subject &nbsp;&nbsp; Total Marks &nbsp;&nbsp; Obtained marks &nbsp;&nbsp Percentage <br>"+subject1+"&nbsp;&nbsp;"+Subject1+"&nbsp;&nbsp;"+subJect1+"% <br>"+subject2+"&nbsp;&nbsp;"+Subject2+"&nbsp;&nbsp;"+subJect2+"% <br>"+subject3+"&nbsp;&nbsp;"+Subject3+"&nbsp;&nbsp;"+subJect3+"% <br>"+Totalmarks+"&nbsp;&nbsp;&nbsp;&nbsp;"+marksobtained+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage +"%")
//task 6 ends here 

//task 7 was empty 
