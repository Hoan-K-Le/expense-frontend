/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const shouldRedirect = false;
    if (shouldRedirect) {
      return [
        {
          source: "/",
          destination: "/auth",
          permanent: false,
        },
      ];
    } else {
      return [];
    }
  },
};

export default nextConfig;
