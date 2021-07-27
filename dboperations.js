const mongoose = require('mongoose');

const mongoLocal = 'mongodb://localhost:27017/tut1'
const mongoAtlas = 'mongodb+srv://savan123:savan123@cluster0.hv8wz.mongodb.net/tut2?retryWrites=true&w=majority'
async function createConnection() {
    var c = false;   
    const conn = await mongoose.connect(mongoAtlas, {
         useNewUrlParser: true, 
         useUnifiedTopology: true,
         useCreateIndex:true,
         useFindAndModify:false,
        });
}

module.exports = {
    createConnection,
}