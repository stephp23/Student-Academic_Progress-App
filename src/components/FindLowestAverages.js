import React from "react";
import groupBy from "../groupingBy";

const getMinStudents = groupedByGrade => {
  let minStudents = {};
  for (const [grade, students] of Object.entries(groupedByGrade)) {
      let currMin = Infinity;
      let currMinStudent = null;
      students.forEach((student) => {
        let studentClassCount = 0;
        let studentTotalScore = 0;
        let classData = student.scores;
        classData.forEach(classData => {
          studentTotalScore += classData.value;
          studentClassCount++;
        });
      const studentAvg = studentTotalScore / studentClassCount;
      if (studentAvg < currMin) {
        currMin = studentAvg;
        currMinStudent = student;
      }
    });
    minStudents[grade] = {name: currMinStudent.name, value: currMin};
  }
  return minStudents;
};

const FindLowestAverages = () => {
  const data = require("../Student_Data/students.json");
  const groupedByGrade = groupBy(data, 'grade');
  const minStudents = getMinStudents(groupedByGrade);

  console.log(minStudents)

  return (
    <div>
      <h1>Lowest Performing Students by Grade Level</h1>
    {
      Object.keys(minStudents).map((grade, i) => (
        <div key={i}>
            <h2>{"Grade " + String(grade)}</h2>
            <p>{"Name: " + minStudents[grade].name}</p>
            <p>{"Average Score: " + String(minStudents[grade].value)}</p>
        </div>
      )
    )
    }
    </div>
  );
};

export default FindLowestAverages;