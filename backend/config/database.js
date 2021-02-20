const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log("MongoDB is connected with host");
    }).catch(error => {
        console.log(error.message);
    })
}

module.exports = connectDatabase