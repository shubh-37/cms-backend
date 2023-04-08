var express = require("express");
var router = express.Router();

function offer(Models) {
  /* GET users listing. */
  const { Offer } = Models;
  console.log(Models);
  router.get("/", async function (req, res) {
    const { uniqueId } = req.query;
    console.log({ uniqueId });
    const offerInstance = await Offer.findOne({ uniqueId }).populate({ path: "org", model: "Organisation" });
    res.send({ offer: offerInstance });
  });
  router.post("/create", async function (req, res){
    const data = req.body;
    try {
      const emp = await Offer.create({ data });
      res.status(201).json( { emp }); 
    } catch (error) {
      res.status(400).json({ error });
    }
  })
  return router;
}

module.exports = offer;
