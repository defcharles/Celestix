import { Hono } from "hono";
import path from "node:path";
import { cors } from "hono/cors";
import { loadRoutes } from "./utils/startup/loadRoutes";

const app = new Hono({ strict: false });

export default app;

app.use("*", cors());



Bun.serve({
  port: 3551,
  fetch: app.fetch,
});

app.use(async (c, next) => {
  if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico") await next();
  else {
    await next();

    console.log(`${c.req.path} | ${c.req.method} | Status ${c.res.status}`);
  }
});

await loadRoutes(path.join(__dirname, "routes"), app);

console.log("Celestix started on port 3551");