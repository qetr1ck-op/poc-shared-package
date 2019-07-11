const { paths } = require("./utils");

const output = {
  path: paths.dist,
  filename: "[name].js",
  libraryTarget: "umd"
};

module.exports = { output };
