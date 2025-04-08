"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GamesPage() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 自動滾動功能
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    if (!isHovered) {
      startAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isHovered]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-10 drop-shadow-md">
        選擇你的遊戲冒險
      </h1>
      <div className="w-full max-w-7xl relative">
        {/* 滾動容器 */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex space-x-8 min-w-max px-4">
            {/* 敲木魚 */}
            <div className="w-80 flex-shrink-0 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 border border-orange-200">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/muyu2.png"
                  alt="敲木魚遊戲預覽"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-orange-700 mb-4">
                歐趴於...
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                敲出歐趴，考試不再怕！
              </p>
              <Link href="/games/muyu">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-md cursor-pointer">
                  開始敲擊
                </button>
              </Link>
            </div>
            {/* 深呼吸 */}
            <div className="w-80 flex-shrink-0 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 border border-cyan-200">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/teris.png"
                  alt="深呼吸遊戲預覽"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-cyan-700 mb-4">
                深呼吸
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                深呼吸，放鬆身心！
              </p>
              <Link href="/games/teris">
                <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors shadow-md cursor-pointer">
                  開始深呼吸
                </button>
              </Link>
            </div>
            {/* 打字遊戲 */}
            <div className="w-80 flex-shrink-0 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 border border-emerald-200">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/typing.png"
                  alt="打字遊戲預覽"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-emerald-700 mb-4">
                打字遊戲
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                提升打字速度與準確度！
              </p>
              <Link href="/games/typing">
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-md cursor-pointer">
                  開始打字
                </button>
              </Link>
            </div>
            {/* 打地鼠 */}
            <div className="w-80 flex-shrink-0 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 border border-rose-200">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/snake.png"
                  alt="打地鼠遊戲預覽"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-rose-700 mb-4">打地鼠</h2>
              <p className="text-gray-700 mb-6 text-lg">經典遊戲，永不過時！</p>
              <Link href="/games/typing">
                <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors shadow-md cursor-pointer">
                  開始打地鼠
                </button>
              </Link>
            </div>
            {/* 記憶配對 */}
            {/* <div className="w-80 flex-shrink-0 bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 border border-purple-200">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/typing.png"
                  alt="打字遊戲預覽"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-purple-700 mb-4">
                打字遊戲
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                提升打字速度與準確度！
              </p>
              <Link href="/games/typing">
                <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors shadow-md cursor-pointer">
                  開始遊戲
                </button>
              </Link>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
