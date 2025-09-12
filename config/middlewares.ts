export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: false, // Disable CSP for Strapi Admin
    },
  },
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: "*", // Allow all origins for now
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
