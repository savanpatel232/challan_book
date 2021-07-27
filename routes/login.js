const express = require('express');
const router = express.Router();
const user = require('../models/user');
const dboperations = require('../dboperations');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    dboperations.createConnection().then(
        async () => {
            console.log('connection successfull.....');
            let db = mongoose.connection.db;
            await db.collection('users').countDocuments({}, {}, function (err, result) {
                if (err) {
                    res.json({ status: 'Internal Server Error', statusCode: 500, message: 'Error for Collecting Documents',error:err});
                } else {
                    res.json({ status: 'success', statusCode: 200,message:'Connection Successfull',result: {totalCount:result}});
                }
            });
        }).catch((err) => {
            console.log('Connection Error : ' + err);
            res.json({ status: 'Service Unavailable', statusCode: 503, message: 'Please contact your network administrator',error:err});
        });
}
)

module.exports = router;

