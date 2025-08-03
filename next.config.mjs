/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false, // Add this line to reduce warnings
    experimental: {
        serverActions: false // if you are not using them
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    }
};

export default nextConfig;
