/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  image:{
    domains:['cdn.sanity.io']
  }
};

export default config;
