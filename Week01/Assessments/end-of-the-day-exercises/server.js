const express = require('express');
const characters = require("./characters");
const port = 3000;
const app = express();
app.listen(port, () => console.log(`Listening on :${port}`));


// Challenge A:
app.get(`/`, (request, response) => {
  response.send(`Hello from Express server`);});

// Challenge B:
const message =`<html>
                    <head>
                        <title>Message</title>
                    </head>
                <body>
                    <h1>CAN I HAVE YOUR ATTENTION</h1>
                    <h5>Thanks for your attention</h5>
                </body>
                </html>`
app.get(`/message`, (request, response) => {
    response.send(message);
});

// Challenge C:
app.get(`/characters`, (request, response) => {
    response.send(characters);
});

// Challenge D & E & F & G:
const getWebsite = async () => {
    try{
        app.get('/characters/:constraint', (request, response) => {
            const character = characters.filter(char => {
                if (char.id === parseInt(request.params.constraint)) {
                    return char;
                } else if (char.blood.toLowerCase() == request.params.constraint.toLowerCase()) {
                    return char;
                }
            });
        response.send(character);
        })
    } catch (error) {
        response.send(error.message);
    }
};
getWebsite();