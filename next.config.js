/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  env: {
    server: 'https://jsonplaceholder.typicode.com',
  }
}

