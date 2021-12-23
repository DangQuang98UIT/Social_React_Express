const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    likes: {
      type: Array,
      default: [],
    },
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
