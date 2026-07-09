let scanner;


document
.getElementById("start")
.onclick=function(){


scanner = new Html5QrcodeScanner(

"reader",

{

fps:10,

qrbox:{
width:250,
height:250
},

rememberLastUsedCamera:true


},

false

);



scanner.render(

function(decodedText){


document
.getElementById("result")
.innerHTML =
"Attendance Recorded: "
+
decodedText;



saveAttendance(decodedText);



scanner.clear();



},


function(error){

console.log(error);

}


);


};