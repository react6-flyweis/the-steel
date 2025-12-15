import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyChooseComparison() {
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
              <tr>
                <td className="p-3 font-semibold">Durability &amp; Strength</td>
                <td className="p-3">50+ years</td>
                <td className="p-3">10–20 years</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">
                  Fire, Pest &amp; Rot Proof
                </td>
                <td className="p-3">Yes</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Cost-Effective</td>
                <td className="p-3">High value</td>
                <td className="p-3">Expensive over time</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Installation Speed</td>
                <td className="p-3">Weeks</td>
                <td className="p-3">Months</td>
              </tr>

              <tr>
                <td className="p-3 font-semibold">
                  Eco-Friendly &amp; Recyclable
                </td>
                <td className="p-3">Yes</td>
                <td className="p-3">Limited</td>
              </tr>
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
