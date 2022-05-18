const { databaseInit } = require("../app");
const randomString = require("randomstring");

async function start() {
  const { Models } = await databaseInit();
  const { Offer } = Models;
  const offerInstance = new Offer({
    uniqueId: randomString.generate(7),
    org: "628526e3aa63951ca3301f28",
    introSection: {
      candidateName: "Shubh Arya",
      jobTitle: "Senior Developer",
      jobLocation: "Bengaluru",
      jobExpiryDate: new Date("2015-03-25T12:00:00Z").toISOString(),
      curreny: "Dollars",
      baseSalary: 100000,
      signingBonus: 10000,
      noOfShares: 100000,
      targetBonus: 10,
      benefits: 20400,
    },
    benefitsSection: [
        {
          name: "Medical",
          iconUrl: "https://i.ibb.co/WH9tmpy/svgviewer-png-output.png",
          description: "We cover 100% of the insurance cost for you and 50% for your dependents.",
          amount: 6000,
        },
        {
          name: "Dentist",
          iconUrl: "https://i.ibb.co/Z60mKtK/svgviewer-png-output-2.png",
          description: "We cover 100% of the insurance cost for you and 50% for your dependents.",
          amount: 400,
        },
        {
          name: "Vision",
          iconUrl: "https://i.ibb.co/hDkHmKq/svgviewer-png-output-3.png",
          description: "We cover 100% of the insurance cost for you and 50% for your dependents.",
          amount: 400,
        },
        {
          name: "Free Lunch",
          iconUrl: "https://i.ibb.co/M5B63bz/svgviewer-png-output-4.png",
          description: "We offer daily lunches and snacks in the office.",
          amount: 3500,
        },
        {
          name: "Unlimited PTO",
          iconUrl: "https://i.ibb.co/xmrMVKT/svgviewer-png-output-5.png",
          description: "Dunder Mifflin offers unlimited vacation. Feel free to take the time off you need.",
          amount: null,
        },
        {
          name: "401K",
          iconUrl: "https://i.ibb.co/vVSZghF/svgviewer-png-output-6.png",
          description:
            "We offer 401k matching with our partner Human Interest and will match up to 4% of your base salary.",
          amount: 10000,
        },
        {
          name: "Dog Friendly Office",
          iconUrl: "https://i.ibb.co/XWwtvv3/svgviewer-png-output-7.png",
          description:
            "We love our office dogs! Bring your fur baby to work and join our group of office dogs at Dunder Mifflin!",
          amount: null,
        },
        {
          name: "Free Paper",
          iconUrl: "https://i.ibb.co/88brWqS/svgviewer-png-output-8.png",
          description:
            "As an employee at Dunder Mifflin, you'll never have to worry about buying paper for your printer ever again - it's all on us!",
          amount: 100,
        },
      ],
    compProjection: {
      baseSalary: 100000,
      signingBonus: 10000,
      noOfShares: 100000,
      targetBonus: 10,
      benefits: 20400,
    }
  });
  
  console.log(offerInstance);
  await offerInstance.save();
  console.log({ message: "Successfully created offer" });
  process.exit(0);
}

start();
