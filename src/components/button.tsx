import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";
import { PropsWithChildren } from "hono/jsx";

const buttonClass = css`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-secondary);
  border: solid 0.0625rem var(--color-border-secondary);
`;

const Button: FC = ({ children }: PropsWithChildren) => {
  return (
    <button aria-hidden class={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
