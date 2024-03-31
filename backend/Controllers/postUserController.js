const User = require("../Models/userModel");

const postUser = async (req, res) => {
  try {
    const { userName, restaurant, rating, comment } = req.body;
    const user = await User.findOne({ username: userName });

    if (user) {
      console.log(user.reviews[0].restaurant);
      // check if restaurant exists in the list of reviews
      for (let i = 0; i < user.reviews.length; i++) {
        if (user.reviews[i].restaurant == restaurant) {
          user.reviews[i].review.push({ rating: rating, comment: comment });
          // found and updated
          user.save();
          return res.status(200).json({ data: user, msg: "User found" });
        }
      }

      user.reviews.push({
        restaurant: restaurant,
        review: { rating: rating, comment: comment },
      });
      user.save();
      return res.status(200).json({ data: user, msg: "User found" });
    } else {
      const newUser = new User({
        username: userName,
        reviews: [
          {
            restaurant: restaurant,
            review: [
              {
                rating: rating,
                comment: comment,
              },
            ],
            totalReviews: 1,
          },
        ],
      });
      const doc = await newUser.save();
      return res.status(200).json({ data: doc, msg: "no user found" });
    }
  } catch (error) {
    return res.status(201).json({ data: "", msg: error });
  }
};

module.exports = { postUser };
