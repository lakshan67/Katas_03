console.log("Kata 03");


const students = [
    { name: 'kalpana', age: 13, haveBeer: 'no' },
    { name: 'aron', age: 20, haveBeer: 'no' },
    { name: 'alex', age: 22, haveBeer: 'no' },
    { name: 'eran', age: 23, haveBeer: 'no' },
    { name: 'malika', age: 13, haveBeer: 'no' },
    { name: 'anupama', age: 15, haveBeer: 'no' },
    { name: 'dhanushka', age: 11, haveBeer: 'no' },
    { name: 'madhushanka', age: 16, haveBeer: 'no' },
    { name: 'thushan', age: 18, haveBeer: 'no' } 
];

function givePartyAccess(students) {
    return students.map(student => {
        if (student.age > 18) {
            student.haveBeer = 'yes' ;
        }
        return student;
    }).filter(student => student.age > 18);
 }

 const studentCanAccess = givePartyAccess(students);

 console.log(studentCanAccess);
