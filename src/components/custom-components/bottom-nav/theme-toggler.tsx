'use client';

import * as React from 'react';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ListItem } from './bottom-nav';
import {
    NavigationMenuContent,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // After mounting, we have access to the theme
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Render nothing on the server
    }

    return (
        <>
            {resolvedTheme === 'dark' ? (
                <NavigationMenuTrigger>
                    <Moon size={18} />
                </NavigationMenuTrigger>
            ) : (
                <NavigationMenuTrigger>
                    <Sun size={18} />
                </NavigationMenuTrigger>
            )}
            <NavigationMenuContent>
                <ul className="w-[200px] p-6 lg:w-[300px]">
                    <ListItem onClick={() => setTheme('light')}>
                        <span className="flex items-center justify-between">
                            Light Mode
                            <Sun size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => setTheme('dark')}>
                        <span className="flex items-center justify-between">
                            Dark Mode
                            <Moon size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => setTheme('system')}>
                        <span className="flex items-center justify-between">
                            Use System
                            <SunMoon size={20} />
                        </span>
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </>
    );
}
