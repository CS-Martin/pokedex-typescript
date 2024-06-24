"use client"

import * as React from "react"
import { Moon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavigationMenuViewport } from "@radix-ui/react-navigation-menu"


export function ModeToggle() {
  const { setTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <NavigationMenu orientation="vertical" className="absolute right-2">
      <NavigationMenuList className="">
        <NavigationMenuItem>
          {theme === 'dark' ? (
            <NavigationMenuTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" /><path d="M20 3v4" /><path d="M22 5h-4" /></svg>
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            </NavigationMenuTrigger>
          )}
          <NavigationMenuContent>
            <ul className="p-6 w-[200px] lg:w-[300px]">
              <ListItem onClick={() => setTheme("light")}>
                <span className="flex justify-between items-center">
                  Light Mode
                  <Sun size={20} />
                </span>
              </ListItem>
              <ListItem onClick={() => setTheme("dark")}>
                <span className="flex justify-between items-center">
                  Dark Mode
                  <Moon size={20} />
                </span>
              </ListItem>
              <ListItem onClick={() => setTheme("system")}>
                <span className="flex justify-between items-center">
                  Use System
                  <SunMoon size={20} />
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
