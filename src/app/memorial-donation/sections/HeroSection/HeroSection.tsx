// className="hero__ingress"
import { PortableText } from "next-sanity";
import type { HeroSectionProps } from "./HeroSection.types";

export function HeroSection({ copy }: HeroSectionProps) {
  const intro = copy?.introSection;
  return (
    <>
      {intro?.title && <h1>{intro.title}</h1>}
      {intro?.text && <PortableText value={intro.text} />}
    </>
  );
}
