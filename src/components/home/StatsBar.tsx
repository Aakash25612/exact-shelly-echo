import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: 5.2, suffix: " + M", label: "Households", decimals: 1 },
  { value: 28.8, suffix: " + M", label: "Shelly devices sold", decimals: 1 },
  { value: 100, suffix: " +", label: "Countries using Shelly", decimals: 0 },
  { value: 40, suffix: " %", label: "Energy savings for homes & businesses", decimals: 0 },
];

function AnimatedCounter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold text-primary">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-[#0a1628] to-[#102040] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-4">
          {/* Stats */}
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-[120px]">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <span className="text-sm text-white/70 mt-1 max-w-[160px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Real-time Dashboard Card */}
          <Link 
            to="/dashboard"
            className="flex items-center gap-4 bg-[#1a2d47] rounded-2xl px-6 py-4 hover:bg-[#243a59] transition-colors group ml-auto"
          >
            <div className="flex flex-col">
              <span className="shelly-logo text-xl text-white italic font-semibold">
                Shelly
              </span>
              <span className="text-white/80 text-sm">Real-time Dashboard</span>
            </div>
            <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}