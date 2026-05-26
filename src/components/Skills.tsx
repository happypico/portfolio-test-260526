import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Flame, Zap, MousePointerClick, RefreshCw, Layers } from "lucide-react";
import { skills } from "../data";

// Mini vector frame previews for the "Flipbook Preview" animator widget
const FLIPBOOK_FRAMES = [
  // Frame 1: Low key stance
  {
    label: "Frame #01: Key Frame Setup",
    desc: "동작의 핵심 위치를 지정하는 단계 (Key Animation)",
    svg: (
      <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-black fill-none stroke-[3] transition" id="svg-frame-1">
        <circle cx="50" cy="75" r="8" className="fill-retro-peach" /> {/* Squash ball */}
        <path d="M50,75 L50,45" /> {/* Torso */}
        <circle cx="50" cy="38" r="6" className="fill-white" /> {/* Head */}
        <path d="M50,50 L35,65" /> {/* Left arm low */}
        <path d="M50,50 L65,65" /> {/* Right arm low */}
      </svg>
    ),
  },
  // Frame 2: Moving up
  {
    label: "Frame #02: Breakdown & In-between 1",
    desc: "동작의 전이를 부드럽게 이어주는 추가 드로잉",
    svg: (
      <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-black fill-none stroke-[3] transition" id="svg-frame-2">
        <ellipse cx="50" cy="55" rx="8" ry="7" className="fill-retro-yellow" />
        <path d="M50,55 L50,30" />
        <circle cx="50" cy="23" r="6" className="fill-white" />
        <path d="M50,38 L30,35" /> {/* Arms lifting */}
        <path d="M50,38 L70,35" />
      </svg>
    ),
  },
  // Frame 3: Peak Stretch
  {
    label: "Frame #03: Peak In-between State",
    desc: "충만한 프레임으로 극상의 생동감 완성! (In-between)",
    svg: (
      <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-black fill-none stroke-[3] transition" id="svg-frame-3">
        <ellipse cx="50" cy="35" rx="7" ry="9" className="fill-retro-mint" />
        <path d="M50,35 L50,15" />
        <circle cx="50" cy="8" r="5" className="fill-white" />
        <path d="M50,22 L25,10" /> {/* Arms fully raised */}
        <path d="M50,22 L75,10" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const toggleDinoPlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setActiveFrame((prev) => (prev + 1) % FLIPBOOK_FRAMES.length);
      }, 500);
      (window as any)._dinoInterval = interval;
    } else {
      clearInterval((window as any)._dinoInterval);
    }
  };

  const handleFrameChange = (index: number) => {
    if (isPlaying) {
      clearInterval((window as any)._dinoInterval);
      setIsPlaying(false);
    }
    setActiveFrame(index);
  };

  return (
    <section 
      className="border-b-6 border-black bg-retro-mint py-16 px-4 md:py-24 relative overflow-hidden" 
      id="skills"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-black text-retro-cream border-2 border-white font-mono text-xs uppercase px-3 py-1 rounded shadow-brutalist mb-3 inline-flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-retro-yellow animate-pulse" /> CORE STACK
          </div>
          <h2 
            className="text-5xl md:text-7xl font-display font-extrabold text-black uppercase select-none mb-3"
            style={{
              WebkitTextStroke: "2px #000000",
              textShadow: "4px 4px 0px #FDFBF7"
            }}
          >
            ANIMATOR'S LIGHT TABLE
          </h2>
          <div className="w-32 h-1 bg-black rounded-full mt-2"></div>
        </div>

        {/* Outer Brutalist Frame enclosing Grid & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: List of 3 Skills (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-retro-cream border-4 border-black p-6 rounded-[2rem] shadow-brutalist">
              <h3 className="text-xl md:text-2xl font-display font-bold text-black mb-6 uppercase flex items-center gap-2">
                <Flame className="w-5 h-5 text-retro-orange inline" fill="currentColor" />
                <span>EXPERTISE & RATINGS</span>
              </h3>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div 
                    key={skill.id}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`p-4 rounded-xl border-2 border-black transition-all ${
                      hoveredSkill === skill.id ? 'bg-retro-yellow shadow-brutalist -translate-y-0.5' : 'bg-white'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="font-display font-extrabold text-lg md:text-xl text-black">
                        {skill.name}
                      </span>
                      
                      {/* Interactive Stars */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((sIndex) => {
                          const isFilled = sIndex <= skill.stars;
                          return (
                            <Star 
                              key={sIndex}
                              className={`w-5 h-5 stroke-[2] text-black ${
                                isFilled ? 'fill-retro-orange animate-pulse' : 'fill-none'
                              }`} 
                            />
                          );
                        })}
                      </div>
                    </div>
                    
                    <p className="text-xs md:text-sm font-sans font-medium text-gray-700">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Interaction tip */}
            <div className="bg-white border-3 border-black p-4 rounded-2xl shadow-brutalist flex items-center gap-3">
              <div className="bg-retro-peach p-2 rounded-lg border-2 border-black">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <p className="text-xs md:text-sm font-sans font-semibold text-black">
                💡 <b>TIP:</b> In-between Animation은 퀄리티 높은 극강의 5스타(★★★★★) 숙련도를 자랑하며, 매끄럽고 일렁이는 모션을 완성해냅니다.
              </p>
            </div>
          </div>

          {/* Right Column: Whimsical Interactive Cel flipbook simulator (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border-4 border-black p-6 rounded-[2.2rem] shadow-brutalist-lg h-full flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono bg-black text-white py-1 px-2.5 rounded border border-white tracking-widest uppercase">
                    ANIMATION SIMULATOR
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-[10px] font-mono font-bold uppercase text-gray-500">CEL: FRAME BY FRAME</span>
                  </div>
                </div>

                <h4 className="font-display font-extrabold text-black text-lg mb-2">
                  동작 흐름 프레임 시뮬레이션
                </h4>
                <p className="text-xs font-sans text-gray-600 mb-6 leading-relaxed">
                  바를 좌우로 조절하여 프레임 레이어가 연결될 때, 움직임이 얼마나 부드럽게 움직이는 지 확인해보세요!?
                </p>

                {/* Light Box Screen Canvas */}
                <div className="bg-retro-cream border-3 border-black rounded-2xl h-56 flex flex-col items-center justify-center relative overflow-hidden shadow-brutalist">
                  {/* Grid layout lines overlay */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-red-200 border-dashed"></div>
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-red-200 border-dashed"></div>
                  
                  {/* Framer motion layer to transition between frame states */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFrame}
                      initial={{ opacity: 0.2, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.2 }}
                      transition={{ duration: 0.15 }}
                      className="relative z-10"
                    >
                      {FLIPBOOK_FRAMES[activeFrame].svg}
                    </motion.div>
                  </AnimatePresence>

                  {/* Frame Counter Tag */}
                  <div className="absolute top-2 left-2 bg-black text-white font-mono text-[9px] px-2 py-0.5 rounded border border-white">
                    CEL_ID: {activeFrame + 1} / 3
                  </div>
                </div>

                <div className="mt-4 p-2 bg-retro-cream border-2 border-black rounded-lg text-center">
                  <span className="text-[10px] font-mono font-bold text-gray-600 block uppercase mb-1">
                    {FLIPBOOK_FRAMES[activeFrame].label}
                  </span>
                  <p className="text-xs font-sans font-medium text-black">
                    {FLIPBOOK_FRAMES[activeFrame].desc}
                  </p>
                </div>
              </div>

              {/* Slider & Controls */}
              <div className="mt-6 space-y-4">
                {/* Frame Slider Selector */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs text-black">
                    <span>Key Stance (#01)</span>
                    <span>Stretch (#03)</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="2" 
                    value={activeFrame}
                    onChange={(e) => handleFrameChange(parseInt(e.target.value))}
                    className="w-full h-3 bg-retro-cream border-2 border-black rounded-lg appearance-none cursor-pointer accent-retro-orange"
                    id="skills-frame-slider"
                  />
                </div>

                {/* Play Autoloop button */}
                <button
                  onClick={toggleDinoPlay}
                  id="skills-btn-toggle-play"
                  className={`w-full py-2.5 rounded-xl border-2 border-black text-xs font-display font-extrabold tracking-wider transition shadow-brutalist-button active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isPlaying ? 'bg-retro-peach text-black' : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  <RefreshCw className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
                  <span>{isPlaying ? "STOP LOOPING" : "PLAY AUTO CHRONO LOOP"}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
