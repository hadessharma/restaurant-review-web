const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userReviewsSchema = Schema(
  {
    restaurant: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comments: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const userSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  reviews: {
    type: [userReviewSchema],
    required: true,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
