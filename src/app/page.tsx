'use client'

import Header from "@/components/custom-components/header";
import CatalogueContainer from "./_components/catalogue-container";
import BottomNavigation from "@/components/custom-components/bottom-nav/bottom-nav";
import { Suspense, useState } from "react";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const [sortMethod, setSortMethod] = useState<string>('AZ');

  const handleLoadMore = (): void => {
    setLimit((prevLimit) => prevLimit + 10);
  }

  const handleSortPokemons = (method: string): void => {
    setSortMethod(method);
  }

  return (
    <main className="md:container px-5 relative h-[100vh] flex justify-center items-start">
      <Header />
      <Suspense>
        <CatalogueContainer limit={limit} sortMethod={sortMethod} />
      </Suspense>
      <BottomNavigation loadMorePokemons={handleLoadMore} sortPokemons={handleSortPokemons} />
    </main>
  );
}
