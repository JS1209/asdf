const patients = require("./patients");
const phoneNumber =  process.argv[2];

const specificPatient = patients.find(patient => {
    return phoneNumber === patient.phoneNumber;
});

console.log(specificPatient);