import Layout from "../layouts/post";
import type { Context } from "hono";
import { getColor } from "../libraries/payload";
import Status from "../components/status";

function formatDate(raw: string) {
  const date = new Date(raw);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const Page = async (c: Context) => {
  const { slug } = c.req.param();
  const color = await getColor(slug);
  return c.render(
    <Layout
      title={"Lorenzo Fiori - Digital Product Designer"}
      description={
        "I'm a designer & frontend engineer. I craft user-centered digital products that are clean, intuitive, and engaging. With a strong focus on detail and performance, I turn ideas into seamless, scalable interfaces."
      }
    >
      <Status date={formatDate(color.docs[0].date)}></Status>
      <div
        dangerouslySetInnerHTML={{ __html: color.docs[0].content_html }}
      ></div>
    </Layout>,
  );
};

export default Page;
