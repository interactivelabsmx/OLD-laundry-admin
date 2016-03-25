
// Logout
exports.logout = {
  auth: 'facebook',
  handler(request, reply) {
    request.cookieAuth.clear();
    return reply.redirect('/');
  },
};

// Third party authentication
exports.login = {
  auth: 'facebook',
  handler(request, reply) {
    if (!request.auth.isAuthenticated) {
      return reply(`Authentication failed due to: ${request.auth.error.message}`);
    }
    return reply.redirect('/main');
  },
};
