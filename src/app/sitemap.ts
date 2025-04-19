import { MetadataRoute } from "next";

/**
 * Generates a sitemap for the website
 * Next.js will automatically serve this at /sitemap.xml
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://herbalist.com"; // Replace with your actual domain when deployed
  const lastModified = new Date();

  // Define all routes in the site
  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Add more pages as they're created
  ];
}
