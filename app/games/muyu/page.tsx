"use client"; // 標示這是客戶端組件

import { useState, useEffect } from "react";
import Image from "next/image";

// 定義主題類型
type Theme = {
  background: string; // 背景樣式
  textColor: string; // 文字顏色
};

// 定義主題集合類型
type ThemeSet = {
  name: string; // 主題名稱
  theme: Theme; // 主題樣式
  woodFish: {
    name: string; // 木魚名稱
    image: string; // 木魚圖片路徑
    size: number; // 木魚尺寸
  };
  sound: string; // 敲擊音效路徑
};

// 浮動數字組件：顯示點擊後的動畫效果
const FloatingNumber = ({
  x,
  y,
  theme,
}: {
  x: number; // X座標
  y: number; // Y座標
  theme: Theme; // 主題樣式
}) => (
  <div
    className={`absolute text-2xl font-bold pointer-events-none animate-float font-cute ${theme.textColor}`}
    style={{ left: x, top: y }}
  >
    歐趴+1
  </div>
);

// 預設主題集合
const themeSets: ThemeSet[] = [
  {
    name: "傳統禪意",
    theme: {
      background: "bg-gradient-to-b from-black to-gray-900",
      textColor: "text-gray-600",
    },
    woodFish: { name: "傳統木魚", image: "/muyu.png", size: 250 },
    sound: "/muyu.mp3",
  },
  {
    name: "金玉良緣",
    theme: {
      background: "bg-gradient-to-b from-gray-800 to-black",
      textColor: "text-amber-600",
    },
    woodFish: { name: "金邊木魚", image: "/muyu1.png", size: 250 },
    sound: "/muyu1.mp3",
  },
  {
    name: "現代禪風",
    theme: {
      background: "bg-gradient-to-b from-red-400 to-red-900",
      textColor: "text-brown-100",
    },
    woodFish: { name: "玉石木魚", image: "/muyu2.png", size: 250 },
    sound: "/muyu2.mp3",
  },
];

export default function Home() {
  // 狀態管理
  const [count, setCount] = useState(0); // 計數器
  const [isAnimating, setIsAnimating] = useState(false); // 動畫狀態
  const [floatingNumbers, setFloatingNumbers] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);  // 浮動數字陣列
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // 音效物件
  const [currentSet, setCurrentSet] = useState(themeSets[1]); // 當前主題(為金玉良緣)

  // 當主題改變時更新音效
  useEffect(() => {
    setAudio(new Audio(currentSet.sound));
  }, [currentSet.sound]);

  // 處理敲擊事件
  const handleKnock = (e: React.MouseEvent<HTMLDivElement>) => {
    // 計算點擊位置
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    // 播放音效
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    
    // 更新計數器
    setCount((prev) => prev + 1);
    
    // 觸發動畫效果
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    // 新增浮動數字
    setFloatingNumbers((prev) => [...prev, { id, x, y }]);
    
    // 2.5秒後移除浮動數字
    setTimeout(() => {
      setFloatingNumbers((prev) => prev.filter((num) => num.id !== id));
    }, 2500);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${currentSet.theme.background}`}
    >
      {/* 標題 */}
      <h1
        className={`text-5xl font-bold mb-8 ${currentSet.theme.textColor} font-cute`}
      >
        歐趴木魚
      </h1>

      {/* 主題選擇按鈕 */}
      <div className="flex gap-4 mb-8">
        {themeSets.map((set) => (
          <button
            key={set.name}
            onClick={() => setCurrentSet(set)}
            className={`px-3 py-1.5 rounded-lg font-cute ${
              currentSet.name === set.name
                ? `${set.theme.background} text-white`
                : `bg-white ${set.theme.textColor}`
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      {/* 木魚圖片和點擊區域 */}
      <div
        className={`relative cursor-[url('/bat.svg'),auto] transition-transform duration-200 ${
          isAnimating ? "scale-90" : ""
        }`}
        onClick={handleKnock}
      >
        <Image
          src={currentSet.woodFish.image}
          alt={currentSet.woodFish.name}
          width={currentSet.woodFish.size}
          height={currentSet.woodFish.size}
          draggable="false"
          className="rounded-full drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300"
        />
        {/* 浮動數字動畫 */}
        {floatingNumbers.map((num) => (
          <FloatingNumber
            key={num.id}
            x={num.x}
            y={num.y}
            theme={currentSet.theme}
          />
        ))}
      </div>

      {/* 計數器顯示 */}
      <div
        className={`mt-8 text-2xl font-bold font-cute ${currentSet.theme.textColor}`}
      >
        歐趴數：{count}
      </div>
    </div>
  );
}
