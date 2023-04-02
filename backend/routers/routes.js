const router = require("express").Router();
const { da } = require("../database/schema");

router.get("/", (req, res, next) => {
  try {
    da.find({})
      .then((data) => {
        //  console.log(data)
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
