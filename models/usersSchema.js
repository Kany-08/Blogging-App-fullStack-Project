const mongoose = require("mongoose");
const { Schema } =mongoose;

const userSchema = new Schema( {
    firstName: { type: String, required: true, minlength: 3 },
    lastName: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: false, maxlength: 50 },
    password: { type: String, required: true },
    image: { type: String, default: function(){
        return  `https://joeschmoe.io/api/v1/${this.lastName}`
    }},
    blogs: [{
        type:mongoose.Schema.Types.ObjectId,ref:"blogs"
    }],
    createAt: {
        type:Date, default:Date.now
    },
    token: { type: String}

})

module.exports = mongoose.model("users",userSchema)