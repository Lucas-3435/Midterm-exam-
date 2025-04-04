// Create a new JavaScript file named classSubjects.js.
// Collect the following user information with the use of prompt():
let subjectTitle = prompt("Enter the subject title:");
let classSchedule = prompt("Enter the class schedule (Time, Days):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor:");
let studentName = prompt("Enter the student name:");

// Use variables to store this information and log it to the console following the string 
// "{Student Name} is currently enrolled in {Subject Title} with a class schedule of {Class 
// Schedule} at room {Classroom}. The instructor for the subject is {Class Instructor}"
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}`);
