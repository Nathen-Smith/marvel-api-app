/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://nathen-smith.github.io/marvel-api-app" : "",
  nextConfig,
  basePath: "/marvel-api-app",
  images: {
    loader: "akamai",
    path: "",
    domains: ["http://i.annihil.us/u/prod/marvel/i/mg"],
  },
};
