import type { FC } from "hono/jsx";
import { css } from "hono/css";

interface Props {
  role?: string;
  company?: string;
  year?: string;
  tools?: string;
}

const panelClass = css`
  & .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid var(--color-border-secondary);
  }

  & .row:first-child {
    border-top: 0.0625rem solid var(--color-border-secondary);
  }

  & .label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 500;
    line-height: 130%;
  }

  & .value {
    font-size: 0.875rem;
    color: var(--color-text-primary);
    text-align: right;
    font-weight: 500;
    line-height: 130%;
  }

  @media (width < 768px) {
    & .row {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 1rem 0;
    }

    & .value {
      text-align: left;
    }
  }
`;

const Panel: FC = ({ role, company, year, tools }: Props) => {
  return (
    <div className={panelClass}>
      {role && (
        <div className={"row"}>
          <span className={"label"}>Role</span>
          <span className={"value"}>{role}</span>
        </div>
      )}

      {company && (
        <div className={"row"}>
          <span className={"label"}>Company</span>
          <span className={"value"}>{company}</span>
        </div>
      )}

      {year && (
        <div className={"row"}>
          <span className={"label"}>Year</span>
          <span className={"value"}>{year}</span>
        </div>
      )}

      {tools && (
        <div className={"row"}>
          <span className={"label"}>Tools</span>
          <span className={"value"}>{tools}</span>
        </div>
      )}
    </div>
  );
};

export default Panel;
