student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}

console.log([student.name, student.sclass, student.rollno]);

console.log(Object.keys(student).length);

delete student.rollno

console.log(student);