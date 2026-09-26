"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-slate-200 select-none aspect-[16/9] sm:aspect-[2/1]">
      {/* Background (After Image) */}
      <div className="absolute inset-0">
        <Image
          src="/img/Birdnetting/Image-15.jpg"
          alt="Balcony After ModerNet Invisible Grill Protection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
          After: ModerNet Clean View & Safety
        </div>
      </div>

      {/* Foreground (Before Image) clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full min-w-full">
          <Image
            src="/img/Birdnetting/Image-03.jpg"
            alt="Balcony Before Installation"
            fill
            className="object-cover object-left"
            priority
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
            Before: Pigeons & Unprotected Balcony
          </div>
        </div>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-primary rounded-full shadow-lg flex items-center justify-center text-primary">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* Range Input Overlay */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
