const Schema = require("mongoose").Schema;

const modelProperties = {
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true
  },
  companyHQ: {
    type: String,
  },
  companySize: {
    type: String,
  },
};

const modelOptions = {
  timestamps: true,
};

const Organisation = Schema(modelProperties, modelOptions);

module.exports = Organisation;
