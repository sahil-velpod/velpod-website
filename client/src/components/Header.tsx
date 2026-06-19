import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              src="/image_logo.png"
              alt="Velpod"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </a>
        </Link>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#problem" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Problem
          </a>
          <a href="#features" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#vision" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Vision
          </a>
          <a href="#company" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Company
          </a>
        </nav>

        {/* CTA Button */}
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 h-auto flex-shrink-0"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </Button>
      </div>
    </header>
  );
}
