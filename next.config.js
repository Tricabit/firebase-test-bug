module.exports = {
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    concurrentFeatures: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
