/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    remotePatterns:[{
        protocol: "https",
        hostname: "**.googleusercontent.com"
  }],
},
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }
    return config
  }
}
module.exports = nextConfig
