const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = ['ahowell', 'bjorgenson', 'ctanner', 'dking'];

// '/' route
router.get('/', (req, res, next) => {
    // Request handling
    // CORE CHALLENGE 1 -
    // HTML page is written
    res.write('<html>');
    res.write('<head><title>Prove 01</Title></head>');
    res.write('<body>');
    res.write('<h1>Welcome</h1>');
    res.write('<h2>View users:</h2>');
    // navigation to your users endpoint.
    res.write('<a href="/users">Users</a></br>');
    res.write('<h2>Add a user:</h2>');
    // Form for "./create-user".
    res.write('<form action="./create-user" method="POST">');
    res.write('<input type="text" name="username">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    return res.end();
});

// '/users' route
router.get('/users', (req, res, next) => {
    res.write('<html>');
    res.write('<h1>Users</h1>');
    // navigation to your home endpoint.
    res.write('<a href="/">Home</a></br>');
    res.write('<body>');
    res.write('<ul>');
    // Loop through users using for...of loop to display the list
    for (const user of users) {
        res.write(`<li>${user}</li>`);
    }
    res.write('</ul>');

    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

// '/create-user' route
router.post('/create-user', (req, res, next) => {
    const username = req.body.username;
    console.log(username);
    users.push(username);
    res.redirect('/users');
    return res.end();
});

module.exports = router;
