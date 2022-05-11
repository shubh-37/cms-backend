const Schema = require('mongoose').Schema;


const NewsArticleSchema = new Schema({
    name: String,
    imageUrl: String,
    websiteUrl: String
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

const modelProperties = {
    name: {
        type: String,
        required :true
    },
    logoUrl: {
        type: String,
    },
    teamPhotoUrl: {
        type:String
    },
    videoUrl: {
        type: String
    },
    newsArticles: {
        type: [NewsArticleSchema]
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
      website: {
        type: String,
      },
      companyHQ: {
        type: String,
      },
      companySize: {
        type: String,
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
      

};

const modelOptions = {
    timestamps: true
  };
  
const Organisation = Schema(modelProperties, modelOptions);

module.exports = Organisation;
