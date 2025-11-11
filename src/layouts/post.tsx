import Layout from "./main";
import type { FC } from "hono/jsx";
import { PropsWithChildren } from "hono/jsx";
import { css, Style } from "hono/css";

interface Props {
  title?: string;
}

const Post: FC = (props: PropsWithChildren<Props>) => {
  return <Layout title={props.title}></Layout>;
};

export default Post;
