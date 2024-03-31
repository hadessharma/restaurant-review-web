const Restaurant = require("../Models/restaurantModel");

const getAll = async (req, res) => {
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

module.exports = { getAll };
