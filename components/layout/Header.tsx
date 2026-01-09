import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Nông Sản Việt"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Nông Sản Việt</h1>
        </div>

        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:underline flex items-center gap-1">
            <Icon name="home" size={20} />
            Trang chủ
          </a>
          <a href="/products" className="hover:underline flex items-center gap-1">
            <Icon name="inventory_2" size={20} />
            Sản phẩm
          </a>
          <a href="/about" className="hover:underline flex items-center gap-1">
            <Icon name="info" size={20} />
            Giới thiệu
          </a>
        </nav>
      </div>
    </header>
  );
}
