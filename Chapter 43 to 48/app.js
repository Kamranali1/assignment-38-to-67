 // task 1 starts 
 function Click() {
    alert("hello world!")
}
//task 1 ends here 

//task 2 starts here 
function disp() {
    alert("Thanks form purchasing item ")
}
//task 2 ends here 

//task 3 starts 
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
//task 3 ends here 

//task 4 starts here 
function pic(){
     document.getElementById("img1").src="mob 2.jfif";
}
function picChange(){
    document.getElementById("img1").src="mob1.jfif";
}
//task 4 ends here 

//task 5 starts here 
function countIncrease(){
    var a = document.getElementById("para").innerHTML
    a++
    document.getElementById("para").innerHTML = a
}
function countDecrease(){
    var a = document.getElementById("para").innerHTML
    a--
    document.getElementById("para").innerHTML = a
}
//task 5 ends here 