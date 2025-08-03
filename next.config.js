/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false, // Add this line to reduce warnings
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
