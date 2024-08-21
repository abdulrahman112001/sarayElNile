/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // output: "export", // متفعلهاش سيبها كدا

    images: {
        unoptimized: true,
    },
};
export default nextConfig;