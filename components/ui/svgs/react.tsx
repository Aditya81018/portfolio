import { ReactDark } from "./reactDark";
import { ReactLight } from "./reactLight";

export default function ReactSVG() {
  return (
    <>
      <ReactLight className="not-dark:hidden" />
      <ReactDark className="dark:hidden" />
    </>
  );
}
