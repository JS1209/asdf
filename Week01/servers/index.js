// const express = require('express')
// const app = express()
// const render = (message) => {
//     const document = `<html>
//       <head>
//         <title>My favorite movie</title>
//       </head>

//       <body>
//         <h1>${message}</h1>
//       </body>
//     </html>`

//     return document
// }

// app.get(
//   '/user/:name',
//   (request, response) => {
//     const message = "Welcome " + request.params.name;
//     const page = render(message);
//     response.send(page);
//   }
// )

// const port = 3000

// app.listen(port, () => console.log(`Listening on :${port}`))

const express = require('express')
const app = express()

app.use(`/website`, express.static("static-html-website"));

app.get(
  '/:name',
  (request, response) => {
    response.send(`Hello ${request.params.name}, go to localhost:3000/website to go to the website`);
  }
)

const port = 3000

app.listen(port, () => console.log(`Listening on :${port}`))