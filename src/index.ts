import { Hono } from "hono";
import Home from "./pages";
import Project from "./pages/project";
import Color from "./pages/color";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.get("/", Home);
app.get("/posts/projects/:slug", Project);
app.get("/posts/colors/:slug", Color);
app.use("/static/*", serveStatic({ root: "./" }));

export default app;
