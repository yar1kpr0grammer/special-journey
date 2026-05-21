const serverless = require("serverless-http");
const app = require("../src/app");

// Экспортируем приложение как безсерверное
module.exports = serverless(app);
