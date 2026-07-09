function saveAttendance(studentID)
{


let attendance =
JSON.parse(

localStorage.getItem(
"attendance"
)

)
||[];



let record={


id:studentID,

date:
new Date()
.toLocaleDateString(),

time:
new Date()
.toLocaleTimeString(),

status:"Present"


};



attendance.push(record);



localStorage.setItem(

"attendance",

JSON.stringify(attendance)

);



alert(
"Attendance Successfully Recorded"
);


}