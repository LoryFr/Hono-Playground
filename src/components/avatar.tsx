import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

const avatarClass = css`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const Avatar: FC = () => {
  return (
    <img
      src="https://lorenzofiori.art/avatar.jpg"
      alt=""
      width={128}
      height={128}
      className={avatarClass}
      loading="eager"
    ></img>
  );
};

export default Avatar;
