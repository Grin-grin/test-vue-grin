const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: '/' + process.env.CI_PROJECT_NAME + '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});
