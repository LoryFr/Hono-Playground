import Layout from "../layouts/post";
import type { Context } from "hono";
import { getProject } from "../libraries/payload";
import Panel from "../components/panel";
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
  const project = await getProject(slug);
  return c.render(
    <Layout
      title={"Lorenzo Fiori - Digital Product Designer"}
      description={
        "I'm a designer & frontend engineer. I craft user-centered digital products that are clean, intuitive, and engaging. With a strong focus on detail and performance, I turn ideas into seamless, scalable interfaces."
      }
    >
      <Status date={formatDate(project.docs[0].date)}></Status>
      <img src={project.docs[0].image.url}></img>
      <Panel
        role={project.docs[0].details.role}
        company={project.docs[0].details.client}
        year={project.docs[0].details.year}
        tools={project.docs[0].details.tools}
      />
      <div
        dangerouslySetInnerHTML={{ __html: project.docs[0].content_html }}
      ></div>
    </Layout>,
  );
};

export default Page;
