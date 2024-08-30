import { MetadataRoute } from "next";

// Adapt this as necessary
const pathnames: MetadataRoute.Sitemap = [{ url: "/", priority: 1 }];
const baseChangeFrequency = "monthly";
const basePriority = 1;

export default function sitemap(): MetadataRoute.Sitemap {
  return pathnames.map((item) => ({
    url: item.url,
    lastModified: new Date(),
    changeFrequency: item?.changeFrequency ?? baseChangeFrequency,
    priority: item?.priority ?? basePriority,
  }));
}
