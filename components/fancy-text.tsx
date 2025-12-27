import { cn } from "@/lib/utils";
import { Highlighter, type HighlighterProps } from "./ui/highlighter";
import { LineShadowText } from "./ui/line-shadow-text";

export default function FancyText({
  className,
  children,
  color,
  ...props
}: HighlighterProps) {
  return (
    <Highlighter
      color={color ?? "var(--primary)"}
      className={cn(
        "px-2 pt-2 font-bold text-white w-fit uppercase",
        className,
      )}
      {...props}
    >
      <LineShadowText shadowColor={"white"}>{children}</LineShadowText>
    </Highlighter>
  );
}
