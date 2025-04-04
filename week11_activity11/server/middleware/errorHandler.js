// middleware/errorHandler.js

// JWT错误处理中间件
function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      message: '无效的认证令牌',
      error: err.message
    });
  }

  if (err.name === 'InsufficientScopeError') {
    return res.status(403).json({
      message: '权限不足',
      error: err.message
    });
  }

  res.status(500).json({
    message: '服务器内部错误',
    error: err.message
  });
}

module.exports = errorHandler;