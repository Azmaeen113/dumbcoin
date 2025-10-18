import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Users, ExternalLink, UserCheck, Heart, Zap, Brain } from "lucide-react";

const socials = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/memedumbcoin",
    followers: "Join the conversation",
    color: "from-[#1DA1F2] to-[#0d8bd9]",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    url: "https://t.me/memedumbcoin",
    followers: "Chat with the community",
    color: "from-[#0088cc] to-[#006699]",
  },
  {
    name: "Discord",
    icon: Users,
    url: "#",
    followers: "Coming soon",
    color: "from-[#5865F2] to-[#4752C4]",
  },
];

export const Community = () => {
  return (
    <section id="community" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-0 right-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl bottom-0 left-0 animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
            Join the <span className="text-accent font-bold">Dumb Army</span>
          </h2>
          <p className="text-lg text-secondary-enhanced max-w-2xl mx-auto text-body">
            Connect with thousands of holders making smart <span className="text-primary-enhanced">dumb</span> decisions together
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-500 hover:scale-110 hover:shadow-glow-accent text-center">
                <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300 shadow-lg`}>
                  <social.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {social.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {social.followers}
                </p>

                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-background group-hover:shadow-glow-accent transition-all duration-300"
                >
                  Join Now
                </Button>
              </div>
            </a>
          ))}
        </div>

        {/* Community stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Holders", value: "Growing", icon: UserCheck },
            { label: "Community", value: "Strong", icon: Users },
            { label: "Vibes", value: "Immaculate", icon: Heart },
            { label: "Dumbness", value: "100%", icon: Brain },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border text-center animate-slide-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
            >
              <div className="mb-3 flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary-cta flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
