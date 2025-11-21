import { COPY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { COPY_QUERYResult } from "../../../sanity/types";
import { MemorialPageLayout } from "./MemorialPageLayout/MemorialPageLayout";

export default async function MemorialDonationPage() {
  const copy = await client.fetch<COPY_QUERYResult>(COPY_QUERY);
  const memorialPageCopy = copy?.memorialCard?.introSection;

  if (!memorialPageCopy) {
    return (
      <main>
        <p>Innehåll saknas</p>
      </main>
    );
  }

  return (
    <main>
      <MemorialPageLayout copy={memorialPageCopy} />
    </main>
  );
}
