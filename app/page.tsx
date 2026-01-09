import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import Icon from "@/components/ui/Icon";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto p-6 w-full">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Icon name="eco" size={36} className="text-green-600" />
            Nông sản tươi ngon mỗi ngày
          </h2>
          <p className="text-gray-600 mt-2">
            Trực tiếp từ nông trại đến bàn ăn của bạn
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
