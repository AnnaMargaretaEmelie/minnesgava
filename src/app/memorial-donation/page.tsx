import { COPY_QUERYResult } from "../../../sanity/types";
import { COPY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { MemorialPageSection } from "./sections/MemorialPageSection/MemorialPageSection";

export default async function MemorialDonationPage() {
  const copy = await client.fetch<COPY_QUERYResult>(COPY_QUERY);
  const memorialPageCopy = copy?.step1Recipient?.step1Section;

  if (!memorialPageCopy) {
    return (
      <main>
        <p>Innehåll saknas</p>
      </main>
    );
  }

  return (
    <main>
      <MemorialPageSection copy={memorialPageCopy} />
    </main>
  );
}
