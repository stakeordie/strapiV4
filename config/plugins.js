module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
        url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: env('MAILGUN_FROM_ADDRESS'),
        defaultReplyTo: env('MAILGUN_REPLYTO_ADDRESS'),
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
      providerOptions: {
        publicKey: env('IMAGEKET_PUBLIC_KEY'),
        privateKey:env('IMAGEKIT_PRIVATE_KEY'),
        urlEndpoint: env('IMAGEKIT_URL_ENDPOINT'),  // Example: https://ik.imagekit.io/username
        // Optional
        params: {
          folder: env('IMAGEKIT_FOLDER_LOCATION')  // Defaults to "/" if value is not supplied
        }
      }
    }
  },
  'website-builder': {
    enabled: true,
    config: {
      url: 'https://api.render.com/deploy/srv-cf8phd02i3mmd0lnufe0?key=2yDJhj-MKX8',
      trigger: {
        type: 'manual',
      },
    }
  },
  'custom-api': {
    enabled: true
  },
  'import-export-entries': {
    enabled: true,
  },
});
