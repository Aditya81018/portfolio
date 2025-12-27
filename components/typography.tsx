import React from "react";
import { cn } from "@/lib/utils";

// Base text component with common props
interface BaseTextProps {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
  color?: "default" | "muted" | "primary" | "destructive" | "success";
}

// Text (Simple normal text)
interface TextProps extends Omit<BaseTextProps, "as"> {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  leading?: "none" | "tight" | "normal" | "relaxed" | "loose";
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  weight = "normal",
  align = "left",
  color = "default",
  size = "base",
  leading = "normal",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }[size];

  const leadingClass = {
    none: "leading-none",
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  }[leading];

  return (
    <span
      className={cn(
        sizeClass,
        leadingClass,
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </span>
  );
};

// Heading 1
type H1Props = Omit<BaseTextProps, "as">;

export const H1: React.FC<H1Props> = ({
  children,
  className,
  weight = "extrabold",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl tracking-tight lg:text-5xl",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </h1>
  );
};

// Heading 2
type H2Props = Omit<BaseTextProps, "as">;

export const H2: React.FC<H2Props> = ({
  children,
  className,
  weight = "semibold",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </h2>
  );
};

// Heading 3
type H3Props = Omit<BaseTextProps, "as">;

export const H3: React.FC<H3Props> = ({
  children,
  className,
  weight = "semibold",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl tracking-tight",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </h3>
  );
};

// Heading 4
type H4Props = Omit<BaseTextProps, "as">;

export const H4: React.FC<H4Props> = ({
  children,
  className,
  weight = "semibold",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl tracking-tight",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </h4>
  );
};

// Paragraph
interface ParagraphProps extends Omit<BaseTextProps, "as"> {
  size?: "sm" | "base" | "lg";
  leading?: "none" | "tight" | "normal" | "relaxed" | "loose";
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  weight = "normal",
  align = "left",
  color = "default",
  size = "base",
  leading = "relaxed",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  }[size];

  const leadingClass = {
    none: "leading-none",
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  }[leading];

  return (
    <p
      className={cn(
        sizeClass,
        leadingClass,
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </p>
  );
};

// Lead text (larger paragraph)
type LeadProps = Omit<BaseTextProps, "as">;

export const Lead: React.FC<LeadProps> = ({
  children,
  className,
  weight = "normal",
  align = "left",
  color = "muted",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <p
      className={cn("text-xl", weightClass, alignClass, colorClass, className)}
    >
      {children}
    </p>
  );
};

// Muted text
interface MutedProps extends Omit<BaseTextProps, "as" | "color"> {
  size?: "xs" | "sm" | "base";
}

export const Muted: React.FC<MutedProps> = ({
  children,
  className,
  weight = "normal",
  align = "left",
  size = "sm",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
  }[size];

  return (
    <p
      className={cn(
        sizeClass,
        "text-muted-foreground",
        weightClass,
        alignClass,
        className,
      )}
    >
      {children}
    </p>
  );
};

// Small text
type SmallProps = Omit<BaseTextProps, "as">;

export const Small: React.FC<SmallProps> = ({
  children,
  className,
  weight = "medium",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <small
      className={cn(
        "text-sm leading-none",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </small>
  );
};

// Large text
type LargeProps = Omit<BaseTextProps, "as">;

export const Large: React.FC<LargeProps> = ({
  children,
  className,
  weight = "semibold",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <div
      className={cn("text-lg", weightClass, alignClass, colorClass, className)}
    >
      {children}
    </div>
  );
};

// Code
type CodeProps = Omit<BaseTextProps, "as" | "weight">;

export const Code: React.FC<CodeProps> = ({
  children,
  className,
  align = "left",
  color = "default",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </code>
  );
};

// Blockquote
type BlockquoteProps = Omit<BaseTextProps, "as">;

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className,
  weight = "normal",
  align = "left",
  color = "default",
}) => {
  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  const colorClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive",
    success: "text-green-600",
  }[color];

  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic",
        weightClass,
        alignClass,
        colorClass,
        className,
      )}
    >
      {children}
    </blockquote>
  );
};

// List
interface ListProps {
  children: React.ReactNode;
  className?: string;
  ordered?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  ordered = false,
}) => {
  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={cn(
        "my-6 ml-6",
        ordered ? "list-decimal" : "list-disc",
        "[&>li]:mt-2",
        className,
      )}
    >
      {children}
    </Component>
  );
};

// Demo Component
export default function TypographyDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <H1>Typography System</H1>
      <Lead>
        A comprehensive set of typography components with line-clamp support and
        a new Text component.
      </Lead>

      <div className="space-y-6">
        <div>
          <H2>Text Component (New!)</H2>
          <div className="space-y-4 mt-4">
            <div>
              <Text>
                This is the new Text component for simple text rendering.
              </Text>
            </div>
            <div>
              <Text size="sm" color="muted">
                Small muted text
              </Text>
            </div>
            <div>
              <Text size="lg" weight="semibold" color="primary">
                Large semibold primary text
              </Text>
            </div>
            <div>
              <Text size="xl" weight="bold">
                Extra large bold text
              </Text>
            </div>
          </div>
        </div>

        <div>
          <H2>Headings</H2>
          <div className="space-y-4 mt-4">
            <H1 weight="bold">Heading 1 - Bold</H1>
            <H2>Heading 2 - Semibold (default)</H2>
            <H3 color="primary">Heading 3 - Primary Color</H3>
            <H4 align="center">Heading 4 - Centered</H4>
          </div>
        </div>

        <div>
          <H2>Body Text</H2>
          <div className="space-y-4 mt-4">
            <Paragraph>
              This is a standard paragraph with default styling. It has relaxed
              line height for better readability and uses the base font size.
            </Paragraph>
            <Paragraph size="lg" leading="loose">
              This is a larger paragraph with loose line height. Perfect for
              introductory text or emphasis.
            </Paragraph>
            <Paragraph size="sm" color="muted">
              This is smaller, muted text. Great for secondary information or
              captions.
            </Paragraph>
          </div>
        </div>

        <div>
          <H2>Text Component Variations</H2>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Text size="xs">Extra small text (xs)</Text>
              <Text size="sm">Small text (sm)</Text>
              <Text size="base">Base text (default)</Text>
              <Text size="lg">Large text (lg)</Text>
              <Text size="xl">Extra large text (xl)</Text>
            </div>
          </div>
        </div>

        <div>
          <H2>Special Text Styles</H2>
          <div className="space-y-4 mt-4">
            <Lead>
              This is lead text, larger and more prominent than regular
              paragraphs.
            </Lead>
            <Muted>
              This is muted text, perfect for less important information.
            </Muted>
            <Small>Small text for fine print or captions</Small>
            <Large>Large text for emphasis</Large>
            <Code>const example = &quot;inline code&quot;;</Code>
          </div>
        </div>

        <div>
          <H2>Blockquotes</H2>
          <Blockquote weight="medium">
            &quot;After all this time?&quot; — &quot;Always.&quot;
          </Blockquote>
        </div>

        <div>
          <H2>Lists</H2>
          <List>
            <li>First unordered item</li>
            <li>Second unordered item</li>
            <li>Third unordered item</li>
          </List>
          <List ordered>
            <li>First ordered item</li>
            <li>Second ordered item</li>
            <li>Third ordered item</li>
          </List>
        </div>

        <div>
          <H2>Alignment Options</H2>
          <Paragraph align="left">Left aligned text (default)</Paragraph>
          <Paragraph align="center">Center aligned text</Paragraph>
          <Paragraph align="right">Right aligned text</Paragraph>
          <Text align="center" size="lg" color="primary">
            Centered Text component
          </Text>
        </div>

        <div>
          <H2>Color Variations</H2>
          <div className="space-y-2">
            <Text color="default">Default color text</Text>
            <Text color="muted">Muted color text</Text>
            <Text color="primary">Primary color text</Text>
            <Text color="destructive">Destructive color text</Text>
            <Text color="success">Success color text</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
