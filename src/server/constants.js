const endpoints = {
  oauth: "https://staging-authentication.wallstreetdocs.com/oauth/token",
  statusReport: "https://staging-gateway.priipcloud.com/api/v2.0/gateway/reports/status/service",
};

const oauthPayload = {
  grant_type: "client_credentials",
  client_id: "coding_test",
  client_secret: "bwZm5XC6HTlr3fcdzRnD",
};

module.exports = {
  endpoints,
  oauthPayload,
};
