"use client";

import { COPY_QUERYResult } from "../../../sanity/types";
import { COPY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function memorialDonation() {
  const copy = await client.fetch<COPY_QUERYResult>(COPY_QUERY);
  const step1Copy = copy?.step1Recipient?.step1Section;
}
