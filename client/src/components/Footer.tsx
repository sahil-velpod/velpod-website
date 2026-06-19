import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12 md:py-16">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 mb-3 sm:mb-4 hover:opacity-80 transition-opacity">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775876534/MEFrF4th6YAXR5ehyBAFVW/velpod-logo-j375HvLVieUkNWDoSmsMF4.webp"
                  alt="Velpod"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <span className="font-bold text-base sm:text-lg">Velpod</span>
              </a>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">
              AI-powered infrastructure tooling for modern engineering teams.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#vision" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Vision
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#company" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:sahil@velpod.dev" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
            &copy; {currentYear} Velpod. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a href="mailto:sahil@velpod.dev" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              sahil@velpod.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
