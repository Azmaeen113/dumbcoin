import { Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x9d716e3ab747c16196863ad9e64f0fd7a2753e45";

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DumbCoin
            </h3>
            <p className="text-muted-foreground">
              The smartest dumb investment on Base. Join the revolution.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/memedumbcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/memedumbcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contract */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contract Address</h4>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs font-mono break-all mb-3">
                {contractAddress}
              </p>
              <Button
                onClick={copyContract}
                size="sm"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-background"
              >
                {copied ? "Copied!" : "Copy Address"}
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-muted-foreground">Built on Base</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 DumbCoin. All rights reserved. Built on Base.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
              DumbCoin is a meme token. Invest responsibly. Cryptocurrency investments carry risk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
