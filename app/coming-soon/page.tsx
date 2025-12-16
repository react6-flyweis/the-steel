import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import cloud from "@/assets/home/cloud.png";

export default function ComingSoon() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Cloud background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <Image
            src={cloud}
            alt="clouds"
            fill
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <Container className="text-center py-16 relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Icon/Badge */}
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-6 inline-block">
                <BellIcon className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-secondary">Something Amazing is</span>
              <br />
              <span className="text-primary">Coming Soon</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re working hard to bring you something special. Stay tuned
              for exciting updates on our new features and services for
              engineered steel buildings.
            </p>

            {/* Email Subscription Form */}
            {/* <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-10 pl-10 pr-4 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                  />
                </div>
                <Button size="lg" className="rounded">
                  <BellIcon />
                  Notify Me
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We&apos;ll notify you when we launch. No spam, promise!
              </p>
            </div> */}

            {/* Action Buttons */}
            {/* <div className="flex items-center justify-center gap-4 pt-8">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded border-primary text-primary"
                >
                  <HomeIcon />
                  Back to Home
                </Button>
              </Link>
            </div> */}

            {/* Countdown or Progress Indicator */}
            {/* <div className="pt-12">
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground mt-1">Days</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">08</div>
                  <div className="text-sm text-muted-foreground mt-1">Hours</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">42</div>
                  <div className="text-sm text-muted-foreground mt-1">Minutes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">23</div>
                  <div className="text-sm text-muted-foreground mt-1">Seconds</div>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
