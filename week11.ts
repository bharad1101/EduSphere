// Week 11 - TypeScript
// Classes, Interfaces and Functions

interface Student {
    id: number;
    name: string;
    course: string;
}

class StudentDetails implements Student {

    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Course: " + this.course);
    }
}

function showMessage(message: string): void {
    console.log(message);
}

let student1 = new StudentDetails(
    101,
    "Rahul",
    "Artificial Intelligence"
);

showMessage("Student Information");

student1.displayDetails();
