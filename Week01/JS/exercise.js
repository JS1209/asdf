/* To make sure that the program starts when calling the file in the terminal, we must start with calling the function
 * bmiCalculator. After that we define the function bmiCalculator. The order of calling and defining does not matter.
 * You can also not call the function, but then you should also not define the main program (in this case
 * bmiCalculator.)
 */

bmiCalculator();

function bmiCalculator() {
    validateNumberOfInputs(process.argv);

    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const age = parseInt(process.argv[4]);
    const dailyExercise = process.argv[5];
    const gender = process.argv[6];

    validateWeightHeightAndAge(weightInKg, heightInM, age, process.argv);
    validateDailyExercise(dailyExercise);
    validateGender(gender);

    const BMI = calculateBMI(weightInKg, heightInM);
    const idealWeight = calculateIdealWeight(heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, age, gender);
    const dailyCalories = calculateDailyCalories(BMR, dailyExercise);
    const weightToLoseKg = weightInKg - idealWeight;
    const dietWeeks = calculateDietWeeks(weightToLoseKg);
    const dietCalories = calculateDietCalories(weightToLoseKg, dailyCalories);


    const output = formatOutput(
        age,
        gender,
        heightInM,
        weightInKg,
        dailyExercise,
        BMI,
        idealWeight,
        dailyCalories,
        dietCalories,
        dietWeeks
    );

    console.log(output);
}


/*
 * All calculator functions. Nothing too special, formulas are in the reader.
 */

function calculateBMI(weightInKg, heightInM) {
    return weightInKg / (heightInM**2);
}

function calculateIdealWeight(heightInM) {
    return 22.5 * (heightInM**2);
}

function calculateBMR(weightInKg, heightInM, age, gender) {
    return gender === "m" ? (10 * weightInKg) + (6.25 * heightInM * 100) - (5 * age) + 50 : (10 * weightInKg) +
     (6.25 * heightInM * 100) - (5 * age) - 150;
}

function calculateDailyCalories(BMR, dailyExercise) {
    return dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4;
}

function calculateDietWeeks(weightToLoseKg) {
    return weightToLoseKg / 0.5;
}

function calculateDietCalories(weightToLose, dailyCalories) {
    return weightToLose > 0 ? dailyCalories - 500 : dailyCalories + 500;
}

/*
 * Formats the output.
 */

function formatOutput(age, gender, heightInM, weightInKg, dailyExercise, BMI, idealWeight, dailyCalories,
    dietCalories, dietWeeks) {
    if (gender === "f") {
        gender = "female";
    } else {
        gender = "male";
    }

    return ("\
    \n ************** \
    \n BMI CALCULATOR \
    \n ************** \
    \n \
    \n age: " + age + " years old \
    \n gender: " + gender + " \
    \n height: " + heightInM + "m \
    \n weight: " + weightInKg + "kg \
    \n daily exercise: " + dailyExercise + " \
    \n \
    \n **************** \
    \n FACING THE FACTS \
    \n **************** \
    \n \
    \n These are your stats: \
    \n \
    \n BMI: " + Math.round(BMI) + " \
    \n \
    \n A BMI under 18.5 is considered underweight \
    \n A BMI above 25 is considered overweight \
    \n \
    \n ideal weight: " + idealWeight + "kg \
    \n daily calories: " + dailyCalories + "cal \
    \n diet calories: " + dietCalories + "cal \
    \n diet weeks: " + Math.abs(Math.round(dietWeeks)) + " weeks \
    ");
}


/*
 * All validate functions. Only stops the program when input is invalid, does not give user feedback because there are
 * too many scenario's. Else, replace the "process.exit()" with something more suitable. For instance: output a message
 * corresponding to the problem, restart the whole program or only ask for the missing input and go on with the
 * program etc.
 */

function validateNumberOfInputs(arr) {
    return arr.length === 7 ? 0 : process.exit();
}

function validateWeightHeightAndAge(weight, height, age, arr) {
    if (Number.isInteger(weight) && (height % 1 !==0) && Number.isInteger(age)) {
        return (weight === parseInt(arr[2]) && height === parseFloat(arr[3]) && age === parseInt(arr[4])) ?
                0 : process.exit();
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
