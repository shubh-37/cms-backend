const Schema = require("mongoose").Schema;

const PerkSchema = new Schema({
  name: String,
  description: String,
  amount: Number,
});

const CompanyslideshowSchema = {
  title: {
    type: String,
  },
  description: {
    type: String,
  },
};
const InvestorSchema = {
  investorName: {
    type: String,
  },
  investorDesc: {
    type: String,
  },
};

const LeadershipSchema = {
  leaderName: {
    type: String,
  },
  designation: {
    type: String,
  },
};

const NewsArticleSchema = new Schema({
  name: String,
  imageUrl: String,
  websiteUrl: String,
});

const modelProperties = {
  logoUrl: {
    type: String,
  },
  teamPhotoUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  newsArticles: {
    type: [NewsArticleSchema],
  },
  videoCaption: {
    type: String,
  },
  companyDesc: {
    type: String,
  },
  slideShow: {
    type: [CompanyslideshowSchema],
  },
  totalFunding: {
    type: String,
  },
  lastFundingType: {
    type: String,
  },
  investors: {
    type: [InvestorSchema],
  },
  leadership: {
    type: [LeadershipSchema],
  },
  perks: {
    type: [PerkSchema],
  },
};

const modelOptions = {
  timeStamps: true,
};

const CompanyDetail = Schema(modelProperties, modelOptions);

module.exports = CompanyDetail;
