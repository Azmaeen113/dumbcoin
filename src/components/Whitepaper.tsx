import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="group relative animate-slide-up">
            <div className="absolute -inset-1 bg-gradient-border rounded-3xl opacity-50 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
            
            <div className="relative p-12 rounded-3xl bg-gradient-card backdrop-blur-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 text-center">
              <div className="mb-8">
                <div className="mx-auto w-20 h-20 bg-gradient-primary-cta rounded-2xl flex items-center justify-center shadow-glow-primary mb-6">
                  <FileText className="w-10 h-10 text-foreground" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-heading mb-4">
                  The <span className="text-primary-enhanced">Dumb</span> <span className="bg-gradient-text bg-clip-text text-transparent">Manifesto</span>
                </h2>
                <p className="text-lg text-secondary-enhanced max-w-2xl mx-auto text-body">
                  Explore our comprehensive whitepaper to understand the brilliance behind the <span className="text-primary-enhanced">dumbness</span>
                </p>
              </div>

              <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Tokenomics breakdown and distribution model</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Community governance structure</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Long-term vision and roadmap</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Technical infrastructure on Base</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-primary-cta hover:shadow-glow-primary text-foreground font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
