const patients = require("./patients");

const phoneNumbers = patients.map(patient => {
    return patient.phoneNumber;
});

console.log(phoneNumbers);