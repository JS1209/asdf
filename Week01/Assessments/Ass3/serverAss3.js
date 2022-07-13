const express = require('express');
const characters = require('./characters.json');
const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express server');
});

const htmlTemplate = `
<html>
    <body>
        <h1>This is an html template sent from the server!</h1>
    </body>
</html>`;

app.get('/message', (req, res) => {
  res.send(htmlTemplate);
});

app.get('/characters', (req, res) => {
  res.send(characters);
});

app.get('/characters/:id', (req, res) => {
  const { id } = req.params;
  const characterById = characters.find(
    (character) => character.id === parseInt(id)
  );
  res.send(characterById);
});

app.get("/char/:blood", (req, res) => {
  const { blood } = req.params
  const charByBlood = characters.filter(char => char.blood.toLowerCase() === blood.toLowerCase())

  if (charByBlood.length < 1){
    res.status(404).send("No characters with the provided blood type")
  } else {
    res.send(charByBlood)
  }
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));