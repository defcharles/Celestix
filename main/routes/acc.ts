import app from "..";

export default function () {
  app.post("/account/api/oauth/token", async (c) => {
  
    return c.json({
      access_token: "065981d58ba642e7ac6ef7d6c4ed15b2",
      expires_in: 7200,
      expires_at: "9999-12-02T01:12:01.100Z",
      token_type: "bearer",
      refresh_token: "4f665dd625f146bf8d6a57f8af327aaf",
      refresh_expires: 28800,
      refresh_expires_at: "9999-12-02T01:12:01.100Z",
      account_id: "94b1569506b04f9f8557af611e8c5e47",
      client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
      internal_client: true,
      client_service: "fortnite",
      displayName: "Celestix",
      app: "fortnite",
      in_app_id: "94b1569506b04f9f8557af611e8c5e47",
      device_id: "deviceId",
    });
  });

  app.get("/account/api/oauth/verify", async (c) => {
    c.json({
   token: "***",
  session_id: "9a1f5e80b47d2c3e6f8a0dc592b4fe7d",
  token_type: "bearer",
  client_id: "34a02cf8f4414e29b15921876da36f9a",
  internal_client: true,
  client_service: "fortnite",
  account_id: "94b1569506b04f9f8557af611e8c5e47",
  expires_in: 16462,
  expires_at: "9999-12-02T01:12:01.100Z",
  auth_method: "exchange_code",
  display_name: "Celestix",
  app: "fortnite",
  device_id: "deviceId",
    });
  });


  app.get("/account/api/public/account/:accountId", async (c) => {
    let accountId = c.req.param("accountId");
    return c.json({
      id: "94b1569506b04f9f8557af611e8c5e47",
    displayName: "Celestix",
    email: "Celestix@Celestix.com",
    failedLoginAttempts: 0,
    lastLogin: "2023-05-02T16:51:59.221Z",
    headless: false,
    company: "Celestix dev",
    preferredLanguage: "de",
    lastDisplayNameChange: "2022-09-10T08:07:47.361Z",
    canUpdateDisplayName: true,
    tfaEnabled: true,
    emailVerified: true,
    minorVerified: false,
    minorExpected: false,
    minorStatus: "NOT_MINOR",
    cabinedMode: false,
    hasHashedEmail: false
    });
  });

  app.delete("/account/api/oauth/sessions/kill/*", async (c) => {
    c.status(204);
    return c.json({});
  });

  app.get("/account/api/public/account", async (c) => {
    const response = [];
    return c.json(response);
  });
}