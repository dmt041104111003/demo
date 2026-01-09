export const CATEGORIES = [
  { id: "vegetables", name: "Rau củ", icon: "eco" },
  { id: "fruits", name: "Trái cây", icon: "nutrition" },
  { id: "grains", name: "Ngũ cốc", icon: "grain" },
  { id: "herbs", name: "Gia vị", icon: "spa" },
];

export const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Rau cải xanh",
    price: 25000,
    unit: "kg",
    origin: "Đà Lạt",
    icon: "eco",
    category: "vegetables",
    inStock: true,
  },
  {
    id: "2",
    name: "Cà chua",
    price: 35000,
    unit: "kg",
    origin: "Đà Lạt",
    icon: "nutrition",
    category: "vegetables",
    inStock: true,
  },
  {
    id: "3",
    name: "Xoài cát",
    price: 45000,
    unit: "kg",
    origin: "Tiền Giang",
    icon: "nutrition",
    category: "fruits",
    inStock: true,
  },
  {
    id: "4",
    name: "Bưởi da xanh",
    price: 55000,
    unit: "trái",
    origin: "Bến Tre",
    icon: "nutrition",
    category: "fruits",
    inStock: false,
  },
  {
    id: "5",
    name: "Gạo ST25",
    price: 32000,
    unit: "kg",
    origin: "Sóc Trăng",
    icon: "grain",
    category: "grains",
    inStock: true,
  },
  {
    id: "6",
    name: "Ớt hiểm",
    price: 80000,
    unit: "kg",
    origin: "Bình Định",
    icon: "local_fire_department",
    category: "herbs",
    inStock: true,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
};
