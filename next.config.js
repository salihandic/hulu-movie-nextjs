/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['upload.wikimedia.org', 'image.tmdb.org'],
  },
}