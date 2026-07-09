/* =====================================
   QR STUDENT ATTENDANCE SYSTEM
   MAIN APPLICATION JAVASCRIPT
===================================== */



// ================================
// LOAD APPLICATION
// ================================

document.addEventListener(

"DOMContentLoaded",

function(){


loadDashboard();


}
);




// ================================
// GET STUDENT DATA
// ================================


function getStudents()
{


return JSON.parse(

localStorage.getItem(
"students"

)

)
|| [];



}




// ================================
// GET ATTENDANCE DATA
// ================================


function getAttendance()
{


return JSON.parse(

localStorage.getItem(
"attendance"

)

)
|| [];



}




// ================================
// COUNT STUDENTS
// ================================


function totalStudents()
{


let students =
getStudents();



return students.length;


}




// ================================
// COUNT TODAY ATTENDANCE
// ================================


function todayAttendance()
{


let attendance =
getAttendance();



let today =
new Date()
.toLocaleDateString();



let result = attendance.filter(

item =>

item.date === today


);



return result.length;


}





// ================================
// ATTENDANCE PERCENTAGE
// ================================


function attendancePercentage()
{


let students =
totalStudents();



let present =
todayAttendance();



if(students==0)
{


return 0;


}



return Math.round(

(present/students)*100

);



}




// ================================
// DASHBOARD DISPLAY
// ================================


function loadDashboard()
{


let studentBox =
document.getElementById(
"totalStudents"
);



if(studentBox)
{


studentBox.innerHTML =
totalStudents();



}



let attendanceBox =
document.getElementById(
"todayAttendance"
);



if(attendanceBox)
{


attendanceBox.innerHTML =
todayAttendance();



}




let percentBox =
document.getElementById(
"attendancePercent"
);



if(percentBox)
{


percentBox.innerHTML =
attendancePercentage()
+
"%";

}



}




// ================================
// CURRENT DATE AND TIME
// ================================


function showDateTime()
{


let element =
document.getElementById(
"datetime"
);



if(element)
{


element.innerHTML =

new Date()
.toLocaleString();


}



}





setInterval(

showDateTime,

1000

);





// ================================
// CLEAR DATABASE
// ================================


function clearDatabase()
{


let answer =
confirm(

"Delete all students and attendance records?"

);



if(answer)
{


localStorage.removeItem(
"students"
);



localStorage.removeItem(
"attendance"
);



alert(

"Database cleared successfully"

);



location.reload();



}



}




// ================================
// LOGOUT / EXIT
// ================================


function logout()
{


let confirmLogout =

confirm(

"Return to home page?"

);



if(confirmLogout)
{


window.location.href =
"index.html";


}



}




// ================================
// PAGE NAVIGATION
// ================================


function openPage(page)
{


window.location.href =
page;



}