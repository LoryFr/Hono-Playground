import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";
import Card from "./card";
import { getColors } from "../libraries/payload";

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

const Colors: FC = async () => {
  const colors = await getColors();
  return (
    <section className={collectionClass}>
      <h2>Colors</h2>
      <div class={"grid"}>
        {colors.docs.map((project: any) => (
          <Card
            image={project.image.url}
            title={project.title}
            href={`/posts/colors/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Colors;
