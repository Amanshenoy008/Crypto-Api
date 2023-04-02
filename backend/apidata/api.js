const axios = require("axios");
const { da } = require("../database/schema");

const run = async () => {
  axios
    .get("https://api.wazirx.com/api/v2/tickers")
    .then((d) => {
      let arr = [];
      for (const key in d.data) {
        //console.log(d.data[key])
        const x = d.data[key];
        arr = [...arr, x];
      }
      // console.log(arr);
      arr = arr.slice(0, 10);
      console.log(arr);

      da.insertMany(arr)
        .then((docs) => {
          console.log("document added");
        })
        .catch((error) => console.log(error));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { run };
