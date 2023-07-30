import { Category, Cta, Favorites, Footer, Hero } from "../components";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header section containing the Hero component */}
      <header>
        <Hero />
      </header>
      <main>
        {/* Main content of the page */}
        {/* Category section */}
        <Category />
        {/* Favorites section */}
        <Favorites />
        {/* Call to action (CTA) section */}
        <Cta />
        {/* Footer section */}
        <Footer />
      </main>
    </div>
  );
}
