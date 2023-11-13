const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');


app.use(bodyParser.json());




// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route
app.get('/sayHiToHusrev', (req, res) => {
    res.send('Hello, Husrev!');
});

// Define a route
app.post('/sayHiToHusrev', (req, res) => {
    res.send('Hello, Husrev Post!');
});


// Define a route
app.post('/printBody', (req, res) => {
    let body = req.body;
    console.log(body);
    //console.log(req);

    res.send(body);
});


// Define a route
app.post('/printParam/:id', (req, res) => {
    let params = req.params;
    console.log(params);
    //console.log(req);

    res.send(params);
});

// Route that returns a JSON object
app.get('/json', (req, res) => {
    const jsonObject = {
      message: 'This is a JSON response',
      data: {
        key1: 'value1',
        key2: 'value2'
      }
    };
  
    res.json(jsonObject);
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
