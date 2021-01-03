const mongoose = require('mongoose');
const validator = require('validator');

//Schema

const studentShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error(" invalid")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    address: {
        type: String,
        required: true
    }
});

//collection

const StdDb = new mongoose.model("StdDb",studentShema );


module.exports = StdDb;