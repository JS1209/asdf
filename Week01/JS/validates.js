function validateNumberOfInputs(arr) {
    console.log(arr.length);
    return arr.length === 9 ? 0 : process.exit();
}

function validateWeightHeightAndAge(weight, height, age, arr) {
    if (Number.isInteger(weight) && (height % 1 !==0) && Number.isInteger(age)) {
        return (weight === arr[2] && height === arr[3] && age === arr[4]) ? 0 : process.exit();
    }
    process.exit();
}

function validateDailyExercise(exercise) {
    if (exercise === "yes" || "no") {
        return exercise === "yes" ? true : false;
    }
    process.exit();
}

function validateGender(gender) {
    if (gender === "m" || gender === "f") {
        return gender === "m" ? true : false;
    }
    process.exit();
}