import app from "..";



export default function () {
app.get("/fortnite/api/game/v2/enabled_features", async (c) => {
    return c.json({});
});

app.get("/account/api/public/account/*/externalAuths", async (c) => {
    return c.json([]);
});

app.get("/account/api/public/account/:accountId/externalAuths", async (c) => {
    c.status(204);
    return c.json({});
});


app.post("/fortnite/api/game/v2/grant_access/*", async (c) => {
    c.json({});
    return c.status(204);
});

app.post("/api/v1/user/setting", async (c) => {
    return c.json({});
});

app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (c) => {
    c.header("Content-Type", "text/plain");
    return c.text("true");
});

app.post("/datarouter/api/v1/public/data", async (c) => {
    return c.json([])
});


}