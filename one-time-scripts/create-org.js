const { databaseInit } = require("../app");
const randomString = require("randomstring");

async function start() {
  const { Models } = await databaseInit();
  const { Organisation } = Models;
  const orgInstance = new Organisation({
    uniqueId: randomString.generate(),
    name: "Dunder Mufflin",
    logoUrl: "https://figurecdn.com/companies/f4698cc4-14cd-46fa-b068-4b0fa7840536/logos/6945c53d5015d4c0b210518cbeaba326.jpg",
    teamPhotoUrl: "https://figurecdn.com/companies/f4698cc4-14cd-46fa-b068-4b0fa7840536/company_images/offer_letter_welcome/94848257d5b7d596b6aa98597219b3ed.jpeg",
    videoUrl: "https://www.youtube.com/watch?v=bV8i6oCgiAM&t=19s&ab_channel=TheOffice",
    newsArticles: [
        {
          name: "How the Remarkably Unremarkable World of Dunder Mifflin Was Built",
          websiteUrl: "https://www.architecturaldigest.com/story/the-office-anniversary-dunder-mifflin-set-design",
          imageUrl: "https://media.architecturaldigest.com/photos/5e724ec1f171de0008f09f2f/16:9/w_1280,c_limit/GettyImages-138446688.jpg"
        },
        {
          name: "The Office: 5 Ways Dunder Mifflin Is A Great Place To Work (& 5 Ways It's The Worst)",
          websiteUrl: "https://screenrant.com/the-office-ways-dunder-mifflin-great-place-work/",
          imageUrl: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/11/The-Office-5-Ways-Dunder-Miffin-Is-A-Great-Place-To-Work-5-Ways-Its-The-Worst.jpg"
        },
        {
          name: "Creed Thoughts",
          websiteUrl: "https://www.officequotes.net/creedThoughts.php#ct01",
          imageUrl: "https://www.officequotes.net/wp-content/uploads/2020/03/CreedThoughts-300x43.jpg"
        },
      ],
      videoCaption:
        "Dunder Mifflin Inc. is a micro-cap regional paper and office supply distributor with an emphasis on servicing small-business clients.",
      companyDesc:
        "Dunder Mifflin Incorporated provides its customers quality office and information technology products, furniture, printing values and the expertise required for making informed buying decisions. We provide our products and services with a dedication to the highest degree of integrity and quality of customer satisfaction, developing long-term professional relationships with employees that develop pride, creating a stable working environment and company spirit.",
      slideShow: [
        {
          title: "People First",
          description:
            "We provide our Customers with the highest standard of integrity and quality, to enable them to develop long-term professional relationships with our employees and staff.",
        },
        {
          title: "Quality",
          description:
            "Dunder Mifflin, Inc. is committed to providing its customers quality office and information technology products, furniture, printing values and the experience required for making informed buyer decisions.",
        },
        {
          title: "Growth",
          description:
            "We crusade to create a stable working environment and corporate spirit and to give unlimited opportunity to everyone, and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.",
        },
        {
          title: "Innovation",
          description:
            "We strive to become the company most known for changing the worldwide poor–quality image of paper products.",
        },
      ],
      website: "https://www.peacocktv.com/stream-tv/the-office",
      companyHQ: "Scranton, PA",
      companySize: "50-99",
      totalFunding: "50Cr",
      lastFundingType: "Series A",
      investors: [
        {
          investorName: "Vance Refrigeration",
          investorDesc: "",
        },
        {
          investorName: "The Michael Scott Paper Company",
          investorDesc: "",
        },
        {
          investorName: "Sabre International",
          investorDesc: "",
        },
        {
          investorName: "Athleap",
          investorDesc: "",
        },
      ],
      leadership: [
        {
          leaderName: "David Wallace",
          designation: "CEO",
        },
        {
          leaderName: "Michael Scott",
          designation: "Regional Manager",
        },
        {
          leaderName: "Jan Levinson",
          designation: "VP Sales",
        },
        {
          leaderName: "Jim Halpert",
          designation: "Sales Manager",
        },
        {
          leaderName: "Pamela Beesly",
          designation: "Head Of Communications",
        },
      ]
  });
  console.log(orgInstance)
  await orgInstance.save();
  console.log({ message: "Successfully created an Organisation"});
  process.exit(0);
}

start();