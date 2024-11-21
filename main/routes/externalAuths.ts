import app from "..";

export default function () {
app.get("/account/api/public/account/*/externalAuths", async (c) => {
    return c.json([]);
});

app.get("/account/api/public/account/:accountId/externalAuths", async (c) => {
    c.status(204);
    return c.json({});
});

}