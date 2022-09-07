/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return {
      afterFiles: [
        {
          source: "/:any*",
          destination: "/",
        },
      ],
    };
  },
};

module.exports = nextConfig;
