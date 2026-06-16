import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://www.lendsmartmortgages.com.au";

export function getSiteBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}

export const siteMetadataBase = new URL(`${getSiteBaseUrl()}/`);

export function pageMetadata(
  title: string,
  description: string,
  pathname: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname.startsWith("/") ? pathname : `/${pathname}`,
    },
  };
}
