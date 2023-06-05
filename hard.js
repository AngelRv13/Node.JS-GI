const express = require('express');
const app = express();
const employees = require('/employees.json');


app.get('/employees' , (req, res) => {
    res.json(employees);
});

app.get('/employees/:employeesID',(req, res) =>{
    const employeesID = parseInt(req.params.employeesID);

const employee = employees.find((employee) => employee.employeesID === employeesID);
if(!employee) {
    res.status(404).json({ error: 'Employee not found'});
    return;
}
res.json(employee);
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});