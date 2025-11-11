import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

const footerClass = css`
  & p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 500;
    text-align: center;
  }
`;

const Footer: FC = () => {
  return (
    <footer className={footerClass}>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
