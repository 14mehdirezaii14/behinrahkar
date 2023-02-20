/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    server: 'https://jsonplaceholder.typicode.com',
  }
}

