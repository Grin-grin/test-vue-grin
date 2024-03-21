const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: '/test-vue-grin.github.io/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});
