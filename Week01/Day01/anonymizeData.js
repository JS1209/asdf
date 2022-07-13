const patients = require("./patients");
console.log(patients);

const anonymizedData = patients.map(patient => {
  return {
    id: patient.id,
    age: patient.age,
    gender: patient.gender,
    height: patient.height,
    weight: patient.weight,
    dailyExercise: patient.dailyExercise,
  };
});

console.log(anonymizedData);