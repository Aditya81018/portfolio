import { ShadcnUi } from "./shadcnUi";
import { ShadcnUiDark } from "./shadcnUiDark";

export default function ShadcnUiSvg() {
  return (
    <>
      <ShadcnUi className="dark:hidden" />
      <ShadcnUiDark className="not-dark:hidden" />
    </>
  );
}
