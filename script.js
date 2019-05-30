// var fname= window.prompt("Enter your first name:");
// var lname= window.prompt("enter your lastname:");
// var gender= window.prompt("enter your gender:");
// var fullname= function(){
//     return(this.fname+""+this.lname);
// };
// var info={
//     firstname: fname,
//     lastname: lname,
//     gender: gender,
//     fullname: fullname
// };

// window.alert("Firstname: " + info.firstname + "\nlastname:"+ info.lastname + "\nGender: "+ info.gender);

//constructor in javascript
// function Person(name, address, phone){
//     this.name=name;
//     this.address=address;
//     this.phone=phone;
// }
// var myman= new Person("suman","nakkhu",984167);
// alert("I am "+myman.name+" from "+myman.address);

// var student=new Person("Sailesh", "banepa", 9845632822);
// alert("I am "+student.name+ " from "+ student.address);

// function handler1(){
//     alert("this is handler 1");
// }
// function handler2(){
//     alert("this is handler 2");
// }

// document.querySelector(".handler").addEventListener("click",handler1());

function mybox(id){
    document.getElementById(id).style.zIndex += "1";
}
