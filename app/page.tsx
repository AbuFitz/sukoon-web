import { Nav } from "@/components/nav/Nav";
import { Opening } from "@/components/sections/Opening";
import { Philosophy } from "@/components/sections/Philosophy";
import { Collection } from "@/components/sections/Collection";
import { Ingredients } from "@/components/sections/Ingredients";
import { SkinStories } from "@/components/sections/SkinStories";
import { Invitation } from "@/components/sections/Invitation";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Opening />
        <Philosophy />
        <Collection />
        <Ingredients />
        <SkinStories />
        <Invitation />
      </main>
      <Footer />
    </>
  );
}
