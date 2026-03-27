import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useEffect } from "react";
import { ChevronRight, Globe, Play, Video, ArrowUpRight, Film, Bot, Palette, Loader2, MousePointer2 } from "lucide-react";



const StatusLabel = ({ label, x, y, opacity, scale }: any) => {
    return (
        <motion.div
            style={{ x, y, opacity, scale }}
            className="absolute z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white shadow-xl border border-white/10 backdrop-blur-xl pointer-events-none"
        >
            <Loader2 className="w-4 h-4 text-white animate-spin" />
            <span className="text-[13px] font-bold whitespace-nowrap tracking-tight">{label}</span>
        </motion.div>
    );
};

const Cursor = ({ x, y, opacity }: any) => {
    return (
        <motion.div
            style={{ x, y, opacity }}
            className="absolute z-[60] pointer-events-none"
        >
            <MousePointer2 className="w-5 h-5 text-black fill-black" />
        </motion.div>
    );
};

const VideoBlock = ({ color, x, y, rotate, opacity, label, description, width, height, zIndex = 10 }: any) => {
    return (
        <motion.div
            style={{ x, y, rotate, opacity, width, height, zIndex, top: "100%" }}
            className={`absolute left-1/2 -translate-x-1/2 text-gray-900 rounded-2xl ${color} shadow-xl px-3 py-1 border-2 border-white/30 overflow-hidden pointer-events-none`}
        >
            <span className="text-[13px] font-bold  truncate tracking-tight flex items-center space-x-1">
                {/* <Bot size={16} /> */}
                <span> {label}</span>
            </span>
            <p className="text-[9px]">{description}</p>
        </motion.div>
    );
};

export default function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 25,
        restDelta: 0.001
    });

    // Suppress cross-origin location errors in iframe environments
    useEffect(() => {
        const handleError = (e: ErrorEvent) => {
            if (e.message?.includes("origin") && e.message?.includes("Location")) {
                // This is a benign error in some iframe environments
                return true;
            }
        };
        window.addEventListener('error', handleError as any);
        return () => window.removeEventListener('error', handleError as any);
    }, []);

    // 1. Hero Animations (0.0 - 0.2)
    const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
    const heroY = useTransform(smoothProgress, [0, 0.15], [0, -190]);
    const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);

    // 2. Timeline Bar Reveal (0.2 - 0.4)
    const timelineOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);

    // 3. Video Blocks (0.0 - 0.4)
    // Initial: Fanned out at bottom, crossing horizontally as they move up
    // Final: Aligned inside the red timeline bar
    const block1Width = useTransform(smoothProgress, [0.1, 0.4], ["300px", "180px"]);
    const block2Width = useTransform(smoothProgress, [0.1, 0.4], ["300px", "150px"]);
    const block3Width = useTransform(smoothProgress, [0.1, 0.4], ["300px", "220px"]);
    const block4Width = useTransform(smoothProgress, [0.1, 0.4], ["300px", "160px"]);
    const block5Width = useTransform(smoothProgress, [0.1, 0.4], ["300px", "190px"]);

    const blockHeight = useTransform(smoothProgress, [0.1, 0.4], ["84px", "80px"]);

    // Crossing logic:
    // B1: Right -> Left
    // B2: Mid-Right -> Mid-Left
    // B3: Center -> Center
    // B4: Mid-Left -> Mid-Right
    // B5: Left -> Right

    const block1X = useTransform(smoothProgress, [0, 0.4], [300, -370]);
    const block1Y = useTransform(smoothProgress, [-0.5, 0.4], [-50, -245]);
    const block1Rotate = useTransform(smoothProgress, [0, 0.4], [5, 0]);
    const block2X = useTransform(smoothProgress, [0, 0.4], [150, -200]);
    const block2Y = useTransform(smoothProgress, [-0.5, 0.4], [-60, -245]);
    const block2Rotate = useTransform(smoothProgress, [0, 0.4], [-3, 0]);

    const block3X = useTransform(smoothProgress, [0, 0.4], [0, -10]);
    const block3Y = useTransform(smoothProgress, [-0.5, 0.4], [-70, -245]);
    const block3Rotate = useTransform(smoothProgress, [0, 0.4], [-8, 0]);

    const block4X = useTransform(smoothProgress, [0, 0.4], [-150, 185]);
    const block4Y = useTransform(smoothProgress, [-0.5, 0.4], [-60, -245]);
    const block4Rotate = useTransform(smoothProgress, [0, 0.4], [3, 0]);

    const block5X = useTransform(smoothProgress, [0, 0.4], [-300, 365]);
    const block5Y = useTransform(smoothProgress, [-0.5, 0.4], [-50, -245]);
    const block5Rotate = useTransform(smoothProgress, [0, 0.4], [-8, 0]);

    // 4. Video Preview (0.4 - 0.7) - Drawer Pull Effect
    // It slides up from behind the red bar
    const previewOpacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);
    const previewY = useTransform(smoothProgress, [0.4, 0.7], [420, 0]);
    const videoContentOpacity = useTransform(smoothProgress, [0.4, 1], [0, 1]);

    // 5. Status Labels (0.7 - 0.9)
    const status1Opacity = useTransform(smoothProgress, [0.7, 0.75], [0, 1]);
    const status1X = useTransform(smoothProgress, [0.7, 0.8], [-280, -250]);
    const status1Y = useTransform(smoothProgress, [0.7, 0.8], [110, 140]);

    const status2Opacity = useTransform(smoothProgress, [0.75, 0.8], [0, 1]);
    const status2X = useTransform(smoothProgress, [0.75, 0.85], [100, 120]);
    const status2Y = useTransform(smoothProgress, [0.75, 0.85], [130, 160]);

    const status3Opacity = useTransform(smoothProgress, [0.8, 0.85], [0, 1]);
    const status3X = useTransform(smoothProgress, [0.8, 0.9], [280, 310]);
    const status3Y = useTransform(smoothProgress, [0.8, 0.9], [80, 110]);

    // Cursors
    const cursor1Opacity = useTransform(smoothProgress, [0.7, 0.75], [0, 1]);
    const cursor1X = useTransform(smoothProgress, [0.7, 0.8], [-350, -320]);
    const cursor1Y = useTransform(smoothProgress, [0.7, 0.8], [90, 110]);

    const cursor2Opacity = useTransform(smoothProgress, [0.75, 0.8], [0, 1]);
    const cursor2X = useTransform(smoothProgress, [0.75, 0.85], [20, 50]);
    const cursor2Y = useTransform(smoothProgress, [0.75, 0.85], [90, 130]);

    const cursor3Opacity = useTransform(smoothProgress, [0.8, 0.85], [0, 1]);
    const cursor3X = useTransform(smoothProgress, [0.8, 0.9], [220, 220]);
    const cursor3Y = useTransform(smoothProgress, [0.8, 0.9], [90, 90]);

    return (
        <main ref={containerRef} className="min-h-[800vh] bg-white selection:bg-black selection:text-white relative">

            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg opacity-[0.3] pointer-events-none" />

            <div className="sticky top-0 h-screen w-full flex flex-col items-center  overflow-hidden">

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                    className="text-center max-w-5xl mx-auto z-10 px-6 pt-20">
                    <h1 className="text-7xl md:text-[110px] font-bold  leading-[0.9] mb-8 text-black">
                        <p className="mb-6">OpenClaw</p>
                        影视智能岗位
                    </h1>
                    <p className="text-xl md:text-[14px] text-gray-400 mb-12 max-w-2xl mx-auto leading-[1.3] font-medium tracking-tight">
                        基于 OpenClaw Skill 架构，我们训练了覆盖影视全流程的 AI 角色 —— 从导演、剪辑、文案到视觉设计，你可以像挑选真实主创一样，按需组合不同风格、不同专长的 AI 员工。
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <button className="px-10 py-4 bg-black text-white rounded-full text-[18px] font-bold flex items-center gap-2 hover:bg-gray-900 transition-all group shadow-xl shadow-black/10 active:scale-95">
                            Get started for free <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <div className="flex items-center gap-4 text-[14px] text-gray-400 font-bold">
                            <span className="hover:text-black transition-colors cursor-pointer underline underline-offset-4">Join waitlist</span>
                        </div>
                    </div>
                </motion.div>

                {/* Animation Stage */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Video Preview (The Drawer) */}
                        <div className="absolute w-[940px] min-h-[100px] h-[520px] overflow-hidden pointer-events-none z-20 rounded-xl"
                         style={{ bottom: '155px' }}>
                            <motion.div
                                style={{
                                    opacity: timelineOpacity,
                                    y: previewY,
                                }}
                                className="w-full h-full  bg-black/5 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-black/5" >
                                <motion.img
                                    style={{ opacity: videoContentOpacity }}
                                    src="https://picsum.photos/seed/video/1920/1080"
                                    alt="Video Preview"
                                    className="w-full h-full object-cover "
                                    referrerPolicy="no-referrer"
                                />
                                <motion.div
                                    style={{ opacity: videoContentOpacity }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Video Blocks */}
                        <VideoBlock color="bg-[#3939FF]" x={block1X} y={block1Y} rotate={block1Rotate} label="导演" description="可任选风格的资深导演，覆盖院线、短剧、纪实等全流派，精准匹配你的创作调性" width={block1Width} height={blockHeight} zIndex={30} />
                        <VideoBlock color="bg-[#DBB8FF]" x={block2X} y={block2Y} rotate={block2Rotate} label="剪辑" description="风格化剪辑大师，支持电影感、快节奏、综艺风等多模板，高效剪出专业质感" width={block2Width} height={blockHeight} zIndex={31} />
                        <VideoBlock color="bg-[#F2BB05]" x={block3X} y={block3Y} rotate={block3Rotate} label="文案" description="多赛道编剧专家，可切换悬疑、甜宠、科普等创作风格，量产高契合度脚本" width={block3Width} height={blockHeight} zIndex={32} />
                        <VideoBlock color="bg-[#DBB8FF]" x={block4X} y={block4Y} rotate={block4Rotate} label="视觉" description="全风格美术总监，适配国风、赛博、写实等视觉体系，定制化打造影片美学" width={block4Width} height={blockHeight} zIndex={33} />
                        <VideoBlock color="bg-[#FF5B22]" x={block5X} y={block5Y} rotate={block5Rotate} label="更多岗位" description="包含制片、宣发、配音、调色等更多 AI 专家，全方位覆盖影视工业化生产的每一个细分环节" width={block5Width} height={blockHeight} zIndex={34} />

                        {/* Status Labels */}
                        <StatusLabel label="Removing repeated takes" x={status1X} y={status1Y} opacity={status1Opacity} scale={status1Opacity} />
                        <StatusLabel label="Generating motion graphics" x={status2X} y={status2Y} opacity={status2Opacity} scale={status2Opacity} />
                        <StatusLabel label="Adding captions" x={status3X} y={status3Y} opacity={status3Opacity} scale={status3Opacity} />

                        {/* Cursors */}
                        <Cursor x={cursor1X} y={cursor1Y} opacity={cursor1Opacity} />
                        <Cursor x={cursor2X} y={cursor2Y} opacity={cursor2Opacity} />
                        <Cursor x={cursor3X} y={cursor3Y} opacity={cursor3Opacity} />

                    </div>
                </div>
            </div>
        </main>
    );
}
