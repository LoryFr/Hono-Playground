import Badge from "./badge";
import Avatar from "./avatar";
import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

const headerClass = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 3rem;

  & h1 {
    color: var(--color-text-primary);
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 150%;
  }

  & p {
    color: var(--color-text-secondary);
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    animation-delay: 0.1s;

    & span {
      color: var(--color-text-primary);
      font-weight: 500;
    }
  }

  & .group {
    margin-top: 0.75rem;
    display: flex;
    gap: 0.75rem;
    animation-delay: 0.2s;
    width: 100%;
    overflow-x: auto;
  }
`;

export default function Header() {
  return (
    <header class={headerClass}>
      <Avatar></Avatar>
      <h1>Hey, I'm Lorenzo</h1>
      <p>
        I'm a designer & frontend engineer. I craft user-centered digital
        products that are <span>clean, intuitive, and engaging</span>. With a
        strong focus on detail and performance, I turn ideas into seamless,
        scalable interfaces.
      </p>
      <div class={"group"}>
        <Badge href="mailto:info@lorenzofiori.art">
          info@lorenzofiori.art
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="1.25rem"
            height="1.25rem"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Badge>
      </div>
    </header>
  );
}
