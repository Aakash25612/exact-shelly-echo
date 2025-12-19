import { X, Truck } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary py-2.5 text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4 text-sm">
        <Truck className="h-4 w-4" />
        <span className="font-medium">
          Free shipping on orders over $99 — Use code{" "}
          <span className="font-bold">SMART2024</span>
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}