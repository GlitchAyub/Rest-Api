const express = require('express');

const router = new express.Router();

const StdDb = require("../models/data");

//post or create 
router.post("/students", async (req, res) => {
    try {
         const user = new StdDb(req.body);
    
        const createUser = await user.save();
    
        res.status(201).send(createUser);
        }
    catch (err) {
        res.status(404).send(err)
        }
    })
    //read the data
    router.get("/students", async (req, res) => {
        try {
            const stduentsData = await StdDb.find()
            res.send(stduentsData)
        }
        catch (err) {
            res.send(err)
        }
    })
    
    //get the individual data
    router.get("/students/:id", async (req, res) => {
        try {
            const _id = req.params.id;
            const studentData = await StdDb.findById(_id);
    
            console.log(studentData)
    
            if (!studentData) {
                return res.status(404).send()
            } else {
                res.send(studentData);
            }
    
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
    //patch/update
    router.patch("/students/:id", async (req, res) => {
        try {
            const _id = req.params.id;
            const patchStd = await StdDb.findByIdAndUpdate(_id, req.body,{new:true});
            res.send(patchStd)
            
        } catch (err) {
            res.status(404).send(err)
        }
        
    })
    
    //delete
    
    router.delete("/students/:id", async (req, res) => {
        try {
            
            const deleteStd = await StdDb.findByIdAndDelete(req.params.id);
            if (!req.params.id) {
                return res.status(404).send();
            } else {
                res.send(deleteStd)
            }
            
        }
        catch (e){
            res.status(404).send(e)
         }
    
    })

module.exports = router;