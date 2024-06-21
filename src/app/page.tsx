import Header from "@/components/custom-components/header";
import CatalogueContainer from "./_components/catalogue-container";

export default function Home() {
  return (
    <main className="container relative h-[100vh] flex justify-center items-start">
      <Header />
      <CatalogueContainer />
    </main>
  );
}
