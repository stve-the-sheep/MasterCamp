const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.football-data.org/v4",
      changeOrigin: true,
      headers: {
        "X-Auth-Token":
          "b5e3131ee1401ec54fe79909dfbe13db10496ae7f2393655a76e0a475ad04bbc",
      },
    })
  );
};
