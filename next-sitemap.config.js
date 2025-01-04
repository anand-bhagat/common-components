/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://common-components.anandbhagat.com',
  generateRobotsTxt: true,   // Generates robots.txt
  generateIndexSitemap: true, // Optional: disable if needed
  outDir: 'out', // Required for `output: 'export'`
};
