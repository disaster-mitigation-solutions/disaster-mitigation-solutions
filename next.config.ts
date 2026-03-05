const withBundleAnalyzer = require('@next/bundle-analyzer')({
 enabled: process.env.ANALYZE === 'true',
});

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 /* config options here */

 // Optional: Change the output directory `out` -> `dist`
 distDir: './dist',

 //basePath: "",
 typescript: {
  ignoreBuildErrors: true,
 },
 eslint: {
  ignoreDuringBuilds: true,
 },
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'placehold.co',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'images.unsplash.com',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'picsum.photos',
    port: '',
    pathname: '/**',
   },
  ],
 },
 webpack: (
  config,
  { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
) => {
  // Important: return the modified config
  if (isServer) {
    config.externals.push('@genkit-ai/google-genai');
    config.externals.push('genkit');
  }
  return config
},
};

export default withBundleAnalyzer(nextConfig);
