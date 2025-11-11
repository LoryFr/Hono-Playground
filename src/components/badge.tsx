import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";
import { PropsWithChildren } from "hono/jsx";

interface Props {
  href: string;
}

const badgeClass = css`
  text-decoration: none;
  height: 2.25rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 1rem;
  border-radius: 2.25rem;
  background-color: var(--color-background-secondary);
  border: solid 0.0625rem var(--color-border-secondary);
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 1rem;
  line-height: 100%;
  transition: 150ms ease-in-out;
  white-space: nowrap;
`;

const Badge: FC = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <a href={href} className={badgeClass}>
      {children}
    </a>
  );
};

export default Badge;
