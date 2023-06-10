var express = require("express");
var router = express.Router();

function orgInfo(connection, Models) {
  const { CompanyDetail } = Models;
  router.route("/").post(async function (req, res){
    try {
        const data = req.body;
        const response = CompanyDetail.create(data);
        if(response){
            res.status(201).json({response, message: "Details stored successfully"})
        }else{
            res.status(400).json({message: "something's wrong!"})
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  }).put(async function(req, res){
    try {
        const orgId = req.params;
        const data = req.body;
        const response = CompanyDetail.findOneAndUpdate(orgId, data, {
            new: true
          });
        if(response){
            res.status(200).json({response, message: "Company details updated successfully"});
        }else{
            res.status(404).json({message: "Organisation not found"});
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  })
  return router;
}

module.exports = orgInfo;
