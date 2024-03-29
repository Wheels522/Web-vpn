// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, etc.)
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/signin.html');
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    // Authenticate user - perform sign-in logic here
    // For demonstration, check against hardcoded values
    if (email === 'user@example.com' && password === 'password') {
        res.send('Sign in successful! Welcome.');
    } else {
        res.status(401).send('Invalid email or password.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
