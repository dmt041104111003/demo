"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 border-b border-gray-200 w-full">
      {/* Container căn lề với body */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo - Trái */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight">LAB3.IO.VN</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Nông sản việt</p>
            </div>
          </div>

          {/* Nav - Giữa (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-gray-500 transition-colors">Trang chủ</a>
            <a href="/marketplace" className="hover:text-gray-500 transition-colors">Gian hàng</a>
            <a href="/about" className="hover:text-gray-500 transition-colors">Về chúng tôi</a>
          </nav>

          {/* Actions - Phải */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Menu icon (tablet) */}
            <button className="hidden md:flex lg:hidden items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
              <Icon name="menu" size={22} />
            </button>
            
            {/* Search */}
            <button className="flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
              <Icon name="search" size={22} />
            </button>
            
            {/* Login */}
            <a href="/login" className="hidden sm:flex items-center text-sm font-medium hover:text-gray-500 transition-colors">
              Đăng nhập
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-3 text-sm">
              <a href="/" className="py-2 hover:text-gray-500 transition-colors">Trang chủ</a>
              <a href="/courses" className="py-2 hover:text-gray-500 transition-colors">Khóa học</a>
              <a href="/resources" className="py-2 hover:text-gray-500 transition-colors">Tài nguyên</a>
              <a href="/community" className="py-2 hover:text-gray-500 transition-colors">Cộng đồng</a>
              <a href="/about" className="py-2 hover:text-gray-500 transition-colors">Về chúng tôi</a>
              <hr className="border-gray-200" />
              <a href="/login" className="py-2 font-medium hover:text-gray-500 transition-colors">Đăng nhập</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
