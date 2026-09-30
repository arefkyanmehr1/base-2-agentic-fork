function bearerHeaders(authenticated, accessToken) {
  return authenticated && accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : {};
}

module.exports = { bearerHeaders };
