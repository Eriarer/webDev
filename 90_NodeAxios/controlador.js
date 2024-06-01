const modelDatos = require("./modelo");

const ctrlDatos = {
  findDatos: async (req, res) => {
    let data = await modelDatos.getData();
    console.log("Abraham Melgoza de la Torre");
    console.log(data);
    data = data.data;
    console.log("Abraham Melgoza de la Torre");
    data.forEach((data) => {
      console.log("ID:", data.id);
      console.log("   Nombre:", data.name);
      console.log("   Ciudad:", data.address.city);
      console.log("   Lat:", data.address.geo.lat);
      console.log("   Long:", data.address.geo.lng);
      console.log("   Company:", data.company.name);
    });
    console.log("Abraham Melgoza de la Torre");
    res.json(data);
  },
};

module.exports = ctrlDatos;
