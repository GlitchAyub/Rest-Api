const express = require('express');

require('./db/conn');

const StdDb = require('./models/data')

const app = express();

const stdRouter = require("./routers/std")

const port = process.env.PORT || 3000;

app.use(express.json());

/*
//create a new router

const router = new express.Router();

//define the router

router.get("")


*/
// registering router
app.use(stdRouter);



app.listen(port, () => {
    console.log(`connected to port no : ${port}`)
})