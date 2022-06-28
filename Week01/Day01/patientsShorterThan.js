const patients = require("./patients");
const height = parseFloat(process.argv[2]);

const patientsShorterThan = patients.filter(patient => {
    return patient.height < height;
});

console.log("OUTPUT:", patientsShorterThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS SHORTER THAN ${height}:`, patientsShorterThan.length);