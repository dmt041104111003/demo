"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

const slides = [
  { id: 1, image: "/landing/slide1.jpg" },
  { id: 2, image: "/landing/slide2.png" },
  { id: 3, image: "/landing/slide3.png" },
  { id: 4, image: "/landing/slide4.jpg" },
];

const categories = [
  { id: 1, name: "Rau củ quả", icon: "eco" },
  { id: 2, name: "Trái cây", icon: "park" },
  { id: 3, name: "Ngũ cốc", icon: "grain" },
  { id: 4, name: "Gia vị", icon: "spa" },
  { id: 5, name: "Mật ong", icon: "water_drop" },
  { id: 6, name: "Nấm các loại", icon: "grass" },
  { id: 7, name: "Hạt dinh dưỡng", icon: "scatter_plot" },
  { id: 8, name: "Đặc sản vùng miền", icon: "public" },
  { id: 9, name: "Sản phẩm OCOP", icon: "verified" },
  { id: 10, name: "Trà & Cà phê", icon: "local_cafe" },
];

const banners = [
  { id: 1, image: "/landing/banner1.png" },
  { id: 2, image: "/landing/banner2.jpg" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryRef.current) {
      const scrollAmount = 200;
      categoryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout: Slider + Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-8 gap-2 sm:gap-3 mb-4">
          
          {/* Main Slider */}
          <div className="sm:col-span-5 h-48 sm:h-64 relative rounded-lg overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Icon name="chevron_left" size={20} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Icon name="chevron_right" size={20} />
            </button>
          </div>

          {/* Banners - Mobile: horizontal row, Desktop: vertical column */}
          <div className="col-span-1 sm:col-span-3 flex flex-row sm:flex-col gap-2 sm:gap-3">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex-1 relative h-24 sm:h-auto rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <h3 className="text-base sm:text-xl font-bold mb-4 mt-4">Danh mục</h3>
        
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => scrollCategories("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A9AC7] hover:border-[#7A9AC7] transition-colors shadow-sm"
          >
            <Icon name="chevron_left" size={24} />
          </button>

          <div
            ref={categoryRef}
            className="flex gap-3 overflow-x-auto py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex-shrink-0 w-28 sm:w-36 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-4 sm:p-5 cursor-pointer hover:border-[#7A9AC7] transition-all"
              >
                <Icon name={cat.icon} size={32} className="text-[#7A9AC7] mb-3" />
                <p className="text-[11px] sm:text-xs text-center text-gray-700 leading-tight line-clamp-2">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scrollCategories("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A9AC7] hover:border-[#7A9AC7] transition-colors shadow-sm"
          >
            <Icon name="chevron_right" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
