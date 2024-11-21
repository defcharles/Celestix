import app from "..";



export default function () {
app.get("/fortnite/api/game/v2/enabled_features", async (c) => {
    return c.json({});
});
}