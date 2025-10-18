import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float-slow"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" style={{ animationDelay: "4s" }}></div>
        <div className="absolute w-80 h-80 bg-purple/20 rounded-full blur-3xl top-1/4 right-1/4 animate-float-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Logo with enhanced glow */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary-cta rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
              <img 
                src={logo} 
                alt="DumbCoin Logo - The Smartest Dumb Investment" 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Content with staggered animations */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-gradient-primary-cta rounded-full text-foreground font-bold text-sm sm:text-base mb-4 animate-slide-down shadow-glow-primary">
              $DUMB on Base Network
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
              The <span className="bg-gradient-text bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">Smartest</span> Dumb Investment You'll Ever Make
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Join the DumbCoin revolution on Base. Where brilliance meets absurdity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button 
                size="lg"
                className="group relative bg-gradient-primary-cta hover:shadow-glow-primary text-foreground font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Buy $DUMB Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="group relative border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
              >
                <span className="relative z-10">Join Community</span>
              </Button>
            </div>

            {/* Premium Ticker with stats */}
            <div className="pt-6 space-y-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse-glow"></div>
                  <div className="relative text-3xl sm:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                    $DUMB
                  </div>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-ring"></div>
                  Live on Base
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="px-4 py-2 rounded-lg bg-card backdrop-blur-sm border border-border/50">
                  <div className="text-xs text-muted-foreground">Market Cap</div>
                  <div className="text-sm font-bold text-foreground">Growing</div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-card backdrop-blur-sm border border-border/50">
                  <div className="text-xs text-muted-foreground">Holders</div>
                  <div className="text-sm font-bold text-foreground">Expanding</div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-card backdrop-blur-sm border border-border/50">
                  <div className="text-xs text-muted-foreground">24h Volume</div>
                  <div className="text-sm font-bold text-foreground">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
