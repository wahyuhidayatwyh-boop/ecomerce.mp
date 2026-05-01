import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4",
        variant === "top" &&
          "from-bg-gradient-from via-bg-gradient-via to-transparent rounded-t-4xl rounded-b-2xl bg-linear-to-b via-60%",
        variant === "bottom" &&
          "from-transparent via-bg-gradient-via to-bg-gradient-from rounded-t-2xl rounded-b-4xl bg-linear-to-b via-40%",
        className,
      )}
    >
      {children}
    </div>
  );
};
