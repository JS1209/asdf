const patients = require("./patients");

const idList = patients.map(patient => {
    return patient.id;
});

console.log(idList);