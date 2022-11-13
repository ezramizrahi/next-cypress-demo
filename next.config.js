/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Target must be serverless
  // for netlify server-side rendering
  target: "serverless",
}

module.exports = nextConfig
