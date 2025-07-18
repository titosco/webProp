import Image from "next/image";
import Navigation from "./_components/Navigation";
import Sections from "./sections/Sections";
import Section2 from "./sections/Section2";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Sections />
      <Section2 />
    </div>
  );
}
