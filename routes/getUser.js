const express = require('express');
const router = express.Router();
const user = require('../models/user');
const dboperations = require('../dboperations');
const mongoose = require('mongoose');

router.get('/',async (req, res) => {
    let db = mongoose.connection.db;
    var v = await db.collection('users').find({}).toArray(
        function(err,result){
            if (err) {
                res.json({ status: 'Internal Server Error', statusCode: 500, message: 'Error for Collecting Documents'});
            } else {
                res.json({ status: 'success', statusCode: 200,message:'Data read Successfully',result:result});
            }
        }
    );
})

module.exports = router;

