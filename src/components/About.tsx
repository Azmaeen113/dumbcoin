import { Users, BookOpen, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community First",
    description: "We're building a community, not just a token. <span className='text-brand'>DumbCoin</span> holders get access to early events, community votes, and exclusive perks.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: BookOpen,
    title: "Be Part of History",
    description: "Every token is part of the story. <span className='text-brand'>DumbCoin</span> is an experiment where every contribution matters.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Early Adopter Benefits",
    description: "The earlier you join, the louder your name will echo in the <span className='text-brand'>DumbCoin</span> legend.",
    gradient: "from-accent to-purple",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-heading">
            Why Buy <span className="bg-gradient-text bg-clip-text text-transparent">DumbCoin?</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-enhanced max-w-3xl mx-auto text-body">
            Join thousands of smart investors making brilliantly <span className="text-primary-enhanced">dumb</span> decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-border rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-rotate-border"></div>
              
              {/* Card content */}
              <div className="relative p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full">
                {/* Icon with gradient background */}
                <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-body" dangerouslySetInnerHTML={{ __html: feature.description }}>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating orbs decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "3s" }}></div>
      </div>
    </section>
  );
};
