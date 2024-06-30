'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const ProgressAfter = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, color, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        value={value}
        max={max}
        className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
        {...props}>
        <ProgressPrimitive.Indicator
            className="h-full w-full flex-1 animate-pulse rounded-full bg-primary transition-all duration-1000"
            style={{
                transform: `translateX(-${100 - Math.min(100, ((value || 0) / (max || 100)) * 100)}%)`,
                backgroundColor: `${color}`
            }}
        />
    </ProgressPrimitive.Root>
));
ProgressAfter.displayName = ProgressPrimitive.Root.displayName;

export { ProgressAfter };
