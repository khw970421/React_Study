const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://bigdata.gwangju.go.kr/gjAPI/trafficCard",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
