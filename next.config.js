// next.config.js
const nextConfig = {
    images: {
      domains: ['i.ytimg.com','yt3.ggpht.com','th.bing.com','img.freepik.com','play-lh.googleusercontent.com'],
    },
    env:{
      NEXT_PUBLIC_API_KEY:process.env.NEXT_PUBLIC_API_KEY
    }
  };
  
  module.exports = nextConfig;
  