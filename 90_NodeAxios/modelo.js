const axios = require("axios");

const modeloDatos = {
  getData: async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

module.exports = modeloDatos;
