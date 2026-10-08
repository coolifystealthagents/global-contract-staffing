/** @type {import('next').NextConfig} */
const nextConfig = { output: 'standalone', images: { unoptimized: true, formats: ['image/avif', 'image/webp'] } };
export default nextConfig;
