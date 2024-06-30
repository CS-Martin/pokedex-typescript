'use client';

import Header from '@/components/custom-components/header';
import CatalogueContainer from './_components/catalogue-container';
import BottomNavigation from '@/components/custom-components/bottom-nav/bottom-nav';
import { Suspense, useState } from 'react';

export default function Home() {
    return (
        <main className="relative flex h-[100vh] items-start justify-center px-5 md:container">
            <Suspense>
                <CatalogueContainer />
            </Suspense>
        </main>
    );
}
