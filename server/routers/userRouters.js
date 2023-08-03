const express = require("express");
const mongoose = require("mongoose")
const User = require("../models/userModel")

const router = express.Router();

// Get All Data

router.get("/", async (req, res) => {
    try {
        const getAllData = await User.find();
        res.status(201).json(getAllData);
    } catch (error) {
        console.log(error);
        res.send(500).json({ error: error.message })
    }
})

// Insert Data

router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userData = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userData)
    } catch (error) {
        res.send(400).json({ error: error.messege })
        console.log(error);
    }
})

// get single User

router.get("/:id", async (req, res)=> {
    const { id } = req.params;
    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
})

// Delete Opration

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete({_id: id});
        res.status(200).json(deleteUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
})

// Update Opration 

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new:true,
        });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router;