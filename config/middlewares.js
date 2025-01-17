module.exports = [
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': ["'self'","'unsafe-eval'"],
          'img-src': ["'self'", 'data:', 'blob:', 'ik.imagekit.io', 'dl.airtable.com', 'strapi-v4-4as6.onrender.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'ik.imagekit.io', 'dl.airtable.com', 'strapi-v4-4as6.onrender.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
];
