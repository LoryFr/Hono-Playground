import Layout from "./main";
import type { FC } from "hono/jsx";
import { PropsWithChildren } from "hono/jsx";
import { css } from "hono/css";
import Footer from "../components/footer";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const postClass = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 150%;
    color: var(--color-text-primary);
    margin-bottom: -2.5rem;
  }

  & p {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    color: var(--color-text-secondary);
    hyphens: auto;

    & strong {
      font-weight: 500;
      color: var(--color-text-primary);
    }

    & em {
      font-weight: 400;
      color: var(--color-text-primary);
    }
  }

  & a {
    color: inherit;
  }

  & p:has(+ p) {
    margin-bottom: -2.5rem;
  }

  & p:has(+ p picture) {
    margin-bottom: inherit;
  }

  & picture,
  video,
  iframe {
    border-radius: 0.75rem;
    padding: 0.25rem;
    background-color: var(--color-background-secondary);
    border: solid 0.0625rem var(--color-border-secondary);
    display: flex;
    width: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    border: solid 0.0625rem var(--color-border-secondary);
    padding: 0.25rem;
    background-color: var(--color-background-secondary);
    position: relative;
    outline: solid 0.0625rem var(--color-border-primary);
    outline-offset: -0.3125rem;
  }

  & hr {
    border: none;
    height: 0.0625rem;
    background-color: var(--color-border-secondary);
  }
`;

const Post: FC = (props: PropsWithChildren<Props>) => {
  return (
    <Layout title={props.title}>
      <article class={postClass}>{props.children}</article>
      <Footer></Footer>
    </Layout>
  );
};

export default Post;
