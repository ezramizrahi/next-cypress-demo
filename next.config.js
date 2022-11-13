/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "serverless",
  target: "experimental-serverless-trace",
}

module.exports = nextConfig
