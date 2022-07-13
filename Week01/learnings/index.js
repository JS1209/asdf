const express = require(`express`);
const app = express();
const PORT = 4000
app.listen(PORT, () => console.log(`Listening on :${PORT}`));

const days = [
    { day: "yesterday",
      learned: "123"},
    { day: "today",
      learned: "456"},
    { day: "tomorrow",
      learned: "789"}
];

const getInfo = async () => {
    try {
        app.get('/json', (request, response) => {
            response.send(days);
        });
        app.get('/:day', (request, response) => {
            const when = days.find(day => {return request.params.day === day.day});
            response.send(when.learned);
        })
    } catch (error) {
        response.send(`This page doesnt exist.`);
    }
}
getInfo();
