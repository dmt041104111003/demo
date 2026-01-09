
## Getting Started


```bash
npx shadcn@latest init --defaults
npx shadcn@latest add button card input badge -y
```
### responsive
```bash
/* globals.css */
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* layout.tsx */
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<html className="overflow-x-hidden">
<body className="overflow-x-hidden w-full">

//Container pattern:
<div className="px-4 py-4">
  <div className="max-w-6xl mx-auto">

//Font size responsive:
// Mobile → Tablet → Desktop
className="text-sm sm:text-base lg:text-lg"
className="text-base sm:text-xl lg:text-2xl"

//Grid responsive:
// 1 cột mobile → 2 cột tablet → 4 cột desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"

// 2 cột mobile → 3 cột tablet → 4 cột desktop  
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"

//Padding/Gap responsive:
className="p-4 sm:p-6 lg:p-8"
className="gap-3 sm:gap-4 lg:gap-6"

//Ẩn/Hiện theo breakpoint:
// Ẩn trên mobile, hiện từ md
className="hidden md:flex"

// Hiện trên mobile, ẩn từ md
className="md:hidden"

//Text dài:
// Cắt bớt với ...
className="truncate"

// Cho phép xuống dòng
className="break-words"

// Giới hạn số dòng
className="line-clamp-2"

//Flex không bị tràn:
<div className="flex min-w-0">        {/* Container */}
  <span className="truncate">Text dài</span>  {/* Child */}
  <img className="shrink-0" />        {/* Không co ảnh */}
</div>

```


Primary	#B6C9E4	
Primary Hover	#7A9AC7	
Primary Dark	#5A7AAA	
Background	#F8F9FB	
Accent	#CEDAEC	