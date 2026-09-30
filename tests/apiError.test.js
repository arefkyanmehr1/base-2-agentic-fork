const test = require('node:test');
const assert = require('node:assert/strict');
const { apiErrorMessage } = require('../src/api/apiError');
const { bearerHeaders } = require('../src/api/requestAuth');

test('401 without a server message explains what to verify', () => {
  assert.match(apiErrorMessage(401), /401/);
  assert.match(apiErrorMessage(401), /نشانی API/);
});

test('server error message takes precedence', () => {
  assert.equal(apiErrorMessage(401, 'دسترسی رد شد'), 'دسترسی رد شد');
});

test('unauthenticated login never sends a stored bearer token', () => {
  assert.deepEqual(bearerHeaders(false, 'stale-token'), {});
});

test('authenticated API calls use their access token', () => {
  assert.deepEqual(bearerHeaders(true, 'valid-token'), { Authorization: 'Bearer valid-token' });
});
