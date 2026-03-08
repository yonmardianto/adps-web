/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://www.google.com",
        "https://www.gstatic.com",
        "https://recaptcha.google.com",
        "https://www.google.com/recaptcha/api/siteverify",
      ],
    },
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' https://www.google.com https://www.gstatic.com 'unsafe-inline' 'unsafe-eval'; frame-src 'self' https://www.google.com https://recaptcha.google.com; connect-src 'self' https://www.google.com https://www.gstatic.com https://recaptcha.google.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
