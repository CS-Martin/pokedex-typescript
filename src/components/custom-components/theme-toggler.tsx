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
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server
  }

  return (
    <NavigationMenu orientation="vertical" className="absolute right-2 ">
      <NavigationMenuList className="bg-background rounded-full">
        <NavigationMenuItem>
          {resolvedTheme === "dark" ? (
            <NavigationMenuTrigger>
              <Moon />
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger>
              <Sun />
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
        <NavigationMenuItem>
          {resolvedTheme === "dark" ? (
            <NavigationMenuTrigger>
              <Moon />
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger>
              <Sun />
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
  );
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
