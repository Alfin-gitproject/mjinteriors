/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mjinteriors.co.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/private/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};