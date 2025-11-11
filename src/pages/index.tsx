import Layout from "../layouts/main";
import type { Context } from "hono";
import Header from "../components/header";
import Projects from "../components/projects";
import Colors from "../components/colors";

const Page = (c: Context) => {
  return c.render(
    <Layout title={"Lorenzo Fiori"}>
      <Header></Header>
      <Projects></Projects>
      <Colors></Colors>
    </Layout>,
  );
};

export default Page;
