"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import Image from "next/image"
import UserIcon from "@/assets/icons/form/user.svg"
import EmailIcon from "@/assets/icons/form/email.svg"
import PasswordIcon from "@/assets/icons/form/password.svg"
import SearchIcon from "@/assets/icons/form/search.svg"

interface AdditionalInputProps {
  variant?: "default" | "mail" | "search"
  icon?: "user" | "email" | "password" | "search"
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & AdditionalInputProps>(
  ({ className, type, variant = "default", icon, ...props }, ref) => {

    const iconList = {
      user: UserIcon,
      email: EmailIcon,
      password: PasswordIcon,
      search: SearchIcon
    }

    if (variant == "default") {
      return (
        <div className="w-full relative">
          {icon && <Image alt="search-icon" src={iconList[icon]} className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full border border-input bg-white text-background rounded-full py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              icon ? "px-12" : "px-6",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
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

    if (variant == "search") {
      return (
        <div className="w-full relative">
          {icon && <Image alt="search-icon" src={iconList[icon]} className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full px-6 border border-foreground placeholder:text-white bg-background text-white rounded-2xl py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      )
    }
  }
)
Input.displayName = "Input"

export { Input }
