import * as React from "react";
import { cn } from "@/lib/utils";

const CardButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "h-32 w-full inline-flex items-center rounded-md bg-cardButton px-3 py-2 text-sm font-medium text-cardButton-foreground hover:bg-cardButton/90 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors",
      className,
    )}
    {...props}
  />
));
CardButton.displayName = "CardButton";

export { CardButton };