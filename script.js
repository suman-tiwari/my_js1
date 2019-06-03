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

// function mybox(id){
//     document.getElementById(id).style.zIndex += "1";
// }
 
// document.addEventListener('DOMContentLoaded', function(){

//     var handler = function(){
    
//         pbox = document.querySelectorAll('.top');
//         pbox.function(node){
//             node.classList.remove('top');
//         }
//         console.log(this);
//         this.classList.add('top');
        
//     }

//     boxed = document.querySelectorAll('.box');
//     boxed.forEach(function(box){
//         console.log('box',box);
//         box.addEventListener('click',handler);
//     })


// })
// boxes= document.querySelectorAll('.box');
// boxes.forEach(value){
//     value.addEventListener('click',handler);
// }
// handler = boxes.forEach(function(value){
//     value.style.zIndex="0";
// }
// this.style.zIndex="1";
// )


var upkey= document.querySelectorAll('.fa-caret-up');
var downkey= document.querySelectorAll('.fa-caret-down');
var leftkey= document.querySelectorAll('.fa-caret-left');
var rightkey= document.querySelectorAll('.fa-caret-right');

upkey.forEach(function(node){
  node.addEventListener('click',function(){
      var target= this.parentNode;
      var curTop= getComputedStyle(target).top;
      var newTop= parseInt(curTop)-20 + 'px';    
      target.style.top= newTop;
  });
});
downkey.forEach(function(node){
  node.addEventListener('click',function(){
      var target= this.parentNode;
      var curBott= getComputedStyle(target).top;
      var newBott= parseInt(curBott)+ 20 + 'px';    
      target.style.top= newBott;
  });
});
leftkey.forEach(function(node){
  node.addEventListener('click',function(){
      var target= this.parentNode;
      var curLeft= getComputedStyle(target).left;
      var newLeft= parseInt(curLeft)-20 + 'px';    
      target.style.left= newLeft;
  });
});
rightkey.forEach(function(node){
  node.addEventListener('click',function(){
      var target= this.parentNode;
      var curRight= getComputedStyle(target).left;
      var newRight= parseInt(curRight)+20 + 'px';    
      target.style.left= newRight;
  });
});

var minus=document.querySelectorAll('.box .fa-minus-square');
var plus=document.querySelectorAll('.box .fa-window-plus');
var close=document.querySelectorAll('.box .fa-window-close');

minus.forEach(function(node){
  node.addEventListener('click',function(){
    debugger;
    var target= this.parentNode;
    target.resizeTo(10,10);
    target.focus();
  })
  
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

function allowDrop(event) {
    event.preventDefault();
  }

function drop(event) {
    event.preventDefault();
    var dbox = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(dbox));
  }
  
  // boxes = document.querySelectorAll('.box');
  // boxes.forEach(function(box){
  //   box.addEventListener('click', handler);
  // });
  
  // handler= forEach(function(id){
  //   id.style.zIndex=0;
  // }
  // this.style.zIndex=1;
  // );