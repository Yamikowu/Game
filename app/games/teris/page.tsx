"use client"; // 標示這是客戶端組件

import { useState, useEffect } from 'react';


export default function Tetris() {
  const [board, setBoard] = useState<number[][]>(
    Array(10).fill(Array(5).fill(0))
  );
  const [block, setBlock] = useState<{ x: number; y: number }>({ x: 2, y: 0 });

  useEffect(() => {
    const drop = setInterval(() => {
      setBlock((prev) => {
        if (prev.y + 1 >= 10) {
          const newBoard = board.map((row, i) =>
            i === prev.y ? row.map((cell, j) => (j === prev.x ? 1 : cell)) : row
          );
          setBoard(newBoard);
          return { x: 2, y: 0 };
        }
        return { ...prev, y: prev.y + 1 };
      });
    }, 1000);
    return () => clearInterval(drop);
  }, [board]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setBlock((prev) => {
        if (e.key === 'ArrowLeft' && prev.x > 0) return { ...prev, x: prev.x - 1 };
        if (e.key === 'ArrowRight' && prev.x < 4) return { ...prev, x: prev.x + 1 };
        return prev;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">簡易俄羅斯方塊</h1>
      <div className="grid gap-1 bg-gray-300 p-2 rounded">
        {board.map((row, i) => (
          <div key={i} className="flex gap-1">
            {row.map((cell, j) => (
              <div
                key={j}
                className={`w-10 h-10 ${
                  (i === block.y && j === block.x) || cell === 1
                    ? 'bg-blue-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}