const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/student", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false })
    .then(() => {
        console.log("connected")
    }).catch(err => {
        console.log(`connectino failed ${err}`)
    });
    