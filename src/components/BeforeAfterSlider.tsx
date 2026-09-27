"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  eyebrow: string;
  title: string;
  desc: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  grid: { src: string; alt: string }[];
}

const slides: SlideData[] = [
  {
    eyebrow: "BEFORE & AFTER TRANSFORMATIONS",
    title: "Seeing Is Believing",
    desc: "See cluttered balconies become safe and open-air retreats.",
    before: {
      src: "/img/Birdnetting/Image-15.jpg",
      alt: "Balcony before installation (unprotected)",
    },
    after: {
      src: "/img/Birdnetting/Image-03.jpg",
      alt: "Balcony after installation (crystal clear & secure)",
    },
    grid: [
      {
        src: "/img/Birdnetting/Image-06.jpg",
        alt: "Pleated mosquito mesh screen door opening",
      },
      {
        src: "/img/Gallery/gallery-03.jpg",
        alt: "Open high-rise balcony view with invisible grill",
      },
      {
        src: "/img/Birdnetting/Image-05.jpg",
        alt: "High tensile invisible grill cable clips on railing",
      },
      {
        src: "/img/Gallery/gallery-04.jpg",
        alt: "Modern living room window with invisible grill view",
      },
    ],
  },
  {
    eyebrow: "LIGHTWEIGHT SAFETY, MODERN VIEWS",
    title: "Invisible Grills",
    desc: "See how sleek cable grills keep balconies open while protecting every edge.",
    before: {
      src: "/img/Birdnetting/Image-04.jpg",
      alt: "Balcony before invisible grill installation",
    },
    after: {
      src: "/img/Birdnetting/Image-08.jpg",
      alt: "Balcony after invisible grill installation",
    },
    grid: [
      {
        src: "/img/Birdnetting/Image-01.jpg",
        alt: "Balcony safety upgrade with invisible grill",
      },
      {
        src: "/img/Birdnetting/Image-07.jpg",
        alt: "Modern balcony with protected railing",
      },
      {
        src: "/img/Birdnetting/Image-09.jpg",
        alt: "Balcony view after safety installation",
      },
      {
        src: "/img/Birdnetting/Image-13.jpg",
        alt: "Clean balcony design with safety nets",
      },
    ],
  },
  {
    eyebrow: "BREEZY BALCONIES, TOTAL PROTECTION",
    title: "Bird Nets",
    desc: "Keep the air flowing while blocking birds with clean, low-visibility netting.",
    before: {
      src: "/img/Birdnetting/Image-10.jpg",
      alt: "Balcony before bird netting",
    },
    after: {
      src: "/img/Birdnetting/Image-11.jpg",
      alt: "Balcony after bird netting installation",
    },
    grid: [
      {
        src: "/img/Birdnetting/Image-02.jpg",
        alt: "Pet safely enjoying window view with mosquito screen",
      },
      {
        src: "/img/service/Bird-Nets-01.jpg",
        alt: "Clean anti-bird netting on balcony",
      },
      {
        src: "/img/service/Balcony-&-Window-Safety.jpg",
        alt: "Balcony view with clear invisible grill",
      },
      {
        src: "/img/service/Invisible-Grill.jpg",
        alt: "Invisible grill architecture view",
      },
    ],
  },
];

export default function BeforeAfterSlider() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(55);
  const [isFading, setIsFading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentSlide = slides[currentSlideIdx];

  const handleSlideChange = (newIdx: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlideIdx(newIdx);
      setSliderPos(55);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => {
    const nextIdx = (currentSlideIdx + 1) % slides.length;
    handleSlideChange(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    handleSlideChange(prevIdx);
  };

  const handlePointerMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  return (
    <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Left Navigation Chevron */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous transformation gallery slide"
        className="hidden md:flex absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/75 hover:bg-slate-900 border border-white/35 text-white items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 z-30 cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
      </button>

      {/* Outer Right Navigation Chevron */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next transformation gallery slide"
        className="hidden md:flex absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/75 hover:bg-slate-900 border border-white/35 text-white items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 z-30 cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.2]" />
      </button>

      {/* Main Glass Card Container */}
      <div
        className={`bg-white/[0.08] backdrop-blur-md rounded-[2rem] sm:rounded-[2.4rem] border border-white/20 p-6 sm:p-8 lg:p-10 shadow-[0_1.5rem_3.5rem_rgba(0,0,0,0.35)] transition-opacity duration-300 ${
          isFading ? "opacity-40" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Interactive Slider */}
          <div className="lg:col-span-7 space-y-5">
            {/* Header intro */}
            <div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#9fc7b6] uppercase block mb-1">
                {currentSlide.eyebrow}
              </span>
              
              <div className="inline-block">
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
                  {currentSlide.title}
                </h2>
                {/* Blue Accent Bar under title */}
                <span className="block w-12 h-[3.5px] bg-[#2995ce] rounded-full mt-2" />
              </div>

              <p className="text-white/80 text-sm sm:text-[15px] font-normal leading-relaxed mt-3">
                {currentSlide.desc}
              </p>
            </div>

            {/* Interactive Before & After Media Card */}
            <div
              ref={sliderRef}
              className="relative w-full aspect-[4/3] rounded-[1.6rem] sm:rounded-[1.85rem] overflow-hidden shadow-2xl select-none group cursor-ew-resize border border-white/10"
              onMouseMove={(e) => {
                if (e.buttons === 1) handlePointerMove(e.clientX);
              }}
              onTouchMove={(e) => {
                if (e.touches[0]) handlePointerMove(e.touches[0].clientX);
              }}
            >
              {/* Layer 1: After Image (Full Color, base) */}
              <div className="absolute inset-0">
                <Image
                  src={currentSlide.after.src}
                  alt={currentSlide.after.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Layer 2: Before Image (Grayscale/Unprotected, clipped from left) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                }}
              >
                <Image
                  src={currentSlide.before.src}
                  alt={currentSlide.before.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Layer 3: Vertical Split Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Circular Thumb Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white bg-[#1a2d24] shadow-xl flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>
              </div>

              {/* Layer 4: Bottom Pill Label (BEFORE • AFTER) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="bg-slate-950/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-2xl flex items-center gap-2.5 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                  <span>BEFORE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                  <span>AFTER</span>
                </div>
              </div>

              {/* Layer 5: Invisible HTML Range Input for accessibility & easy dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after split slider"
              />
            </div>

            {/* Mobile Prev / Next Controls */}
            <div className="flex md:hidden items-center justify-between pt-2">
              <button
                type="button"
                onClick={prevSlide}
                className="px-4 py-2 rounded-full bg-slate-900/80 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <div className="text-white/60 text-xs font-semibold">
                {currentSlideIdx + 1} / {slides.length}
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="px-4 py-2 rounded-full bg-slate-900/80 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Staggered Photo Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 items-start">
              
              {/* Left Mini Column: Hand sliding mesh (top) & Open high-rise balcony (bottom) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 group">
                  <Image
                    src={currentSlide.grid[0].src}
                    alt={currentSlide.grid[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 group">
                  <Image
                    src={currentSlide.grid[1].src}
                    alt={currentSlide.grid[1].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Mini Column: Wire clip close-up (top) & Cozy sofa window (bottom) - Staggered downwards */}
              <div className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-6 lg:mt-9">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 group">
                  <Image
                    src={currentSlide.grid[2].src}
                    alt={currentSlide.grid[2].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 group">
                  <Image
                    src={currentSlide.grid[3].src}
                    alt={currentSlide.grid[3].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
