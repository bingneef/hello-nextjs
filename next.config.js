const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");

module.exports = withCSS({ cssMOdules: true })(withTypescript());
