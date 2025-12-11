"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps<E extends React.ElementType = "div"> = {
  children?: React.ReactNode;
  className?: string;
  /** When true the container is full-width (no max-width) */
  fluid?: boolean;
  /** Element to render (div, section, header, etc.) */
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

export default function Container<E extends React.ElementType = "div">({
  children,
  className,
  fluid = false,
  as,
  ...props
}: ContainerProps<E>) {
  const Component = (as || "div") as React.ElementType;
  const maxWidthClass = fluid ? "w-full" : "max-w-7xl w-full";

  return (
    <Component
      className={cn("mx-auto px-4", maxWidthClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Container as NamedContainer };
