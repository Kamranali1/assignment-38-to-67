
//task 1 starts here 
var alphabet = ["a","b","c","d","e","f"]
alert(alphabet[3])
//task 1 ends here 
//task 2 starts here 
var fulname = {Name:"Kamran",Lastname:"Ali",Age:"16"}
alert(fulname.Name)
//task 2 ends  here

//task 3 starts here
var array_string = ["apple","mango","grapes"]
alert(array_string[2])
//taske 3 ends here 

//task 4 starts here 
var array_number = [1,2,3,5,6,7,]
alert(array_number[2])
//task 4 ends here 

//task 5 starts here 
var array_boolan = [0.2,0.3,0.4,0.8]
alert(array_boolan[3])
//task 5 endsh here 

//task 6 starts here 
var array_mixed = ["Name",1,0.2,false,true,]
alert(array_mixed[3])
//task 6 ends here 

//task 7 starts here 
var education = ["(1) SSC <br> (2) HSC <br> (3) BCS <br>(4) BS <br> (5) BCOM <br> (6) MS <br> (7) M. Phil <br>  (8) PhD <br>"]
document.write("Qualifications: <br> " + education)
//task 7 ends here 


//task 8 starts here 
var a = "Enter Name"
var b = "Enter marks"
var array_student = [prompt(a),prompt(a),prompt(a)]
var array_Marks  = [+prompt(b),+prompt(b),+prompt(b)]
var totalmarks = 500
var percantage = [array_Marks[0]/totalmarks*100,array_Marks[1]/totalmarks*100,array_Marks[2]/totalmarks*100]
document.write("Score of &nbsp"+array_student[0]+"&nbsp is &nbsp"+array_Marks[0]+"&nbsp Percentage &nbsp"+percantage[0]+"% <br>"+"Score of &nbsp"+array_student[1]+"&nbsp is &nbsp"+array_Marks[1]+"&nbsp Percentage &nbsp"+percantage[1]+"% <br>"+"Score of &nbsp"+array_student[2]+"&nbsp is &nbsp"+array_Marks[2]+"&nbsp Percentage &nbsp"+percantage[2]+"% <br>" )
//task 8 ends here 

//task 9 starts here 
var a = "Enter a color to add in  begining of array"
var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks.unshift(prompt(a))
document.write(arr_marks)

var a = "Enter a color to add in  ending of array"
var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks.push(prompt(a))
document.write(arr_marks)

var a = "Enter a color to add in  begining of array"
var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks.unshift(prompt(a))
arr_marks.unshift(prompt(a))
document.write(arr_marks)

var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks.shift()
document.write(arr_marks)

var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks.pop()
document.write(arr_marks)

var a = "Enter index on which you want to add your color"
var b = "Enter a color name "
var arr_marks=["Green","Yellow","purple"]
document.write(arr_marks+"<br>")
arr_marks[+prompt(a)] = prompt(b)
document.write(arr_marks)

var a = "Enter index which you want to delete"
var arr_marks=["Green","Yellow","purple","orange","blue"]
document.write(arr_marks+"<br>")
arr_marks.splice(+prompt(a),+prompt(a))
document.write(arr_marks)

//task 9 ends here 



//task 10 starts here 
var a = "Enter Your marks "
var arr_marks = [+prompt(a),+prompt(a),+prompt(a),+prompt(a)]
document.write ("Score of students :"+arr_marks+"<br>")
var arr_MARKS = arr_marks.sort(function(a, b){return a - b})
document.write ("Ordered  Score of students :"+arr_MARKS+"<br>")
//task 10 ends here 

//task 11 starts here 

var arr_city = ["Karachi", "Lahore", "Islamabad", "Quetta ", "Peshawar"]
document.write("Cities list <br>" + arr_city + "<br>")
var arr_city1 = arr_city.splice(2, 2)
document.write("selected cites <br>" + arr_city1)
//task 11 ends here 


//task 12 starts here
var arr = ["This ", " is", " my "," cat"];
document.write("array: <br>" +arr + "<br>")
var string = arr.join(" ")
document.write("String: <br>"+string)
//task 12 ends here

//task 13 starts here
var queue = ["Keyboard", "mouse", "printer", "moniter"]


queue.push('first');
queue.push('second');
queue.push('third');
queue.push('fourth');

document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
//task 13 ends here

//task 14 starts here
var queue = ["Keyboard", "mouse", "printer", "moniter"]

queue.push('Keyboard');
queue.push('mouse');
queue.push('printer');
queue.push('moniter');

document.write(queue.pop() + "<br>");
document.write(queue.pop() + "<br>");
document.write(queue.pop() + "<br>");
document.write(queue.pop() + "<br>");
//task 14 ends here



//task 15 starts here
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", " Haier"]
document.write("<select>" + "<option> " + phone[0]+"<option> "+phone[1]+"<option> "+phone[2]+"<option> "+phone[3]+"<option> "+phone[4]+"<option> "+phone[5] )
//task 15 ends here 