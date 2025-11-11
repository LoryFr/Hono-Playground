import type { FC } from "hono/jsx";
import { PropsWithChildren } from "hono/jsx";
import { css, Style } from "hono/css";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const globalClass = css`
  :-hono-global {
    :root {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Inter, sans-serif;
      font-feature-settings:
        "liga" 1,
        "calt" 1;
    }

    :root {
      --color-background-primary: oklch(98.5% 0 0);
      --color-background-secondary: oklch(96.7% 0.001 286.375);
      --color-border-primary: oklch(87.1% 0.006 286.286);
      --color-border-secondary: oklch(92% 0.004 286.32);
      --color-text-primary: oklch(21% 0.006 285.885);
      --color-text-secondary: oklch(37% 0.013 285.805);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --color-background-primary: oklch(14.1% 0.005 285.823);
        --color-background-secondary: oklch(21% 0.006 285.885);
        --color-border-primary: oklch(37% 0.013 285.805);
        --color-border-secondary: oklch(27.4% 0.006 286.033);
        --color-text-primary: oklch(98.5% 0 0);
        --color-text-secondary: oklch(70.5% 0.015 286.067);
      }
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      scrollbar-width: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      max-width: 43.25rem;
      margin: auto;
      padding: 4rem 1.5rem;
      background-color: var(--color-background-primary);
      color: var(--color-text-primary);
      display: flex;
      flex-direction: column;
      gap: 8rem;
    }

    .payload-richtext {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    @view-transition {
      navigation: auto;
    }
  }
`;

const Layout: FC = (props: PropsWithChildren<Props>) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="icon" content="/favicon.ico" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content="https://lorenzofiori.art" />
        <meta property="og:site_name" content="Lorenzo Fiori" />
        <meta property="og:image" content={props.image} />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <Style />
      </head>
      <body class={globalClass}>{props.children}</body>
    </html>
  );
};

export default Layout;
