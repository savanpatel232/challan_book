const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/', (req, res) => {
    let result = { ...req.body };
    user.createUser(result).then((result) => {
        if (result != null) {
            res.json({ status: 'ok', statusCode: 200, message: 'Data Added successfully', result: result });
        } else {
            res.json({ status: 'Internal Server Error', statusCode: 500, message: 'Error for Uploading Data' });
        }
    }).catch((err) => {
        console.log('database creation error: ' + err);
        if (err.code == '11000') {
            res.json({ status: 'Bad Request', statusCode: 400, message: 'ID must be unique', error: err });
        }
        else {
            res.json({ status: 'Internal Server Error', statusCode: 500, message: 'Error for Uploading Data', error: err });
        }
    });
}
)

module.exports = router;

