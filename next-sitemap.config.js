/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mjinteriors.co.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/private/*",        // Exclude private paths
    "/!(index|)",        // Exclude all paths except the root (/)
    "/**/*",             // Exclude all subdirectories and dynamic routes
    "/blog-details",
    "/blog-grid",
    "/team",
    "/home-3",
    "/blog-list-2",
    "/testimonial",
    "/not-found",
    "/product-details",
    "/team-details",
    "/checkout",
    "/blog-list",
    "/cart",
    "/home-2",
    "/product",
 
    "/portfolio-2",
    "/portfolio-1",
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow root path
      { userAgent: "*", disallow: "/private/*" }, // Disallow private paths
      { userAgent: "*", disallow: "/blog-details" },
      { userAgent: "*", disallow: "/blog-grid" },
      { userAgent: "*", disallow: "/team" },
      { userAgent: "*", disallow: "/home-3" },
      { userAgent: "*", disallow: "/blog-list-2" },
      { userAgent: "*", disallow: "/testimonial" },
      { userAgent: "*", disallow: "/not-found" },
      { userAgent: "*", disallow: "/product-details" },
      { userAgent: "*", disallow: "/team-details" },
      { userAgent: "*", disallow: "/checkout" },
      { userAgent: "*", disallow: "/blog-list" },
      { userAgent: "*", disallow: "/cart" },
      { userAgent: "*", disallow: "/home-2" },
      { userAgent: "*", disallow: "/product" },
    
         { userAgent: "*", disallow: "/portfolio-2" },
           { userAgent: "*", disallow: "/portfolio-1" }
    ],
    additionalSitemaps: [
      "https://mjinteriors.co.in/sitemap.xml" // Ensure the sitemap is referenced
    ]
  },
};