var url= "http://localhost:3300/api/users";
function postUser(){
console.log(url);

var myName = $('#name').val();
var myEmail= $('#email').val();
var myAge =  $('#age').val();
var myComments = $('#comments').val();


var myuser ={
name : myName,
email : myEmail,
age : myAge,
comments : myComments
};

console.log(myuser);

$.ajax({
url : url,
type : 'post',
dataType : 'json',
contentType : 'application/json',
succes : function (data){
console.log(data);
$('#resultado').html(JSON.stringify(data.user));
},
data : JSON.stringify(myuser)
});
}
