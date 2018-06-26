// Create a grades object that stores a set of student grades in an object.Provide a function for adding a grade and a function for displaying the student’s grade average.


let grades = {};

addGrades = (subject, grade) => {
    grades[subject] = grade;
    return grades;
}

calculateAverage = (grades) => {
    let sum = 0
    for (var grade in grades) {
        sum += grades[grade]
    }
    console.log(sum / Object.keys(grades).length);
    return sum / Object.keys(grades).length;
}


addGrades('math', 90);
addGrades('science', 70);
addGrades('history', 60);
addGrades('P.E.', 100);

calculateAverage(grades)

// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

//create a grades object that stores a stundent's grades
//function for adding a grade
//function for calculate grade average and displaying a grade average
// let grades = {
//   'math': 96,
//   'english': 85,
//   'science': 90,
//   'gym': 65
// }


class Student {
    constructor(grades) {
        this.grades = grades;
    }

    addGrade(subject, grade) {
        this.grades[subject] = grade;
        return grades;
    }

    gradeAverage() {
        let sumOfgrades = 0;
        let gradesArr = [];

        for (let i in grades) {
            gradesArr.push(grades[i]);
            sumOfgrades += grades[i];
        }
        let average = sumOfgrades / gradesArr.length;
        return average.toFixed(2);

    }


    displayGradeAve(gradeAve) {
        console.log('your grade average is:', gradeAve);
    }

}

let grades = {
    'math': 96,
    'english': 85,
    'science': 90,
    'gym': 65
}

let liz = new Student(grades);
liz.addGrade('socialStudies', 80);
liz.addGrade('physics', 54);
console.log(liz.grades);
let gradeAve = liz.gradeAverage();
console.log(gradeAve);
liz.displayGradeAve(gradeAve);

let michelle = new Student(grades);
//console.log(michele)
michelle.addGrade('botany', 100);
console.log(michelle);

//console.log('this is grades in global', grades);

