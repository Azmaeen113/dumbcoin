import { Copy, Check, ExternalLink, Shield, Network, Coins, Gem, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const stats = [
  { label: "Network", value: "Base", icon: Network },
  { label: "Ticker", value: "$DUMB", icon: Coins },
  { label: "Total Supply", value: "100B", icon: Gem },
  { label: "Holders", value: "Growing", icon: Users },
];

const tokenomicsData = [
  { name: "Community Rewards", value: 40, color: "hsl(14, 100%, 60%)" }, // Primary orange
  { name: "Liquidity Pool", value: 25, color: "hsl(44, 100%, 62%)" }, // Secondary yellow
  { name: "Marketing", value: 20, color: "hsl(331, 100%, 55%)" }, // Accent pink
  { name: "Team", value: 10, color: "hsl(257, 80%, 62%)" }, // Purple
  { name: "Reserve", value: 5, color: "hsl(191, 100%, 50%)" }, // Cyan
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg p-3 shadow-lg">
        <p className="text-foreground font-semibold">{payload[0].name}</p>
        <p className="text-primary font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x9d716e3ab747c16196863ad9e64f0fd7a2753e45";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-heading">
            Tokenomics
          </h2>
          <p className="text-lg sm:text-xl text-secondary-enhanced max-w-2xl mx-auto text-body">
            Smart numbers behind the <span className="text-foreground">dumb</span> name
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Contract Address - Premium Card */}
          <div className="group relative animate-slide-up">
            <div className="absolute -inset-0.5 bg-gradient-border rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
            
            <div className="relative p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <div className="text-sm text-muted-foreground font-medium">Contract Address</div>
                  </div>
                  
                  <div className="text-base sm:text-lg font-mono break-all text-foreground bg-background/50 p-4 rounded-lg border border-border/30">
                    {contractAddress}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="px-4 py-2 rounded-full bg-gradient-primary-cta text-foreground text-xs font-bold shadow-glow-primary">
                      Base Network
                    </div>
                    <div className="px-4 py-2 rounded-full bg-gradient-card border border-border/50 text-foreground text-xs font-bold">
                      $DUMB
                    </div>
                    <a
                      href={`https://basescan.org/address/${contractAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-purple/20 border border-purple/30 text-purple-light text-xs font-bold hover:bg-purple/30 transition-all duration-300 flex items-center gap-2"
                    >
                      <Shield className="w-3 h-3" />
                      Verified on BaseScan
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-foreground hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-glow-primary min-w-[120px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-border rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                <div className="relative p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-border/50 hover:shadow-card transition-all duration-500 hover:-translate-y-1 text-center group">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary-cta flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tokenomics Pie Chart */}
          <div className="group relative animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="absolute -inset-0.5 bg-gradient-border rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            
            <div className="relative p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-heading mb-2">Token Distribution</h3>
                <p className="text-secondary-enhanced text-body">How the 100B $DUMB tokens are allocated</p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Pie Chart */}
                <div className="w-full lg:w-1/2 h-80 lg:h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tokenomicsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {tokenomicsData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="w-full lg:w-1/2 space-y-3">
                  {tokenomicsData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/legend">
                      <div 
                        className="w-4 h-4 rounded-full transition-all duration-300 group-hover/legend:scale-110"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-foreground font-semibold">{item.name}</div>
                        <div className="text-sm text-secondary-enhanced">{item.value}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ticker Highlight */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-6 p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-border/50">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary-cta blur-2xl opacity-50 animate-pulse-glow"></div>
                <div className="relative text-5xl sm:text-6xl font-bold text-foreground">
                  $DUMB
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-primary-cta rounded-full animate-spin-slow flex items-center justify-center text-2xl shadow-glow-primary">
                <Coins className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};
