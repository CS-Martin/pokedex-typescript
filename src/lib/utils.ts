import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function cleanDescription(description: string) {
    return description.replace(/\f/g, ' ').replace(/\s+/g, ' ').trim();
}

export function CapitalizeString(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
