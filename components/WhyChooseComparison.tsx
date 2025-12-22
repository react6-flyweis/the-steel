"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useWhyUsData from "@/lib/hooks/useWhyUsData";

// Fallback data (kept for reference) - not used directly, left commented
// const FALLBACK_FEATURES = [
//   { _id: "f1", feature: "Durability & Strength", steelBuilding: "50+ years", wordConcerte: "10–20 years" },
//   { _id: "f2", feature: "Fire, Pest & Rot Proof", steelBuilding: "Yes", wordConcerte: "No" },
//   { _id: "f3", feature: "Cost-Effective", steelBuilding: "High value", wordConcerte: "Expensive over time" },
//   { _id: "f4", feature: "Installation Speed", steelBuilding: "Weeks", wordConcerte: "Months" },
//   { _id: "f5", feature: "Eco-Friendly & Recyclable", steelBuilding: "Yes", wordConcerte: "Limited" },
// ];

export default function WhyChooseComparison() {
  const { data: features = [], isLoading } = useWhyUsData();

  const hasFeatures = Array.isArray(features) && features.length > 0;

  return (
    <section className="py-16">
      <Container className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-primary">Why Choose Steel</span> Over
          Traditional Materials?
        </h2>
      </Container>

      <Container as="div" className="mb-8">
        <div className="max-w-5xl mx-auto ">
          <table className="w-full rounded-lg table-fixed table-bordered bg-[#D9D9D957]">
            <thead>
              <tr>
                <th className="w-1/3 p-3 text-left font-semibold">Feature</th>
                <th className="w-1/3 p-3 text-left font-semibold">
                  Steel Building ✅
                </th>
                <th className="w-1/3 p-3 text-left font-semibold">
                  Wood/Concrete ❌
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                // skeleton rows while loading
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={"skeleton-" + i} className="animate-pulse">
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    </td>
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                    </td>
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
                    </td>
                  </tr>
                ))
              ) : hasFeatures ? (
                features.map((f) => (
                  <tr key={f._id}>
                    <td className="p-3 font-semibold">{f.feature}</td>
                    <td className="p-3">{f.steelBuilding}</td>
                    <td className="p-3">{f.wordConcerte}</td>
                  </tr>
                ))
              ) : (
                // no features returned from API
                <tr>
                  <td className="p-3 text-center italic" colSpan={3}>
                    No features found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/building-types">
            <Button className="rounded px-8">See Building Types</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
