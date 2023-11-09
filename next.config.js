const nextConfig = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/about-us',
          permanent: true, // This is a 301 redirect
        },
        {
          source: '/contact',
          destination: '/contact-us',
          permanent: true,
        },
        {
          source: '/old-blog/:slug*',
          destination: '/blog/:slug*',
          permanent: true,
        },
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  