"use client";

import { useRef } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

const products = [
  { id: 1, name: "Rau muống hữu cơ", price: 15, location: "Đà Lạt", image: "/landing/product1.png", seller: "HTX Nông sản sạch" },
  { id: 2, name: "Cải bó xôi", price: 35, location: "Đà Lạt", image: "/landing/product2.png", seller: "HTX Nông sản sạch" },
  { id: 3, name: "Bắp cải tím", price: 28, location: "Hà Nội", image: "/landing/product3.png", seller: "HTX Dịch vụ nông nghiệp" },
  { id: 4, name: "Rau dền đỏ", price: 32, location: "Đà Lạt", image: "/landing/product4.png", seller: "HTX Nông sản sạch" },
  { id: 5, name: "Ngô ngọt", price: 18, location: "Hà Nội", image: "/landing/product5.jpg", seller: "HTX Dịch vụ nông nghiệp" },
  { id: 6, name: "Dưa leo", price: 25, location: "Đà Lạt", image: "/landing/product6.jpg", seller: "HTX Nông sản sạch" },
  { id: 7, name: "Bí ngô", price: 30, location: "Đà Lạt", image: "/landing/product7.jpg", seller: "HTX Nông sản sạch" },
  { id: 8, name: "Đậu đũa", price: 12, location: "Hà Nội", image: "/landing/product8.jpg", seller: "HTX Dịch vụ nông nghiệp" },
  { id: 9, name: "Cà rốt hữu cơ", price: 22, location: "Đà Lạt", image: "/landing/product9.jpg", seller: "HTX Nông sản sạch" },
  { id: 10, name: "Cà rốt baby", price: 20, location: "Hà Nội", image: "/landing/product10.jpg", seller: "HTX Dịch vụ nông nghiệp" },
  { id: 11, name: "Ớt chuông", price: 45, location: "Đà Lạt", image: "/landing/product11.jpg", seller: "HTX Nông sản sạch" },
  { id: 12, name: "Cải thìa", price: 18, location: "Hà Nội", image: "/landing/product12.jpg", seller: "HTX Dịch vụ nông nghiệp" },
  { id: 13, name: "Dưa chuột baby", price: 28, location: "Đà Lạt", image: "/landing/product13.png", seller: "HTX Nông sản sạch" },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

export default function Products() {
  const productRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: "left" | "right") => {
    if (productRef.current) {
      const scrollAmount = 300;
      productRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h3 className="text-base sm:text-xl font-bold mb-4">Sản phẩm nổi bật</h3>

        {/* Products Slider */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => scrollProducts("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A9AC7] hover:border-[#7A9AC7] transition-colors shadow-sm"
          >
            <Icon name="chevron_left" size={24} />
          </button>

          {/* Products Grid */}
          <div
            ref={productRef}
            className="flex gap-3 overflow-x-auto py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-40 sm:w-48 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-32 sm:h-40 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h4 className="text-sm font-medium text-gray-800 line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  
                  <p className="text-[#5A7AAA] font-bold text-base mb-2">
                    {formatPrice(product.price)} ₳
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Icon name="location_on" size={14} />
                      <span>{product.location}</span>
                    </div>
                      <Icon name="add_shopping_cart" size={18} className="text-primary hover:text-primary-dark cursor-pointer transition-colors" />
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
                    <Icon name="store" size={12} />
                    <span className="line-clamp-1">{product.seller}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="star_outline" size={12} className="text-gray-300" />
                    ))}
                    <Icon name="thumb_up_off_alt" size={12} className="text-gray-300 ml-1" />
                    <Icon name="favorite_border" size={12} className="text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scrollProducts("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A9AC7] hover:border-[#7A9AC7] transition-colors shadow-sm"
          >
            <Icon name="chevron_right" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
