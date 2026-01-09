"use client";

import { useState } from "react";
import { FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const categories = [
      "Rau củ quả", "Trái cây", "Ngũ cốc", "Gia vị", "Mật ong", "Nấm các loại", "Hạt dinh dưỡng", "Đặc sản vùng miền", "Sản phẩm OCOP", "Trà & Cà phê"
  ];

  return (
    <footer className="bg-white text-gray-800 mt-auto border-t border-gray-200">
      {/* Section 1: Main Footer - 3 cột */}
      <div className="py-8 sm:py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cột 1: Về Nông Sản Việt */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">
                Về Nông Sản Việt
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Giới thiệu về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Quy chế hoạt động
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Chính sách bán hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Quy trình giải quyết tranh chấp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Thông báo từ Nông Sản Việt
                  </a>
                </li>
              </ul>
            </div>

            {/* Cột 2: Hỗ trợ khách hàng */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">
                Hỗ trợ khách hàng
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Bán hàng cùng chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Chính sách thanh toán & bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Chính sách giao hàng và đổi trả
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Câu hỏi thường gặp (FAQ)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#7A9AC7] transition-colors">
                    Liên hệ với chúng tôi
                  </a>
                </li>
              </ul>

              {/* Hotline & Email */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="phone" size={18} className="text-[#7A9AC7]" />
                  <span className="text-gray-600">Hotline:</span>
                  <a href="tel:+84123456789" className="text-[#7A9AC7] font-semibold hover:text-[#5A7AAA] transition-colors">
                    +84.123.456.789
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="email" size={18} className="text-[#7A9AC7]" />
                  <span className="text-gray-600">Email:</span>
                  <a href="mailto:contact@nongsanviet.vn" className="text-[#7A9AC7] font-semibold hover:text-[#5A7AAA] transition-colors">
                    contact@lab3.io.vn
                  </a>
                </div>
              </div>
            </div>

            {/* Cột 3: Đăng ký nhận tin */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">
                Đăng ký nhận tin
              </h4>
              
              {/* Form Email */}
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-sm border-[#B6C9E4] focus:border-[#7A9AC7] focus:ring-[#7A9AC7]"
                />
                <Button className="bg-[#7A9AC7] hover:bg-[#5A7AAA] text-white text-sm px-4">
                  Đăng ký
                </Button>
              </div>

              {/* App Download */}
              <div className="flex gap-2 mb-4">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-9"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-9"
                  />
                </a>
              </div>

              {/* Company Info */}
              <div className="text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-gray-700">CÔNG TY NÔNG SẢN VIỆT</p>
                <p>Mã số doanh nghiệp: 0123456789</p>
                <p>Địa chỉ: 123 Đường ABC, Quận Cầu Giấy, TP. Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Danh mục sản phẩm */}
      <div className="py-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-900">
            Danh mục sản phẩm
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-gray-600 hover:text-[#7A9AC7] transition-colors"
              >
                {cat}
                {index < categories.length - 1 && <span className="ml-2 text-gray-300">|</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs text-gray-500">
            Copyright © 2025 Nông Sản Việt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
