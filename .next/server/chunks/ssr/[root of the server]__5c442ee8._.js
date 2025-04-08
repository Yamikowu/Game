module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/games/typing/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client"; // 標記為客戶端組件
;
;
// 定義打字遊戲的單字列表
const wordLists = [
    {
        name: "📝 Basic Words",
        words: `the, to, i, and, of, he, was, you, her, not, it, in, she, his, that, is, my, with, me, had, on, as, for, but, at, him, have, do, be, what, would, out, said, up, they, we, this, from, did, are, so, could, were, all, if, back, like, one, there, no, into, will, just, when, about, then, them, know, been, am, your, over, down, an, or, time, now, eyes, by, more, get, how, can, who, their, before, around, way, even, going, head, see, us, here, right, off, only, want, through, looked, hand, go, think, some, again, too, away, still, something, than, face, other, never, after, asked, thought, man, good, well, two, where, let, look, made, much, why, because, knew, got, little, door, our, any, room, come, make, take, long, first, say, its, felt, wanted, took, turned, need, hands, tell, really, sure, against, voice, should, has, left, which, very, people, told, came, another, while, last, life, anything, few, body, night, cannot, nothing, behind, being, enough, went, feel, side, does, thing, day, might, saw, until, things, though, those, yes, maybe, put, own, find, ever, every, looking, once, hair, moment, both, love, always, mind, next, place, inside, hard, help, front, without, found, house, mouth, old, same, keep, most, everything, himself, someone, toward, home, open, woman, trying, heard, pulled, arms, better, each, between, new, give, seemed, smile, work`.split(", ")
    },
    {
        name: "🔍 HTML Tags",
        words: `html, head, body, div, span, p, a, img, h1, h2, h3, h4, h5, h6, ul, ol, li, table, tr, td, th, form, input, button, label, select, option, textarea, meta, link, script, style, title, br, hr, strong, em, b, i, u, s, code, pre, blockquote, cite, q, abbr, acronym, address, article, aside, footer, header, nav, section, main, figure, figcaption, canvas, svg, path, circle, rect, line, polyline, polygon, audio, video, source, track, iframe, object, embed, param, map, area, details, summary, dialog, menu, menuitem, output, progress, meter, time, mark, ruby, rt, rp, bdi, bdo, wbr, data, picture, source, track, col, colgroup, caption, thead, tbody, tfoot, fieldset, legend, datalist, optgroup, keygen, output, progress, meter, time, mark, ruby, rt, rp, bdi, bdo, wbr, data, picture, source, track, col, colgroup, caption, thead, tbody, tfoot, fieldset, legend, datalist, optgroup, keygen`.split(", ")
    }
];
// 隨機打亂單詞列表並返回指定數量的單詞
function shuffleWords(words, count = 67) {
    const shuffled = [
        ...words
    ].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, count).join(" ");
}
// 定義可用的主題
const themes = {
    light: {
        name: "Light",
        background: "bg-gray-100",
        containerBg: "bg-white",
        text: "text-gray-700",
        primary: "text-blue-600",
        secondary: "text-gray-500",
        accent: "bg-blue-500",
        error: "text-red-500",
        success: "text-green-500",
        buttonBg: "bg-gray-200",
        buttonText: "text-gray-700",
        buttonHover: "hover:bg-gray-300",
        inputBg: "bg-white",
        inputBorder: "border-gray-300",
        inputFocus: "focus:ring-blue-400",
        primaryColor: "#2563eb",
        secondaryColor: "#6b7280",
        accentColor: "#3b82f6"
    },
    dark: {
        name: "Dark",
        background: "bg-gray-800",
        containerBg: "bg-gray-900",
        text: "text-gray-200",
        primary: "text-blue-400",
        secondary: "text-gray-400",
        accent: "bg-blue-600",
        error: "text-red-400",
        success: "text-green-400",
        buttonBg: "bg-gray-700",
        buttonText: "text-gray-200",
        buttonHover: "hover:bg-gray-600",
        inputBg: "bg-gray-800",
        inputBorder: "border-gray-600",
        inputFocus: "focus:ring-blue-500",
        primaryColor: "#60a5fa",
        secondaryColor: "#9ca3af",
        accentColor: "#2563eb"
    },
    morandi: {
        name: "Morandi",
        background: "bg-[#E8E4D9]",
        containerBg: "bg-[#F5F2E9]",
        text: "text-[#8B7E74]",
        primary: "text-[#A67C52]",
        secondary: "text-[#B4A7A0]",
        accent: "bg-[#A67C52]",
        error: "text-[#C17C74]",
        success: "text-[#8B9D77]",
        buttonBg: "bg-[#D8C3A5]",
        buttonText: "text-[#8B7E74]",
        buttonHover: "hover:bg-[#C4B19A]",
        inputBg: "bg-[#F5F2E9]",
        inputBorder: "border-[#D8C3A5]",
        inputFocus: "focus:ring-[#A67C52]",
        primaryColor: "#A67C52",
        secondaryColor: "#B4A7A0",
        accentColor: "#A67C52"
    },
    sage: {
        name: "Sage",
        background: "bg-[#E6E9E0]",
        containerBg: "bg-[#F0F3EA]",
        text: "text-[#7A8B7A]",
        primary: "text-[#5F7A5F]",
        secondary: "text-[#A0B0A0]",
        accent: "bg-[#5F7A5F]",
        error: "text-[#C17C74]",
        success: "text-[#5F7A5F]",
        buttonBg: "bg-[#C0D0C0]",
        buttonText: "text-[#5F7A5F]",
        buttonHover: "hover:bg-[#B0C0B0]",
        inputBg: "bg-[#F0F3EA]",
        inputBorder: "border-[#C0D0C0]",
        inputFocus: "focus:ring-[#5F7A5F]",
        primaryColor: "#5F7A5F",
        secondaryColor: "#A0B0A0",
        accentColor: "#5F7A5F"
    },
    dusty: {
        name: "Dusty",
        background: "bg-[#E8DED2]",
        containerBg: "bg-[#F5EDE1]",
        text: "text-[#8B7E74]",
        primary: "text-[#B4A7A0]",
        secondary: "text-[#C4B19A]",
        accent: "bg-[#B4A7A0]",
        error: "text-[#C17C74]",
        success: "text-[#8B9D77]",
        buttonBg: "bg-[#D8C3A5]",
        buttonText: "text-[#8B7E74]",
        buttonHover: "hover:bg-[#C4B19A]",
        inputBg: "bg-[#F5EDE1]",
        inputBorder: "border-[#D8C3A5]",
        inputFocus: "focus:ring-[#B4A7A0]",
        primaryColor: "#B4A7A0",
        secondaryColor: "#C4B19A",
        accentColor: "#B4A7A0"
    },
    lavender: {
        name: "Lavender",
        background: "bg-[#E6E0E9]",
        containerBg: "bg-[#F0EAF3]",
        text: "text-[#8B7E8B]",
        primary: "text-[#A67CA6]",
        secondary: "text-[#B4A7B4]",
        accent: "bg-[#A67CA6]",
        error: "text-[#C17C74]",
        success: "text-[#8B9D77]",
        buttonBg: "bg-[#D8C3D8]",
        buttonText: "text-[#8B7E8B]",
        buttonHover: "hover:bg-[#C4B1C4]",
        inputBg: "bg-[#F0EAF3]",
        inputBorder: "border-[#D8C3D8]",
        inputFocus: "focus:ring-[#A67CA6]",
        primaryColor: "#A67CA6",
        secondaryColor: "#B4A7B4",
        accentColor: "#A67CA6"
    }
};
function Home() {
    // DOM引用
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // 輸入框引用
    // 狀態管理
    const [words, setWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // 當前遊戲中的單詞列表
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 當前輸入的單詞索引
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // 用戶輸入的文字
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 剩餘時間
    const [wpm, setWpm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 每分鐘打字速度
    const [timerRunning, setTimerRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 計時器運行狀態
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // 遊戲開始時間
    const [correctChars, setCorrectChars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 正確輸入的字符數
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 遊戲是否開始
    const [gameEnded, setGameEnded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 遊戲是否結束
    const [selectedDuration, setSelectedDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(15); // 選擇的遊戲時長
    const [currentWordCorrect, setCurrentWordCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // 當前單詞是否正確
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("morandi"); // 當前主題，默認為莫蘭迪
    const [showThemeSelector, setShowThemeSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 是否顯示主題選擇器
    const [currentWordList, setCurrentWordList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 當前選擇的單字列表索引
    const [showWordListSelector, setShowWordListSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 是否顯示單字列表選擇器
    // 計算WPM(每分鐘字數)
    const calculateWPM = ()=>{
        if (!startTime) return;
        const timeElapsed = (Date.now() - startTime) / 1000 / 60;
        const adjustedWpm = correctChars / 5 / timeElapsed;
        setWpm(Math.round(adjustedWpm));
    };
    // 開始新遊戲
    const startGame = (duration)=>{
        setSelectedDuration(duration);
        setWords(shuffleWords(wordLists[currentWordList].words).split(" "));
        setCurrentIndex(0);
        setUserInput("");
        setTimeLeft(duration);
        setWpm(0);
        setCorrectChars(0);
        setStartTime(null);
        setGameStarted(false);
        setGameEnded(false);
        setTimerRunning(false);
        setCurrentWordCorrect(true);
        // 確保在重新開始後將焦點回到輸入框
        setTimeout(()=>{
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
    };
    // 重新開始遊戲
    const restartGame = ()=>{
        startGame(selectedDuration);
    };
    // 切換主題
    const toggleTheme = (themeName)=>{
        setCurrentTheme(themeName);
        setShowThemeSelector(false);
    };
    // 切換單字列表
    const toggleWordList = (index)=>{
        setCurrentWordList(index);
        setShowWordListSelector(false);
        // 如果遊戲已經開始，重新開始遊戲以使用新的單字列表
        if (gameStarted) {
            setWords(shuffleWords(wordLists[index].words).split(" "));
            setCurrentIndex(0);
            setUserInput("");
            setTimeLeft(selectedDuration);
            setWpm(0);
            setCorrectChars(0);
            setStartTime(null);
            setGameStarted(false);
            setGameEnded(false);
            setTimerRunning(false);
            setCurrentWordCorrect(true);
            // 確保在重新開始後將焦點回到輸入框
            setTimeout(()=>{
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 100);
        } else {
            // 否則只更新單字列表
            setWords(shuffleWords(wordLists[index].words).split(" "));
        }
    };
    // 處理用戶輸入
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setUserInput(value);
        // 首次輸入時啟動遊戲
        if (!gameStarted && value.length > 0) {
            setGameStarted(true);
            setStartTime(Date.now());
            setTimerRunning(true);
        }
        // 如果遊戲已結束，不再處理輸入
        if (gameEnded) return;
        // 檢查當前輸入是否正確
        const currentWord = words[currentIndex];
        const isCorrect = value === currentWord.substring(0, value.length);
        setCurrentWordCorrect(isCorrect);
        // 處理單詞完成
        if (value.endsWith(" ")) {
            // 檢查當前單詞是否完全正確
            const isWordCorrect = value.trim() === currentWord;
            if (isWordCorrect) {
                setCorrectChars((prev)=>prev + currentWord.length);
                setCurrentIndex((prev)=>prev + 1);
                setUserInput("");
                setCurrentWordCorrect(true);
                // 如果完成所有單詞，重新開始
                if (currentIndex >= words.length - 1) {
                    setWords(shuffleWords(wordLists[currentWordList].words).split(" "));
                    setCurrentIndex(0);
                }
            } else {
                // 如果單詞不正確，不清空輸入，讓用戶繼續輸入直到正確
                setCorrectChars((prev)=>prev + currentWord.length);
            }
        }
    };
    // 處理按鍵事件
    const handleKeyDown = (e)=>{
        if (e.key === "Tab") {
            e.preventDefault();
            restartGame();
        }
    };
    // 渲染單詞列表
    const renderWords = ()=>{
        return words.map((word, index)=>{
            let className = "inline-block mr-2 text-lg";
            if (index < currentIndex) {
                className += ` ${themes[currentTheme].secondary}`;
            } else if (index === currentIndex) {
                className += ` ${themes[currentTheme].primary} font-bold`;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: className,
                children: word
            }, index, false, {
                fileName: "[project]/app/games/typing/page.tsx",
                lineNumber: 338,
                columnNumber: 9
            }, this);
        });
    };
    // 初始化遊戲
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 初始化時設置為15秒
        setWords(shuffleWords(wordLists[currentWordList].words).split(" "));
        setTimeLeft(15);
        // 從本地存儲加載主題
        const savedTheme = localStorage.getItem("typing-theme");
        if (savedTheme && themes[savedTheme]) {
            setCurrentTheme(savedTheme);
        }
        // 從本地存儲加載單字列表
        const savedWordList = localStorage.getItem("typing-wordlist");
        if (savedWordList) {
            const index = parseInt(savedWordList);
            if (!isNaN(index) && index >= 0 && index < wordLists.length) {
                setCurrentWordList(index);
                setWords(shuffleWords(wordLists[index].words).split(" "));
            }
        }
    }, []);
    // 計時器邏輯
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timerRunning && timeLeft > 0) {
            const interval = setInterval(()=>{
                setTimeLeft((t)=>t - 1);
            }, 1000);
            return ()=>clearInterval(interval);
        }
        if (timeLeft === 0 && timerRunning) {
            setTimerRunning(false);
            setGameEnded(true);
            calculateWPM();
        }
    }, [
        timeLeft,
        timerRunning
    ]);
    // 全局鍵盤事件處理
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleGlobalKeyDown = (e)=>{
            if (e.key === "Tab" && gameEnded) {
                e.preventDefault();
                restartGame();
                // 確保在重新開始後將焦點回到輸入框
                setTimeout(()=>{
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }, 100);
            }
        };
        window.addEventListener("keydown", handleGlobalKeyDown);
        return ()=>{
            window.removeEventListener("keydown", handleGlobalKeyDown);
        };
    }, [
        gameEnded
    ]);
    // 保存主題到本地存儲
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("typing-theme", currentTheme);
    }, [
        currentTheme
    ]);
    // 保存單字列表到本地存儲
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("typing-wordlist", currentWordList.toString());
    }, [
        currentWordList
    ]);
    // 添加點擊空白處關閉選單的功能
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            const target = event.target;
            if (!target.closest('.theme-selector') && !target.closest('.wordlist-selector')) {
                setShowThemeSelector(false);
                setShowWordListSelector(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // 渲染 UI
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${themes[currentTheme].background} flex flex-col items-center justify-center p-4 transition-colors duration-300`,
        tabIndex: 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center w-full max-w-3xl mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `font-bold ${themes[currentTheme].text}`,
                        style: {
                            fontSize: "2.6rem",
                            fontFamily: "monospace",
                            position: "absolute",
                            top: "100px",
                            left: "50%",
                            transform: "translateX(-50%)"
                        },
                        children: "⌨️Typing Game🖱️"
                    }, void 0, false, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-x-2",
                                children: [
                                    15,
                                    30,
                                    60
                                ].map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>startGame(sec),
                                        className: `px-3 py-2 rounded cursor-pointer ${selectedDuration === sec ? `${themes[currentTheme].accent} text-white` : `${themes[currentTheme].buttonBg} ${themes[currentTheme].buttonText} ${themes[currentTheme].buttonHover}`}`,
                                        children: [
                                            sec,
                                            " sec"
                                        ]
                                    }, sec, true, {
                                        fileName: "[project]/app/games/typing/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/games/typing/page.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative wordlist-selector",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowWordListSelector(!showWordListSelector),
                                                className: `px-4 py-2 rounded-md ${themes[currentTheme].buttonBg} ${themes[currentTheme].buttonText} flex items-center cursor-pointer`,
                                                children: wordLists[currentWordList].name
                                            }, void 0, false, {
                                                fileName: "[project]/app/games/typing/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this),
                                            showWordListSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute right-0 mt-2 w-48 ${themes[currentTheme].containerBg} rounded-md shadow-lg z-10 border ${themes[currentTheme].inputBorder}`,
                                                children: wordLists.map((list, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleWordList(index),
                                                        className: `w-full text-left px-4 py-2 ${themes[currentTheme].buttonHover} ${currentWordList === index ? "font-bold" : ""} ${themes[currentTheme].text}`,
                                                        children: list.name
                                                    }, index, false, {
                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/games/typing/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/games/typing/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative theme-selector",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowThemeSelector(!showThemeSelector),
                                                className: `px-4 py-2 rounded-md ${themes[currentTheme].accent} text-white flex items-center cursor-pointer`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-1",
                                                        children: "🎨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    themes[currentTheme].name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/games/typing/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this),
                                            showThemeSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute right-0 mt-2 w-48 ${themes[currentTheme].containerBg} rounded-md shadow-lg z-10 border ${themes[currentTheme].inputBorder}`,
                                                children: Object.keys(themes).map((themeName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleTheme(themeName),
                                                        className: `w-full text-left px-4 py-2 ${themes[themeName].buttonHover} ${currentTheme === themeName ? "font-bold" : ""} ${themes[themeName].text} flex items-center justify-between`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: themes[themeName].name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/games/typing/page.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex space-x-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full",
                                                                        style: {
                                                                            backgroundColor: themes[themeName].primaryColor
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full",
                                                                        style: {
                                                                            backgroundColor: themes[themeName].secondaryColor
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full",
                                                                        style: {
                                                                            backgroundColor: themes[themeName].accentColor
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                                        lineNumber: 533,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/games/typing/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, themeName, true, {
                                                        fileName: "[project]/app/games/typing/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/games/typing/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/games/typing/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/games/typing/page.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/games/typing/page.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `shadow-md rounded p-6 w-full max-w-3xl mb-4 ${themes[currentTheme].containerBg}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-4 leading-relaxed h-[200px] overflow-y-auto ${themes[currentTheme].text}`,
                        style: {
                            height: "150px",
                            overflowY: "auto"
                        },
                        children: renderWords()
                    }, void 0, false, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: `w-full h-11 border rounded p-2 focus:outline-none focus:ring-2 ${currentWordCorrect ? `${themes[currentTheme].inputBorder} ${themes[currentTheme].inputFocus} ${themes[currentTheme].text} ${themes[currentTheme].inputBg}` : `border-red-500 focus:ring-red-400 ${themes[currentTheme].text} ${themes[currentTheme].inputBg}`}`,
                        placeholder: gameEnded ? "press ' Tab ' to restart" : "Type to start . . .",
                        value: userInput,
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown,
                        disabled: gameEnded
                    }, void 0, false, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 560,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/games/typing/page.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-lg mt-2 ${themes[currentTheme].text}`,
                children: [
                    "⏱ Time：",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: timeLeft
                    }, void 0, false, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 580,
                        columnNumber: 16
                    }, this),
                    " s   |   ✍️ Speed：",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: wpm
                    }, void 0, false, {
                        fileName: "[project]/app/games/typing/page.tsx",
                        lineNumber: 581,
                        columnNumber: 27
                    }, this),
                    " WPM"
                ]
            }, void 0, true, {
                fileName: "[project]/app/games/typing/page.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-lg ${themes[currentTheme].secondary} mt-2`,
                style: {
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.7
                },
                children: "press ' Tab ' to restart"
            }, void 0, false, {
                fileName: "[project]/app/games/typing/page.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/games/typing/page.tsx",
        lineNumber: 432,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5c442ee8._.js.map