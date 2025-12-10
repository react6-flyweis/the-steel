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

const testimonials = [
  {
    id: 1,
    image: t1,
    text: "Steel Buildings delivered a high-quality prefabricated steel structure for our new workshop.",
    author: "John D., Farmer, Kansas",
  },
  {
    id: 2,
    image: t2,
    text: "Purchased a 30×40 steel building from The Storage Material, and the experience was excellent.",
    author: "Jane S., Rancher, Nebraska",
  },
  {
    id: 3,
    image: t3,
    text: "I couldn't be happier with my Steel Building. The quality is fantastic.",
    author: "Mike R., Contractor, Ohio",
  },
  {
    id: 4,
    image: t4,
    text: "We purchased a storage building — best decision. Installation was smooth.",
    author: "Sara L., Business Owner, Texas",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">
          4.9/5 Based on 1,200+ Reviews
        </p>
      </div>

      <div className="mt-10">
        <div
          className="max-w-7xl mx-auto px-6 md:px-8 py-6 -ml-6 md:-ml-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* On small screens: horizontal scroll (snap). On lg+: show 4 cards at once using basis classes. */}
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-6">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-6 md:basis-1/2 lg:basis-1/4"
                >
                  <article className="bg-secondary rounded-xl shadow-lg relative h-full flex flex-col">
                    <div className="relative">
                      <Image
                        src={t.image}
                        alt={`testimonial ${t.id}`}
                        className="w-full h-52 md:h-56 lg:h-44 xl:h-52 object-cover rounded-t-3xl"
                      />

                      <span className="absolute -left-10 top-6 text-[84px] md:text-[92px] lg:-left-6 lg:top-6 leading-none text-white/90 select-none pointer-events-none">
                        “
                      </span>
                    </div>

                    <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-white text-base md:text-lg font-semibold leading-relaxed mb-5">
                          {t.text}
                        </p>

                        <div
                          className="mb-4 text-yellow-400 text-lg"
                          aria-hidden
                        >
                          ★★★★★
                        </div>
                      </div>

                      <div className="text-sm text-white font-semibold">
                        — {t.author}
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
