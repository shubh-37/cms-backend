const Schema = require("mongoose").Schema;

const modelProperties = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email ID!",
    ],
    unique: [true, "This email already exists"],
  },
  mobileNo: {
    type: String,
    required: [true, "Please provide a phone number"],
    unique: [true, "This phone number already exists"],
    trim: true,
    default: "",
    match: [/^\+?\d+[\d\s]+$/, "Please fill a valid telephone number"],
  },
  countryCode: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
};


const modelOptions = {
    timestamps: true
}

const Employee = Schema(modelProperties, modelOptions);

module.exports = Employee;