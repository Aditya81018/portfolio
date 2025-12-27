import { GithubDark } from "./githubDark";
import { GithubLight } from "./githubLight";

export default function Github() {
  return (
    <>
      <GithubLight className="dark:hidden" />
      <GithubDark className="not-dark:hidden" />
    </>
  );
}
