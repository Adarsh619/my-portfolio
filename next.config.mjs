/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',          // static export: works on Netlify and GitHub Pages
  basePath,                  // e.g. '/my-portfolio' for GitHub project pages
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
