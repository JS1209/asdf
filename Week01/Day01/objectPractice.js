const patients = require("./patients");
const firstPatient = patients[0];

const {firstName, lastName, weight, age, height} = firstPatient;
const fullName = `${firstName} ${lastName}`;
if (firstPatient.dailyExercise === 'yes') {
    console.log("This patient does exercise");
} else {
    console.log("This patient does not exercise");
}