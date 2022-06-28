const patients = require("./patients");

const id = parseInt(process.argv[2]);

const specificPatient = patients.find(patient => {
    return id === patient.id;
});

if (specificPatient !== undefined) {
    console.log("OUTPUT:", specificPatient);
} else {
    console.log(`Patient with id: ${id}, not found`);
}