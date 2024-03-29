const developmentConfig = require("./dev.env");
const {merge} = require("webpack-merge");

module.exports = merge(developmentConfig, {
    ENV: "'test'",
    PRODUCTION: true,
    API_BASE_URL: "'https://fullstack-test-navy.vercel.app/api/'"
});
