var fname= window.prompt("Enter your first name:");
var lname= window.prompt("enter your lastname:");
var gender= window.prompt("enter your gender:");
var fullname= function(){
    return(this.fname+""+this.lname);
};
var info={
    firstname: fname,
    lastname: lname,
    gender: gender,
    fullname: fullname
};

window.alert("Firstname: " + info.firstname + "\nlastname:"+ info.lastname + "\nGender: "+ info.gender);