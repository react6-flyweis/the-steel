import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BellIcon, Ruler, Layers, Building2, HomeIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import cloud from "@/assets/home/cloud.png";

export default function DesignerSoon() {
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
          <div className="space-y-5 max-w-4xl mx-auto">
            {/* Icon/Badge */}
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-6 inline-block animate-pulse">
                <Building2 className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight">
              <span className="text-secondary">3D Building Designer</span>
              <br />
              <span className="text-primary">Coming Soon</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto">
              Design your perfect steel building in real-time with our advanced
              3D visualization tool. Customize every detail and see your vision
              come to life before your eyes.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Ruler className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Custom Dimensions</h3>
                <p className="text-sm text-muted-foreground">
                  Set exact measurements for your building specifications
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Real-Time 3D</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize your design from every angle in 3D
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <BellIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Instant Quotes</h3>
                <p className="text-sm text-muted-foreground">
                  Get pricing estimates as you design your building
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 space-y-6">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-primary text-primary hover:bg-primary/10"
                >
                  <HomeIcon className="mr-2" />
                  Back to Home
                </Button>
              </Link>
              {/* <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg p-8 backdrop-blur-sm border border-primary/20">
                <p className="text-lg font-medium mb-4">
                  In the meantime, get started with our simple building form
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Building2 className="mr-2" />
                      Start Building Now
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-lg border-primary text-primary hover:bg-primary/10"
                    >
                      <HomeIcon className="mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div> */}

              {/* <p className="text-sm text-muted-foreground">
                🚀 The 3D designer is under active development. Check back soon
                for updates!
              </p> */}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
