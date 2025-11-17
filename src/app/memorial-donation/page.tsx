import { COPY_QUERYResult } from "../../../sanity/types";
import { COPY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Step1Recipient } from "./_sections/Step1Recipient";

export default async function MemorialDonationPage() {
  const copy = await client.fetch<COPY_QUERYResult>(COPY_QUERY);
  const step1Copy = copy?.step1Recipient?.step1Section;

  return <main>{step1Copy && <Step1Recipient copy={step1Copy} />}</main>;
}
