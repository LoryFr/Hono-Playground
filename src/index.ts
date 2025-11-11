import { Hono } from "hono";
import Home from "./pages";
import Project from "./pages/project";
import Color from "./pages/color";

const app = new Hono();
app.get("/", Home);
app.get("/posts/projects/:slug", Project);
app.get("/posts/colors/:slug", Color);

export default app;
