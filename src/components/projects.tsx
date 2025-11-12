import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";
import Card from "./card";
import { getProjects } from "../libraries/payload";

const collectionClass = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & h2 {
    color: var(--color-text-primary);
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
  }

  & .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    @media (width < 1024px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  & .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Projects: FC = async () => {
  const projects = await getProjects();
  return (
    <main className={collectionClass}>
      <h2>Projects</h2>
      <div class={"grid"}>
        {projects.docs.map((project: any) => (
          <Card
            image={project.image.url}
            title={project.title}
            href={`/posts/projects/${project.slug}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
