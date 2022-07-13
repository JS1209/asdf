const patients = require("./patients");

patients.forEach(patient => {
    const { firstName, lastName } = patient;
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
});

patients.forEach(patient => {
    const {firstName, age} = patient;
    console.log(`${firstName} - age: ${age}`);
});

patients.forEach(patient => {
    const {weight, lastName, gender} = patient;
    console.log(`${lastName} - weight: ${weight} - gender: ${gender}`);
});

patients.forEach(patient => {
    const {gender, lastName} = patient;

    if (gender === 'm') {
        console.log(`Mr ${lastName}`);
    } else {
        console.log(`Mrs ${lastName}`);
    }
});