// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;



// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true, // if you want trailing slashes in your URLs
  // ... rest of config
}

export default nextConfig