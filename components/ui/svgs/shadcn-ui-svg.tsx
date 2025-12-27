import { ShadcnUi } from "./shadcnUi";
import { ShadcnUiDark } from "./shadcnUiDark";

export default function ShadcnUiSvg() {
  return (
    <>
      <ShadcnUi className="not-dark:hidden" />
      <ShadcnUiDark className="dark:hidden" />
    </>
  );
}
