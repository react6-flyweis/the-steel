import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon, SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-linear-to-b from-background to-muted/30">
        <Container className="text-center py-16">
          <div className="space-y-6">
            {/* 404 Text */}
            <h1 className="text-9xl font-bold text-primary/20 select-none">
              404
            </h1>

            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-secondary">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It
              might have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <Link href="/">
                <Button size="lg" className="rounded">
                  <HomeIcon />
                  Back to Home
                </Button>
              </Link>
              {/* <Link href="/templates">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded border-primary text-primary"
                >
                  <SearchIcon />
                  Browse Templates
                </Button>
              </Link> */}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
