'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            duration: 1000
        });
    }, []);

    return null;
};
