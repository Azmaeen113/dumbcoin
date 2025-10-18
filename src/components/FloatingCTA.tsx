import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const FloatingCTA = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-primary-cta shadow-glow-primary hover:shadow-glow-accent transition-all duration-300 hover:scale-110 flex items-center justify-center animate-slide-up"
        >
          <ArrowUp className="w-5 h-5 text-foreground" />
        </button>
      )}
    </>
  );
};
