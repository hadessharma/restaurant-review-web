const Restaurant = require("../Models/restaurantModel");
const User = require("../Models/userModel");

const getAllRestaurant = async (req, res) => {
  try {
    Restaurant.aggregate([
      {
        $sample: { size: 10 },
      },
    ])
      .then((randomRecords) => {
        return res
          .status(200)
          .json({ data: randomRecords, msg: "Successfull!" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(201).json({ data: "", msg: "Error!" });
      });
  } catch (error) {
    console.log(error);
    return res.status(201).json();
  }
};

const getAllUser = async (req, res) => {
  try {
    User.aggregate([
      {
        $sample: { size: 10 },
      },
    ])
      .then((randomRecords) => {
        return res
          .status(200)
          .json({ data: randomRecords, msg: "Successfull!" });
      })
      .catch((error) => {
        console.log(error);
        return res.status(201).json({ data: "", msg: "Failed!" });
      });
  } catch (error) {
    console.log(error);
    return res.status(201).json();
  }
};

module.exports = { getAllRestaurant, getAllUser };
