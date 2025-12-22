import { NextResponse } from "next/server";
import getContactDetails from "@/lib/getContactDetails";

export async function GET() {
  try {
    const cd = await getContactDetails();
    return NextResponse.json({ data: cd });
  } catch (err) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
}
