import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { variant?: "default" | "mail" }>(
  ({ className, type, variant = "default", ...props }, ref) => {
    if (variant == "default") {
      return (
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border border-input bg-white rounded-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
    if (variant == "mail") {
      return (
        <div className="relative w-full">
          <input
            type={type}
            className={cn(
              "flex h-14 w-full border border-input text-xl placeholder:text-background bg-white rounded-3xl pl-6 pr-[10rem] py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
          <Button className="absolute h-14 font-work-sans-semibold right-0 top-0 rounded-3xl px-12 py-2" type="submit">
            Subscribe
          </Button>
        </div>
      )
    }
  }
)
Input.displayName = "Input"

export { Input }
