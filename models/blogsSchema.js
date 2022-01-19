const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema ({
    title: { type: String, required: true},
    description: { type: String, required:false},
    content: { type: String, required: true},
    image: { type: String, default: "https://source.unsplash.com/random/300x200?sig=${Math.random()}" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"users"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref:"comments"
    }],
    createAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model("blogs", blogSchema)