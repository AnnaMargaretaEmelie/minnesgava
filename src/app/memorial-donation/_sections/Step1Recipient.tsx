import Step1Content from "@/app/_components/steps/step1/Step1Content";

type Step1Copy = {
  title?: string | null;
  text?: any;
};

type Step1RecipientProps = {
  copy: Step1Copy;
};

export function Step1Recipient({ copy }: Step1RecipientProps) {
  const firstBlock = Array.isArray(copy.text) ? copy.text[0] : null;
  const FirstBlockText =
    firstBlock && Array.isArray(firstBlock.children)
      ? firstBlock.children.map((child: any) => child.text).join(" ")
      : null;
  return (
    <section>
      <h2>{copy.title ?? "Titel saknas"}</h2>
      <p>{FirstBlockText && <p>{FirstBlockText}</p>}</p>
      <Step1Content />
    </section>
  );
}
