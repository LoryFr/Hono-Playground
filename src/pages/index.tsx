import Layout from "../layouts/main";
import type { Context } from "hono";
import Header from "../components/header";
import Projects from "../components/projects";
import Colors from "../components/colors";

const Page = (c: Context) => {
  return c.render(
    <Layout
      title={"Lorenzo Fiori - Digital Product Designer"}
      description={
        "I'm a designer & frontend engineer. I craft user-centered digital products that are clean, intuitive, and engaging. With a strong focus on detail and performance, I turn ideas into seamless, scalable interfaces."
      }
      image="/opengraph-image.jpg"
    >
      <Header></Header>
      <Projects></Projects>
      <Colors></Colors>
    </Layout>,
  );
};

export default Page;
