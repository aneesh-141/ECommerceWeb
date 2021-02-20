const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')


//setting the env file
dotenv.config({
    path:'backend/config/config.env'
})

//Connection to the database
connectDatabase()


app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

