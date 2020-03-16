module.exports = {
  pwa: {
    themeColor: "#8000ba",
    name: "PhoenixWare",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  },
  transpileDependencies: ["vuetify"],
  lintOnSave: process.env.NODE_ENV !== "production"
};
