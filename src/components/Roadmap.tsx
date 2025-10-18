import { Rocket, Megaphone, Building2, Globe, Star } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "The Birth",
    subtitle: "Launch & Foundation",
    icon: Rocket,
    items: [
      "Token launch on Base",
      "Website and socials live",
      "Community building begins",
      "First 1000 holders milestone",
      "Goal: Build a fun, loyal, and active community",
    ],
  },
  {
    phase: "Phase 2",
    title: "Go Viral",
    subtitle: "The Meme Awakens",
    icon: Megaphone,
    items: [
      "DEX listing (Uniswap/BaseSwap)",
      "Marketing & influencer push",
      "Meme & giveaway campaigns",
      "Launch of DumbClub for holders",
      "Goal: Make DumbCoin a viral crypto movement",
    ],
  },
  {
    phase: "Phase 3",
    title: "Smart Expansion",
    subtitle: "From Dumb to Smart Dumb",
    icon: Building2,
    items: [
      "Partnerships with meme projects",
      "DAO voting system for holders",
      "NFT collection launch",
      "Merch drop: 'Certified Dumb'",
      "Goal: Build real utility and growing ecosystem",
    ],
  },
  {
    phase: "Phase 4",
    title: "Global Dumbness",
    subtitle: "Beyond the Blockchain",
    icon: Globe,
    items: [
      "Charity: 'Do Something Dumb for Good'",
      "Mid-tier exchange listings",
      "Cross-chain bridge to Ethereum/BNB",
      "DumbCoin mini-game release",
      "Goal: Expand DumbCoin into a global brand",
    ],
  },
  {
    phase: "Phase 5",
    title: "The Dumb Universe",
    subtitle: "Becoming a Legend",
    icon: Star,
    items: [
      "DumbMetaverse community zone",
      "NFT-to-token integration",
      "Official DumbCoin Festival",
      "Major exchange listings",
      "Goal: Make DumbCoin the smartest dumb project in crypto history",
    ],
  },
];

export const Roadmap = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-slide-up">
          {/* Enhanced heading with visual elements */}
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-primary-cta rounded-2xl blur-xl opacity-20 animate-pulse-glow"></div>
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-heading">
              The Journey to <span className="text-foreground">Greatness</span>
            </h2>
          </div>
          
          {/* Enhanced description with better styling */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-secondary-enhanced text-body leading-relaxed">
              From launch to legend - our roadmap to becoming the smartest <span className="text-primary-enhanced font-bold">dumb</span> project
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-primary-cta rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-primary-cta rounded-full animate-pulse-glow"></div>
            <div className="w-16 h-0.5 bg-gradient-primary-cta rounded-full"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:bg-gradient-primary-cta hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-glow-primary group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow flex-shrink-0">
                        <phase.icon className="w-7 h-7 text-background" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-bold mb-1 group-hover:text-black transition-colors duration-300">{phase.phase}</div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-black transition-colors duration-300">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-black transition-colors duration-300">{phase.subtitle}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:bg-black transition-colors duration-300"></div>
                          <span className="text-muted-foreground leading-relaxed group-hover:text-black transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block relative flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary border-4 border-background shadow-glow"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
