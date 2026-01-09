import Icon from "@/components/ui/Icon";

const features = [
  { icon: "verified", label: "Chất lượng" },
  { icon: "local_shipping", label: "Giao nhanh" },
  { icon: "support_agent", label: "Hỗ trợ 24/7" },
  { icon: "payments", label: "Giá tốt" },
];

export default function Features() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-base sm:text-xl font-bold text-center mb-6">
          Tại sao chọn chúng tôi?
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.icon} className="text-center">
              <Icon name={feature.icon} size={28} className="text-[#7A9AC7] mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

