/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
      ignoreBuildErrors: true,
    },
    productionBrowserSourceMaps: true, // This line remains if you still want to enable source maps
  };
  
  export default nextConfig;
  