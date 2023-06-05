const fs = require('fs');
fs.readFile('planets.txt', 'utf8', (err, data) => {// read the planets from the text file
    if (err) {
        console.error(err);
        return;
    }

const planets = data.split(',');// split the data by commas
console.log('Planets:');
planets.forEach((planet) => {
    console.log(planet); // print the planets to the console
});
})