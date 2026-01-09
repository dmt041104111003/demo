import Icon from "@/components/ui/Icon";

export default function ProductCard() {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="w-full h-48 bg-green-100 rounded-md flex items-center justify-center">
        <Icon name="eco" size={80} className="text-green-600" />
      </div>

      <h3 className="text-lg font-semibold mt-3">Rau cải xanh</h3>
      <p className="text-gray-600 text-sm">Xuất xứ: Đà Lạt</p>
      <p className="text-green-600 font-bold text-xl mt-2">25.000đ/kg</p>

      <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
        <Icon name="add_shopping_cart" size={20} />
        Thêm vào giỏ
      </button>
    </div>
  );
}
