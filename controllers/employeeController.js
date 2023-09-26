const asyncHandler = require('express-async-handler');
const employee = require("../models/empModel")
//@desc Get all employees from database
//@route GET /api/emp
//@access public
const getEmployees = asyncHandler(async(req,res) => {
    const emp = await employee.find();
    res.status(200).json(emp);
});

//@desc Get employee based on ID
//@route GET /api/emp/:id
//@access public
const getEmployee = asyncHandler( async (req,res) => {
    const emp = await employee.findById(req.params.id);
    if(!emp){
        res.status(404);
        throw new Error("Employee Not Found");
    }
    res.status(200).json(emp);
});

//@desc Create employee
//@route POST /api/emp
//@access public
const createEmployee = asyncHandler(async(req,res) => {

    console.log("request body data ",req.body)
    const {name,email,phone,department,gender} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("ALL FEILDS ARE MANDATORY");
    }
    const emp = await employee.create({name,email,phone,department,gender})
    res.status(200).json(emp)
});

//@desc Update employee based on ID
//@route PUT /api/emp/:id
//@access public
const updateEmployee = asyncHandler(async(req,res) => {
    const emp = await employee.findById(req.params.id);
    if(!emp){
        res.status(404);
        throw new Error("Employee Not Found");
    }

    const updatedEmployee = await employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedEmployee)
});

//@desc Delete employee based on ID
//@route DELETE /api/emp/:id
//@access public
const deleteEmployee = asyncHandler(async(req,res) => {
    const emp  = await employee.findById(req.params.id);
    if(!emp){
        res.status(404);
        throw new Error("Contact NOt found");
    }
    await employee.deleteOne({ _id: req.params.id });
    res.status(200).json(emp)
});

module.exports = {
    getEmployee,
    getEmployees,
    updateEmployee, 
    createEmployee, 
    deleteEmployee};