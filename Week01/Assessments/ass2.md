# �� Week 1 - Express Exercise
​
(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)
​
#### Rules for this exercise
​
- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this public in any ways
​
#### Duration
​
- This exercise ends at 11.00
​
#### How to make and submit your homework
​
- Navigate to the directory called `end-of-day-exercises` with your terminal
- Once you finish or the deadline time is reached:
  - open [gist](https://gist.github.com/)
  - copy/paste all your code there
  - click `Create secret gist`
  - fill in [THIS FORM](https://forms.gle/9YiQoQi4Pgo4dTNC8)
​
## Learning goals & some tips
​
For transparency and clarity, these are the learning goals we will be testing:
​
- Using npm packages (express)
- Setting up a simple Express server
- Defining routes in your express server
​
**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.
​
**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you. You are also allowed to ask for help if you're really stuck, just try to avoid it.
​
**TIP: Break problems up into smaller problems!** Before writing code make yourself a 'to-do list' or 'battleplan'. Use `console.log()` to help you with debugging!
​
**TIP: Use nodemon!** If you run your server using `npx nodemon server.js` instead of `node server.js`, nodemon will keep track of changes on your server, and restart it everytime you save the file.
​
### ❗ Express
​a
**Setup**:
​
1. Initialize an NPM project inside the `end-of-day-exercises` directory.
2. run `npm install express`
3. Create a new file called `server.js`
4. Require express, declare a value for PORT and start your server using app.listen.
5. Require (import) your characters file.
​
**A** Create a GET - `/` route that responds with the string `Hello from Express server`
​
**B** Create a GET - `/message` route that responds with an html message of your choice. (don't forget to define the html message constant)
​
**C** Create a GET - `/characters` route that responds with the whole list of characters.
​
**D** Create a GET - `/characters/:id` route that responds with the character with matching id
​
**E** Create a GET - `/char/:blood` route that responds with the characters matching the blood type in the `path`
​
**BONUS**
​
**F** Add validation for feature **E** - present the correct characters even if blood parameter is written in different cases ("human" vs "Human" vs "HUman")
​
**G** Add error handling for features **D** and **E**, - users should get a message stating what went wrong
​
​
Remember to test these routes from your browser!