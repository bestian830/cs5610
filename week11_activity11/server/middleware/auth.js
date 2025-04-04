// middleware/auth.js
const { auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

// 创建JWT检查中间件
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});

module.exports = { checkJwt };