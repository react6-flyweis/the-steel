import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselPrevious,
  //   CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import t1 from "@/assets/testimonial/testimonial-1.png";
import t2 from "@/assets/testimonial/testimonial-2.png";
import t3 from "@/assets/testimonial/testimonial-3.png";
import t4 from "@/assets/testimonial/testimonial-4.png";
import Container from "../Container";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: t4,
    text: "Steel Buildings delivered a high-quality prefabricated steel structure for our new workshop.",
    author: "John D., Farmer, Kansas",
  },
  {
    id: 2,
    image: t3,
    text: "Purchased a 30×40 steel building from The Storage Material, and the experience was excellent.",
    author: "John D., Farmer, Kansas",
  },
  {
    id: 3,
    image: t2,
    text: "I couldn't be happier with my Steel Building. The quality is fantastic.",
    author: "John D., Farmer, Kansas",
  },
  {
    id: 4,
    image: t1,
    text: "We purchased a storage building — best decision. Installation was smooth.",
    author: "John D., Farmer, Kansas",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">
          4.9/5 Based on 1,200+ Reviews
        </p>
      </Container>

      <Container
        className="py-6  mt-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* On small screens: horizontal scroll (snap). On lg+: show 4 cards at once using basis classes. */}
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-6">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.id}
                className=" md:basis-1/2 lg:basis-[28%] "
              >
                <article className="bg-linear-to-b from-secondary to-white/5 rounded-lg shadow-lg overflow-hidden relative h-full flex gap-1">
                  <div className="">
                    <QuoteIcon className="text-white rotate-180 fill-white mt-8" />
                  </div>
                  <div className=" flex flex-col">
                    <Image
                      src={t.image}
                      alt={`testimonial ${t.id}`}
                      className="w-full h-52 md:h-56 lg:h-44 xl:h-52 rounded-t-lg object-cover"
                    />

                    <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-white mb-5 font-normal">{t.text}</p>

                        <div className="mb-4 text-yellow-400" aria-hidden>
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>

                      <div className="text-sm text-white font-semibold">
                        — {t.author}
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
      </Container>
    </section>
  );
}
