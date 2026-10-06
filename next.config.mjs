/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // The site is now one scrolling page; old page URLs jump to their section
  async redirects() {
    return [
      { source: "/resume", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // Game builds are requested with ?v=<build id>, so they can be cached for a long time.
        source: "/games/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // The page that loads each game must always be fresh so it points at the latest build.
        // Later rules override earlier ones for the same header.
        source: "/games/:slug/index.html",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
