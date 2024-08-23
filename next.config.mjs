/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Set to `true` to enable React's strict mode during development
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during production builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during production builds
  },
  // Set to `true` if you want to use `next export` for static site generation
  // For most applications, this should be omitted or set to `false` unless you have a specific use case
  output: "export",

  images: {
    unoptimized: true, // Set to `false` if you want Next.js's built-in image optimization
  },
};

export default nextConfig;
