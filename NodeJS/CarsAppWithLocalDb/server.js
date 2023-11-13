const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');


app.use(bodyParser.json());


let cars = [];

//{"name":"Ferrari","Year":2020}



// Define a route
app.get('/getCar', (req, res) => {// return all cars as a json format.
  res.json(cars);
});

// Define a route
app.get('/getCar/:id', (req, res) => {//returns id'th index car as a json format
    let id = req.params.id;
    cars[id] ? res.send(cars[id]) : res.send('Empty');

  });

app.post('/addCar', (req, res) => {// add new car to array, car provided from body.
    const newCar = req.body.car;
    cars.push(newCar);
    res.json(newCar);
});

app.post('/deleteCar', (req, res) => {//delete the car at the index that given from body.
    const delCar = req.body.id;
    cars = cars.filter((item, index) => index !== delCar);
    
    res.json(cars);
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
