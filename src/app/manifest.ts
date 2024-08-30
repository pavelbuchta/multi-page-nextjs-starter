import { COMPANY_NAME, METADATA_DESCRIPTION, METADATA_TITLE } from "@/config";
import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: METADATA_TITLE,
    short_name: COMPANY_NAME,
    description: METADATA_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
