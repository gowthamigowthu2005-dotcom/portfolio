/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: isProd,
  },
};

module.exports = nextConfig;
