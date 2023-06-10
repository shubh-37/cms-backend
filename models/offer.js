const Schema = require("mongoose").Schema;

const modelProperties = {
  uniqueId: {
    type: String,
    unique: true,
    index: true,
  },
  org: {
    type: Schema.Types.ObjectId,
    ref: "Organisation",
  },
  candidateName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobLocation: {
    type: String,
  },
  jobExpiryDate: {
    type: Date,
  },
  currency: {
    type: String,
    default: "INR",
  },
  baseSalary: {
    type: Number,
  },
  signingBonus: {
    type: Number,
  },
  noOfShares: {
    type: Number,
  },
  targetBonus: {
    type: Number,
  },
  // benefits: {
  //   type: [Schema.Types.ObjectId],
  // },
};

const modelOptions = {
  timestamps: true,
};

const OfferSection = Schema(modelProperties, modelOptions);

module.exports = OfferSection;
