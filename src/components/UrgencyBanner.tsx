import { X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface UrgencyBannerProps {
  onClose: () => void;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function UrgencyBanner({ onClose }: UrgencyBannerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 relative">
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base">
        <Zap className="w-5 h-5 animate-pulse" />
        <p className="font-semibold">
          🔥 PROMO TERBATAS! Tinggal{" "}
          <span className="font-bold">5 Unit Lagi</span> - Berakhir dalam:
        </p>
        <div className="flex gap-2 font-mono font-bold">
          <span className="bg-white/20 px-2 py-1 rounded">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          :
          <span className="bg-white/20 px-2 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          :
          <span className="bg-white/20 px-2 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
