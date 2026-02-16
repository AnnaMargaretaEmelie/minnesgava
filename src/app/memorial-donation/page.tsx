import { COPY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { COPY_QUERYResult } from "../../../sanity/types";
import { MemorialDonationLayout } from "./MemorialDonationLayout/MemorialDonationLayout";

export default async function MemorialDonationPage() {
  const copy = await client.fetch<COPY_QUERYResult>(COPY_QUERY);
  const memorialPageCopy = copy?.memorialCard?.introSection;
  const amountCopy = copy?.donationAmount;
  const donorCopy = copy?.donorDetails;
  const heroCopy = copy?.heroIntro;

  if (!memorialPageCopy || !amountCopy || !donorCopy) {
    return (
      <main>
        <p>Innehåll saknas</p>
      </main>
    );
  }

  return (
    <main>
      <MemorialDonationLayout
        heroCopy={heroCopy ?? undefined}
        memorialPageCopy={memorialPageCopy}
        amountCopy={amountCopy}
        donorCopy={donorCopy}
      />
    </main>
  );
}
