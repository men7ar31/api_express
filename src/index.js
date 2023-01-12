const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const useRoutes = require('./routes/usersRoute')


const app = express();

// settings
app.set('appName', 'Api-Express')
app.set('port', 7000)

// middlewares
app.use(express.json());
app.use('/Api', useRoutes);

// routes
app.get('/', (req, res) => {
    res.send("Welcome")
})


// mongo DB connetion
mongoose.set('strictQuery',false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));


app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
