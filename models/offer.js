const Schema = require("mongoose").Schema;

const PerkSchema = new Schema({
  name: String,
  iconUrl:  String,
  description: String,
  amount:  Number
});

const compDiversificationSchema = {
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
  benefits: {
    type: Number,
  },
};

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
  introSection: {
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
    benefits: {
      type: Number,
    },
  },
  benfitsSection: {
    type: [PerkSchema]
  },
  compProjection: {
    compDiversification: {
      type: [compDiversificationSchema],
    },
  },
  offerStatus: {
    type: String,
  },
  rejectReason: {
    type: String,
  },
};

const modelOptions = {
  timestamps: true,
};

const OfferSection = Schema(modelProperties, modelOptions);

module.exports = OfferSection;
