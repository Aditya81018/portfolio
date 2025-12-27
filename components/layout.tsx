import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Base layout props
interface BaseLayoutProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

// Flex props interface
interface FlexProps {
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
}

// Dimension props interface
interface DimensionProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullScreen?: boolean;
}

// Container
interface ContainerProps extends BaseLayoutProps, FlexProps, DimensionProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  center?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  size = "xl",
  padding = "md",
  center = true,
  gap = "none",
  align,
  justify,
  wrap = false,
  direction = "col",
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const sizeClass = fullWidth
    ? "max-w-full"
    : {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      }[size];

  const paddingClass = {
    none: "",
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
    xl: "px-12",
  }[padding];

  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const alignClass = align
    ? {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      }[align]
    : "";

  const justifyClass = justify
    ? {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      }[justify]
    : "";

  const directionClass = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  }[direction];

  return (
    <Component
      className={cn(
        "flex",
        fullWidth ? "w-full" : "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        sizeClass,
        paddingClass,
        directionClass,
        gapClass,
        alignClass,
        justifyClass,
        wrap && "flex-wrap",
        center && "mx-auto",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Section
interface SectionProps extends BaseLayoutProps, FlexProps, DimensionProps {
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  background?: "none" | "muted" | "accent" | "card";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  as: Component = "section",
  padding = "lg",
  background = "none",
  gap = "none",
  align,
  justify,
  wrap = false,
  direction = "col",
  fullWidth = true,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const paddingClass = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
    "2xl": "py-32",
  }[padding];

  const backgroundClass = {
    none: "",
    muted: "bg-muted",
    accent: "bg-accent",
    card: "bg-card",
  }[background];

  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const alignClass = align
    ? {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      }[align]
    : "";

  const justifyClass = justify
    ? {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      }[justify]
    : "";

  const directionClass = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  }[direction];

  return (
    <Component
      className={cn(
        "flex",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        paddingClass,
        backgroundClass,
        directionClass,
        gapClass,
        alignClass,
        justifyClass,
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Page
interface PageProps extends BaseLayoutProps, FlexProps, DimensionProps {
  background?: "none" | "muted" | "background";
}

export const Page: React.FC<PageProps> = ({
  children,
  className,
  as: Component = "main",
  background = "background",
  gap = "none",
  align,
  justify,
  wrap = false,
  direction = "col",
  fullWidth = true,
  fullHeight = false,
  fullScreen = true,
  ...props
}) => {
  const backgroundClass = {
    none: "",
    muted: "bg-muted",
    background: "bg-background",
  }[background];

  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const alignClass = align
    ? {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      }[align]
    : "";

  const justifyClass = justify
    ? {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      }[justify]
    : "";

  const directionClass = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  }[direction];

  return (
    <Component
      className={cn(
        "flex",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen h-screen",
        backgroundClass,
        directionClass,
        gapClass,
        alignClass,
        justifyClass,
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Box
interface BoxProps extends BaseLayoutProps, DimensionProps {
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  aspect?: "none" | "square" | "video";
  background?: "none" | "card" | "muted" | "accent" | "primary";
}

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  as: Component = "div",
  padding = "none",
  margin = "none",
  border = false,
  rounded = "none",
  shadow = "none",
  aspect = "none",
  background = "none",
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const paddingClass = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  }[padding];

  const marginClass = {
    none: "",
    xs: "m-2",
    sm: "m-4",
    md: "m-6",
    lg: "m-8",
    xl: "m-12",
  }[margin];

  const roundedClass = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  const shadowClass = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  }[shadow];

  const aspectClass = {
    none: "",
    square: "aspect-square",
    video: "aspect-video",
  }[aspect];

  const backgroundClass = {
    none: "",
    card: "bg-card",
    muted: "bg-muted",
    accent: "bg-accent",
    primary: "bg-primary text-primary-foreground",
  }[background];

  return (
    <Component
      className={cn(
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        paddingClass,
        marginClass,
        roundedClass,
        shadowClass,
        aspectClass,
        backgroundClass,
        border && "border border-border",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Row (Flex Row)
interface RowProps extends BaseLayoutProps, DimensionProps {
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  reverse?: boolean;
}

export const Row: React.FC<RowProps> = ({
  children,
  className,
  as: Component = "div",
  gap = "md",
  align = "start",
  justify = "start",
  wrap = false,
  reverse = false,
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }[align];

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[justify];

  return (
    <Component
      className={cn(
        "flex",
        reverse ? "flex-row-reverse" : "flex-row",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        gapClass,
        alignClass,
        justifyClass,
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Column (Flex Column)
interface ColumnProps extends BaseLayoutProps, DimensionProps {
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  reverse?: boolean;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  as: Component = "div",
  gap = "md",
  align = "start",
  justify = "start",
  reverse = false,
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[align];

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[justify];

  return (
    <Component
      className={cn(
        "flex",
        reverse ? "flex-col-reverse" : "flex-col",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        gapClass,
        alignClass,
        justifyClass,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Grid
interface GridProps extends BaseLayoutProps, DimensionProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | "auto-fit" | "auto-fill";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  minColWidth?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  as: Component = "div",
  cols = 1,
  gap = "md",
  colsMd,
  colsLg,
  minColWidth,
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const gapClass = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }[gap];

  const colsClass = typeof cols === "number" ? `grid-cols-${cols}` : "";

  const colsMdClass = colsMd ? `md:grid-cols-${colsMd}` : "";
  const colsLgClass = colsLg ? `lg:grid-cols-${colsLg}` : "";

  const autoClass =
    cols === "auto-fit" || cols === "auto-fill"
      ? `grid-cols-[repeat(${cols},minmax(${minColWidth || "250px"},1fr))]`
      : "";

  return (
    <Component
      className={cn(
        "grid",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        colsClass,
        colsMdClass,
        colsLgClass,
        autoClass,
        gapClass,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// GridItem
interface GridItemProps extends BaseLayoutProps {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | "full";
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  as: Component = "div",
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  ...props
}) => {
  const colSpanClass = colSpan
    ? colSpan === "full"
      ? "col-span-full"
      : `col-span-${colSpan}`
    : "";

  const rowSpanClass = rowSpan
    ? rowSpan === "full"
      ? "row-span-full"
      : `row-span-${rowSpan}`
    : "";

  return (
    <Component
      className={cn(
        colSpanClass,
        rowSpanClass,
        colStart && `col-start-${colStart}`,
        colEnd && `col-end-${colEnd}`,
        rowStart && `row-start-${rowStart}`,
        rowEnd && `row-end-${rowEnd}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Stack (for overlapping elements)
interface StackProps extends BaseLayoutProps, DimensionProps {
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
}

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  as: Component = "div",
  align = "center",
  justify = "center",
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[align];

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[justify];

  return (
    <Component
      className={cn(
        "relative grid",
        "[&>*]:col-start-1 [&>*]:row-start-1",
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        alignClass,
        justifyClass,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Spacer
interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  axis?: "vertical" | "horizontal";
  className?: string;
}

export const Spacer: React.FC<SpacerProps> = ({
  size = "md",
  axis = "vertical",
  className,
  ...props
}) => {
  const sizeClass = {
    xs: axis === "vertical" ? "h-2" : "w-2",
    sm: axis === "vertical" ? "h-4" : "w-4",
    md: axis === "vertical" ? "h-6" : "w-6",
    lg: axis === "vertical" ? "h-8" : "w-8",
    xl: axis === "vertical" ? "h-12" : "w-12",
    "2xl": axis === "vertical" ? "h-16" : "w-16",
  }[size];

  return <div className={cn(sizeClass, className)} {...props} />;
};

// Divider
interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg";
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  className,
  spacing = "md",
  ...props
}) => {
  const spacingClass = {
    none: "",
    sm: orientation === "horizontal" ? "my-2" : "mx-2",
    md: orientation === "horizontal" ? "my-4" : "mx-4",
    lg: orientation === "horizontal" ? "my-6" : "mx-6",
  }[spacing];

  return (
    <div
      className={cn(
        "border-border",
        orientation === "horizontal" ? "border-t w-full" : "border-l h-full",
        spacingClass,
        className,
      )}
      {...props}
    />
  );
};

// Center
interface CenterProps extends BaseLayoutProps, DimensionProps {
  axis?: "both" | "horizontal" | "vertical";
}

export const Center: React.FC<CenterProps> = ({
  children,
  className,
  as: Component = "div",
  axis = "both",
  fullWidth = false,
  fullHeight = false,
  fullScreen = false,
  ...props
}) => {
  const axisClass = {
    both: "flex items-center justify-center",
    horizontal: "flex justify-center",
    vertical: "flex items-center",
  }[axis];

  return (
    <Component
      className={cn(
        axisClass,
        fullWidth && "w-full",
        fullHeight && "h-full",
        fullScreen && "min-h-screen",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Demo Component
export default function LayoutDemo() {
  return (
    <Page fullScreen>
      <Container size="xl" padding="lg" gap="xl">
        <Section padding="none" gap="sm">
          <h1 className="text-4xl font-bold">Layout System</h1>
          <p className="text-lg text-muted-foreground">
            Enhanced with flex properties and dimension controls
          </p>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">
            Page with Flex (fullScreen)
          </h2>
          <Box padding="md" background="muted" rounded="lg">
            <p className="text-sm">
              This Page uses fullScreen (min-h-screen) by default
            </p>
          </Box>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Container with Flex</h2>
          <Container
            size="md"
            padding="md"
            gap="sm"
            className="bg-muted rounded-lg"
          >
            <p>Container now supports flex properties</p>
            <p className="text-sm text-muted-foreground">
              Direction: column (default), Gap: sm
            </p>
          </Container>
        </Section>

        <Divider />

        <Section
          padding="md"
          background="muted"
          gap="md"
          align="center"
          className="rounded-lg"
        >
          <h2 className="text-2xl font-semibold">
            Section with Flex (align: center)
          </h2>
          <Box padding="md" background="card" rounded="md">
            <p className="text-sm">
              Section supports gap, align, justify, and direction
            </p>
          </Box>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Row with Dimension Props</h2>
          <Row
            gap="md"
            align="center"
            justify="between"
            fullWidth
            className="bg-muted p-4 rounded-lg"
          >
            <Box padding="md" background="card" rounded="md">
              Item 1
            </Box>
            <Box padding="md" background="card" rounded="md">
              Item 2
            </Box>
            <Box padding="md" background="card" rounded="md">
              Item 3
            </Box>
          </Row>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Column with fullWidth</h2>
          <Column gap="sm" fullWidth className="bg-muted p-4 rounded-lg">
            <Box padding="md" background="card" rounded="md">
              Item 1
            </Box>
            <Box padding="md" background="card" rounded="md">
              Item 2
            </Box>
            <Box padding="md" background="card" rounded="md">
              Item 3
            </Box>
          </Column>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Grid with Dimension Props</h2>
          <Grid cols={3} gap="md" fullWidth className="bg-muted p-4 rounded-lg">
            <Box
              padding="lg"
              background="card"
              rounded="md"
              className="text-center"
            >
              Grid 1
            </Box>
            <Box
              padding="lg"
              background="card"
              rounded="md"
              className="text-center"
            >
              Grid 2
            </Box>
            <Box
              padding="lg"
              background="card"
              rounded="md"
              className="text-center"
            >
              Grid 3
            </Box>
          </Grid>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Box with Dimensions</h2>
          <Row gap="md" wrap>
            <Box padding="lg" background="card" rounded="lg" shadow="md" border>
              Normal box
            </Box>
            <Box padding="lg" background="primary" rounded="lg" fullWidth>
              fullWidth box
            </Box>
          </Row>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Stack with fullHeight</h2>
          <Stack
            align="center"
            justify="center"
            fullHeight
            className="h-48 bg-muted rounded-lg"
          >
            <Box
              padding="xl"
              background="primary"
              rounded="lg"
              className="opacity-50"
            >
              Background
            </Box>
            <Box padding="md" background="card" rounded="md" shadow="lg" border>
              Foreground
            </Box>
          </Stack>
        </Section>

        <Divider />

        <Section padding="none" gap="md">
          <h2 className="text-2xl font-semibold">Center with fullScreen</h2>
          <Box background="muted" rounded="lg" className="h-32">
            <Center fullHeight>
              <p>Perfectly centered with fullHeight</p>
            </Center>
          </Box>
        </Section>

        <Divider />

        <Section
          padding="md"
          background="muted"
          gap="md"
          className="rounded-lg"
        >
          <h2 className="text-2xl font-semibold">
            Container Direction Control
          </h2>
          <Container
            size="md"
            padding="md"
            gap="md"
            direction="row"
            wrap
            className="bg-card rounded-lg"
          >
            <Box
              padding="md"
              background="accent"
              rounded="md"
              className="flex-1"
            >
              Direction: row
            </Box>
            <Box
              padding="md"
              background="accent"
              rounded="md"
              className="flex-1"
            >
              With wrap
            </Box>
            <Box
              padding="md"
              background="accent"
              rounded="md"
              className="flex-1"
            >
              Support
            </Box>
          </Container>
        </Section>

        <Divider />

        <Section
          padding="md"
          background="accent"
          gap="md"
          justify="center"
          align="center"
          className="rounded-lg"
        >
          <h2 className="text-2xl font-semibold">Section Justify & Align</h2>
          <p className="text-sm text-muted-foreground">
            justify: center, align: center
          </p>
          <Box padding="md" background="card" rounded="md">
            Centered content in section
          </Box>
        </Section>
      </Container>
    </Page>
  );
}
