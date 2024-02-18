const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const users = [];
//const users = [ { name: "yogesh", password: "password" } ];
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     console.log('default route');
//     res.send('Welcome to DeepHealth.');
// });

app.get('/', (req, res) => {
    console.log('default route');
    res.render('login');
});

app.get('/products', (req, res) => {
    console.log('product route')
    res.send('Welcome to DeepHealth Products.');
});

app.get('/users', (req, res) => {
    console.log('get users route')
    res.json(users);
});

app.post('/users', (req, res) => {
    console.log('post users route')
    const user = { name: req.body.name, password: req.body.password }
    users.push(user);
    res.status(201).send('New user created');
});

app.post('/login', (req, res) => {
    console.log('post login route')
    const user = users.find(user => user.name == req.body.name )
    if(user == null){
        return res.status(400).send('Cannot find user');
    }
    if(req.body.password == user.password){
        res.send('Success');
    } else {
        res.status(500).send('Authentication failed');
    }
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`App listning on port ${PORT}`);
});