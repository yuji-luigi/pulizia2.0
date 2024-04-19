/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  // rewrites() {
  //   return [
  //     {
  //       source: "/admin/:path",
  //       destination: "/src/app/admin",
  //     },
  //   ];
  // },
};

export default nextConfig;
