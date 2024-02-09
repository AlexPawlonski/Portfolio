/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers() {
    return [
      {
        source: "/public/photopro.webp",

        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
