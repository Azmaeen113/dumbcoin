import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Minimal background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-float-slow"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Logo with subtle glow */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary-cta rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <img 
                src={logo} 
                alt="DumbCoin Logo - The Smartest Dumb Investment" 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Clean Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-2 bg-gradient-primary-cta rounded-full text-foreground font-bold text-sm sm:text-base mb-4 animate-slide-down shadow-glow-primary">
              $DUMB on Base Network
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up text-heading">
              The <span className="bg-gradient-text bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">Smartest</span> <span className="text-primary-enhanced">Dumb</span> Investment You'll Ever Make
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary-enhanced max-w-2xl mx-auto lg:mx-0 animate-slide-up text-body" style={{ animationDelay: "0.1s" }}>
              Join the <span className="text-brand">DumbCoin</span> revolution on Base. Where brilliance meets absurdity.
            </p>

            {/* Single CTA Button */}
            <div className="pt-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <button className="group relative bg-gradient-primary-cta hover:shadow-glow-primary text-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Buy $DUMB Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
