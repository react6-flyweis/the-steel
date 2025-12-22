"use server";

export async function getContactDetails() {
  try {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "";
    const url = `${base}/static/viewContactDetails`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (e) {
    return null;
  }
}

export default getContactDetails;
