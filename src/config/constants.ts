import { METADATA_BASE } from ".";

const constants = {
  credit: {
    websiteDomainName: "exponedesign.com",
    websiteUrl: `https://exponedesign.com`,
    agencyName: "Expone Design",
    creatorName: "Pavel Buchta",
  },
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : METADATA_BASE,
};

export default constants;
