const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.static('public'))


app.get('/', (req, res) => {
    console.log('default route');
    res.send('Welcome to DeepHealth.');
});

app.get('/products', (req, res) => {
    console.log('product route')
    res.send('Welcome to DeepHealth Products.');
});


app.listen(PORT, () => {
    console.log(`App listning on port ${PORT}`);
});