"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useTestimonials from "@/lib/hooks/useTestimonials";
// import t1 from "@/assets/testimonial/testimonial-1.png";
// import t2 from "@/assets/testimonial/testimonial-2.png";
// import t3 from "@/assets/testimonial/testimonial-3.png";
// import t4 from "@/assets/testimonial/testimonial-4.png";
// import t5 from "@/assets/testimonial/testimonial-5.png";
// import t6 from "@/assets/testimonial/testimonial-6.png";

import Container from "../Container";
import { QuoteIcon } from "lucide-react";
import * as React from "react";
import autoScroll from "embla-carousel-auto-scroll";

// const testimonials = [
//   {
//     id: 1,
//     image: t4,
//     text: "Steel Buildings delivered a high-quality prefabricated steel structure for our new workshop.",
//     author: "John D., Farmer, Kansas",
//   },
//   {
//     id: 2,
//     image: t3,
//     text: "Purchased a 30×40 steel building from The Storage Material, and the experience was excellent.",
//     author: "John D., Farmer, Kansas",
//   },
//   {
//     id: 3,
//     image: t2,
//     text: "I couldn't be happier with my Steel Building. The quality is fantastic.",
//     author: "John D., Farmer, Kansas",
//   },
//   {
//     id: 4,
//     image: t1,
//     text: "We purchased a storage building — best decision. Installation was smooth.",
//     author: "John D., Farmer, Kansas",
//   },
//   {
//     id: 5,
//     image: t5,
//     text: "The Container Cover quality is outstanding, and I'm thrilled with it.",
//     author: "John D., Farmer, Kansas",
//   },
//   {
//     id: 6,
//     image: t6,
//     text: "The Container Cover quality is outstanding, and I’m thrilled with it .",
//   },
// ];

export default function Testimonials() {
  const { data: testimonials = [], isLoading, isError } = useTestimonials();

  const visible = testimonials;

  // compute average rating and total count for dynamic header
  const { averageRating, totalReviews } = React.useMemo(() => {
    const arr = visible.length ? visible : testimonials;
    const total = arr.length;
    const sum = arr.reduce((s, it) => s + (it.rating ?? 0), 0);
    return {
      averageRating: total ? +(sum / total).toFixed(1) : 0,
      totalReviews: total || 0,
    };
  }, [visible, testimonials]);

  const plugin = React.useMemo(() => {
    return autoScroll({
      speed: 2,
      stopOnInteraction: true,
    });
  }, []);

  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">
          {averageRating}/5 Based on {totalReviews || "1,200+"} Reviews
        </p>
      </Container>

      <Container
        className="py-6  mt-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* On small screens: horizontal scroll (snap). On lg+: show 4 cards at once using basis classes. */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {isLoading ? (
              // simple loading placeholders
              Array.from({ length: 4 }).map((_, i) => (
                <CarouselItem
                  key={`loading-${i}`}
                  className=" md:basis-1/2 lg:basis-[28%] "
                >
                  <div className="animate-pulse bg-white/5 rounded-lg h-64" />
                </CarouselItem>
              ))
            ) : isError ? (
              <div className="text-center text-white/70 w-full">
                Failed to load reviews.
              </div>
            ) : visible.length === 0 ? (
              <div className="text-center text-white/70 w-full">
                No reviews to show yet.
              </div>
            ) : (
              visible.map((t) => {
                return (
                  <CarouselItem
                    key={t._id}
                    className=" md:basis-1/2 lg:basis-[28%] "
                  >
                    <article className="bg-linear-to-b from-secondary to-white/5 rounded-lg shadow-lg overflow-hidden relative h-full flex gap-1">
                      <div className="">
                        <QuoteIcon className="text-white rotate-180 fill-white mt-8" />
                      </div>
                      <div className=" flex flex-col">
                        {t.image ? (
                          // use a plain <img> so external URLs work without next.config changes
                          <img
                            src={t.image}
                            alt={`testimonial ${t._id}`}
                            className="w-full h-52 md:h-56 lg:h-44 xl:h-52 rounded-t-lg object-cover"
                          />
                        ) : (
                          <div className="w-full h-52 md:h-56 lg:h-44 xl:h-52 rounded-t-lg bg-white/5" />
                        )}

                        <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-white mb-5 font-normal">
                              {t.title}
                            </p>

                            <div className="mb-4 text-yellow-400" aria-hidden>
                              ⭐⭐⭐⭐⭐
                            </div>
                          </div>

                          <div className="text-sm text-white font-semibold">
                            — {t.userName}
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })
            )}
          </CarouselContent>
          {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
      </Container>
    </section>
  );
}
