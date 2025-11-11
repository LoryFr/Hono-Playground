import type { FC } from "hono/jsx";
import { css } from "hono/css";

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
      src="/public/avatar.jpg"
      alt="avatar of lorenzo fiori"
      className={avatarClass}
    ></img>
  );
};

export default Avatar;
