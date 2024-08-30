import {
  COMPANY_CATEGORY,
  COMPANY_NAME,
  METADATA_BASE,
  METADATA_DESCRIPTION,
  METADATA_KEYWORDS,
  METADATA_TITLE,
} from "@/config";
import constants from "@/config/constants";
import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  keywords: METADATA_KEYWORDS,
  metadataBase: new URL(METADATA_BASE),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "cs-CZ": "/cs",
    },
  },
  generator: "Next.js",
  applicationName: COMPANY_NAME,
  referrer: "origin-when-cross-origin",
  authors: [
    { name: constants.credit.creatorName },
    {
      name: constants.credit.agencyName,
      url: constants.credit.websiteUrl,
    },
  ],
  creator: constants.credit.creatorName + ` (${constants.credit.agencyName})`,
  publisher: constants.credit.agencyName,
  manifest: constants.baseUrl + "/manifest.webmanifest",
  category: COMPANY_CATEGORY,
  openGraph: {
    url: constants.baseUrl + "/opengraph-image",
    type: "website",
  },
} satisfies Metadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={clsx(
          "m-0 bg-background p-0 font-sans text-foreground antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
