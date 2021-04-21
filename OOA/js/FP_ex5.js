const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}

console.log(femaleStudentsResults);


const female = student => student.sex === "f";
const average = array =>
array.reduce((sum, value) => sum + value, 0) / array.length;

// Filter by sex, then map each student to an object containing her name and average grade
console.log(
  students.filter(female).map(student => {
    return {
      name: student.name,
      avgGrade: average(student.grades)
    };
  })
);

// Alternative solution using the classical function syntax
/* console.log(students.filter(female).map(function(student) {
  return {
    name: student.name,
    avgGrade: average(student.grades)
  };
})); */