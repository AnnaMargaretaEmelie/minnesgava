export type Step1Image = {
  id: string;
  src: string;
  alt: string;
};

export const STEP1_IMAGES: Step1Image[] = [
  {
    id: "red-rose",
    src: "/images/red_rose.png",
    alt: "Röd ros",
  },
  {
    id: "white-lilly",
    src: "/images/white_lilly.png",
    alt: "Vit lilja",
  },
  { id: "magnolia", src: "/images/magnolia.png", alt: "Magnolia" },
  { id: "dove", src: "/images/dove.png", alt: "Duva" },
];