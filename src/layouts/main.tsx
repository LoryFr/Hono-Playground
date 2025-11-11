import type { FC } from "hono/jsx";
import { PropsWithChildren } from "hono/jsx";
import { css, Style } from "hono/css";

interface Props {
  title?: string;
}

const globalClass = css`

  }
`;

const Layout: FC = (props: PropsWithChildren<Props>) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <Style />
      </head>
      <body class={globalClass}>{props.children}</body>
    </html>
  );
};

export default Layout;
