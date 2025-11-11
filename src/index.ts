import { Hono } from "hono";
import Home from "./pages";

const app = new Hono();
app.get("/", Home);

export default app;
