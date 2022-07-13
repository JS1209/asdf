const patients = require("./patients");

const calculateBMI = (height, weight) => {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(patient => {
    let BMI = calculateBMI(patient.height, patient.weight);
    return BMI;
});

console.log("BMIs are:", bmis);

const calculateBMR = (weight, height, ageOfUser, genderOfUser) => {
    const heightInCm = height * 100;

    let BMR;

    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }

    return BMR;
}

const bmrs = patients.map(patient => {
    return calculateBMR(patient.weight, patient.weight, patient.age, patient.gender);
});

console.log("BMRs are:", bmrs);