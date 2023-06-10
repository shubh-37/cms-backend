var express = require("express");
var router = express.Router();

function offer(connection, Models) {
  /* GET users listing. */
  const { Offer } = Models;
  router.get("/", async function (req, res) {
    const { uniqueId } = req.query;
    const offerInstance = await Offer.findOne({ uniqueId }).populate({ path: "org", model: "Organisation" });
    res.send({ offer: offerInstance });
  });
  router.post("/create", async function (req, res) {
    try {
      const data = req.body;
      const emp = await Offer.create(data);
      console.log(emp)
      res.status(201).json({ emp, message: "Offer created" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  return router;
}

module.exports = offer;
