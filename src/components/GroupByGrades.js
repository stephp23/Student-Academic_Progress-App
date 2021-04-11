import React from 'react';
import groupBy from "../groupingBy";

const singleGradeDisplay = gradeStudents => {
    return (
     <div>
       {
        gradeStudents.map((student, i) => { 
          return (
            <div key={i}>
              <p>{student.name}</p>
            </div>
          );
        })
      }
     </div>
    );
};


const GroupByGrade = () => {
  const data = require("../Student_Data/students.json");
  const groupedByGrade = groupBy(data, 'grade');
  let metadata = [];
  for (let i = 6; i < groupedByGrade.length; i++) {
    metadata.push(groupedByGrade[i]);
  }

  console.log(metadata)
  
  return (
    <div>
      <h1>Students by Grade Levels</h1>
      {
        metadata.map((gradeStudents, i) => { 
          return (
           <div key={i}>
             <h2>{"Grade " + String(6 + i)}</h2>
             {singleGradeDisplay(gradeStudents)}
           </div>
          );
       })
      }
    </div>
  );
};

export default GroupByGrade;