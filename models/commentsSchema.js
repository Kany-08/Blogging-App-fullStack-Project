const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentsSchema = new Schema ({
    commentText: { type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"users"
    },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref:"blogs"
    },
    replyText: [{
        type: mongoose.Schema.Types.ObjectId, ref:"comments"
    }],
    createAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model("comments", commentsSchema)