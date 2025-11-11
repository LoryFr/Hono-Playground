import Button from "./button";
import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

interface Props {
  image?: string;
  title?: string;
  href?: string;
}

const cardClass = css`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  border-radius: 0.75rem;
  background-color: var(--color-background-secondary);
  border: solid 0.0625rem var(--color-border-secondary);
  text-decoration: none;
  transition: 150ms ease-in-out;
  position: relative;
  overflow: clip;

  & img {
    aspect-ratio: 3/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    border: solid 0.0625rem var(--color-border-primary);
  }

  & .image {
    aspect-ratio: 3/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    border: solid 0.0625rem var(--color-border-primary);
    background-color: var(--color-background-primary);
  }

  & .filter {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top right,
      transparent 0%,
      var(--color-background-secondary) 100%
    );
    pointer-events: none;
    border-radius: 0.5rem;
    opacity: 0%;

    @media (hover: hover) {
      display: none;
    }
  }

  & button {
    position: absolute;
    margin: auto;
    pointer-events: none;
    transition: 150ms ease-out;
    inset: 0;
    z-index: 9;
    color: var(--color-text-primary);

    @media (hover: hover) {
      inset: 0;
      bottom: -25%;
      opacity: 0;
    }
  }

  @media (hover: hover) {
    &:hover button {
      bottom: 0;
      opacity: 1;
    }
  }
`;

const Card: FC = ({ image, href = "/", title, ...attrs }: Props) => {
  return (
    <a href={href} class={cardClass} aria-label={title}>
      {image ? (
        <img src={image} alt="" width={1280} height={720} />
      ) : (
        <div class={"image"}></div>
      )}
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={"1.25rem"}
          height={"1.25rem"}
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <div class={"filter"}></div>
    </a>
  );
};

export default Card;
