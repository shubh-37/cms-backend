var express = require("express");
var router = express.Router();

function offer(connection, Models) {
  /* GET users listing. */
  const { Offer } = Models;
  console.log({ Offer });
  router.get("/", async function (req, res) {
    const { uniqueId } = req.query;
    console.log({ uniqueId });
    const offerInstance = await Offer.findOne({ uniqueId }).populate({ path: "org", model: "Organisation" });
    res.send({ offer: offerInstance });
  });
  return router;
}

module.exports = offer;
