const patients = require("./patients");
const email =  process.argv[2];

const specificPatient = patients.find(patient => {
    return email === patient.email;
});

console.log(specificPatient);