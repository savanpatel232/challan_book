const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    _id: Number,
    Mobile: Number,
    PartyName: String,
    BillNo:Number,
    BookNo:Number,
    Date:String
}, {
    versionKey: false
})

const User = new mongoose.model('User', user_schema);

async function createUser(res) {
    /* let db = await mongoose.connection.db;
    const count = await db.collection('users').count(); */
        const createDoc = User({
            _id: res._id,
            Mobile: res.Mobile,
            PartyName: res.PartyName,
            BillNo:res.BillNo,
            BookNo:res.BookNo,
            Date:res.Date
        })
        const created = await createDoc.save();
        return created;
}

module.exports = {
    createUser,
}