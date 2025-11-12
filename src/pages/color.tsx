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
  return c.html(
    <Layout
      title={color.docs[0].title}
      description={color.docs[0].description}
      image={color.docs[0].image.url}
    >
      <Status date={formatDate(color.docs[0].date)}></Status>
      <div
        dangerouslySetInnerHTML={{ __html: color.docs[0].content_html }}
      ></div>
    </Layout>,
  );
};

export default Page;
