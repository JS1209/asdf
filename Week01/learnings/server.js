const express = require(`express`);
const app = express();
const characters = require (`./characters`)
const PORT = 4000

app.get(`/:id`, (request, response) => {
        const char = characters.find(character => {return character.id = parseInt(request.params.id)});
        response.send(char);
    });

app.listen(PORT, () => console.log(`Listening on :${PORT}`));