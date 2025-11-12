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
  return c.html(
    <Layout
      title={project.docs[0].title}
      description={project.docs[0].description}
      image={project.docs[0].image.url}
    >
      <Status date={formatDate(project.docs[0].date)}></Status>
      <img src={project.docs[0].image.url}></img>
      <Panel
        role={project.docs[0].details.role}
        company={project.docs[0].details.client}
        year={project.docs[0].details.year}
        tools={project.docs[0].details.tools}
      />
      <main
        dangerouslySetInnerHTML={{ __html: project.docs[0].content_html }}
      ></main>
    </Layout>,
  );
};

export default Page;
