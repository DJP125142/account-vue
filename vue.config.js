const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/v1": {
        // target: "http://sso.djp.org.cn",
        target: "http://127.0.0.1:8023",
        changeOrigin: true,
        pathRewrite: { "^/v1": "" } //路径改写
      }
    }
  }
});
