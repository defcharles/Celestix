
import app from "..";

export default function () {
app.post("/fortnite/api/game/v2/grant_access/*", async (c) => {
    c.json({});
    return c.status(204);
});
}