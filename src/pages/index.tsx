import Layout from "../layouts/main";
import type { Context } from "hono";
import { getProjects } from "../libraries/payload";

const Page = async (c: Context) => {
  const projects = await getProjects();
  return c.render(
    <Layout title={"Lorenzo Fiori"}>
      {projects.docs.map((project: any, index: number) => (
        <h1 key={index}>{project.slug}</h1>
      ))}
    </Layout>,
  );
};

export default Page;
