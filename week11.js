"use strict";
// Week 11 - TypeScript
// Classes, Interfaces and Functions
class StudentDetails {
    id;
    name;
    course;
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    displayDetails() {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Course: " + this.course);
    }
}
function showMessage(message) {
    console.log(message);
}
let student1 = new StudentDetails(101, "Rahul", "Artificial Intelligence");
showMessage("Student Information");
student1.displayDetails();
