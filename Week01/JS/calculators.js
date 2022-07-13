function calculateBMI(wKG, hM) {
    return wKG / (hM**2);
}

function calculateIdealWeight(hM) {
    return 22.5 * (hM**2);
}

function calculateBMR(wKG, hM, a, g) {
    return g === "m" ? (10 * wKG) + (6.25 * hM * 100) - (5 * a) + 50 : (10 * wKG) + (6.25 * hM * 100) - (5 * a) - 150;
}

function calculateDailyCalories(BMR, dEx) {
    return dEx === "yes" ? BMR * 1.6 : BMR * 1.4;
}

function calculateDietWeeks(wLKG) {
    return wLKG / 0.5;
}

function calculateDietCalories(dC) {
    return dC - 500;
}

function formatOutput(age, gender, heightInM, weightInKg, dailyExercise, BMI, idealWeight, dailyCalories,
    dietCalories, dietWeeks) {
return ("\
\n age: ${age} \
\n gender: ${gender} \
\n height: ${height} \
\n weight: ${weight} \
\n daily exercise: ${dailyExercise} \
\n BMI: ${BMI} \
\n ideal weight: ${idealWeight} \
\n daily calories: ${dailyCalories} \
\n diet calories: ${dietCalories} \
\n diet weeks: ${dietWeeks} \
");
}