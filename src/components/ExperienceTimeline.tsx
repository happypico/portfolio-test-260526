import { motion } from "motion/react";
import { Film, Briefcase, Sparkles, FolderKanban, CheckSquare } from "lucide-react";
import { workExperience } from "../data";

export default function ExperienceTimeline() {
  return (
    <section 
      className="border-b-6 border-black bg-retro-peach py-16 px-4 md:py-24 relative overflow-hidden" 
      id="experience"
    >
      {/* Whimsical background decorative items */}
      <div className="absolute top-24 left-10 rotate-12 opacity-30 hidden lg:block select-none pointer-events-none">
        <Film className="w-16 h-16 text-black" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-black text-retro-cream border-2 border-white font-mono text-xs uppercase px-3 py-1 rounded shadow-brutalist mb-3 inline-flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-retro-mint" /> EXPERIENCE
          </div>
          <h2 
            className="text-5xl md:text-7xl font-display font-extrabold text-black uppercase select-none mb-3"
            style={{
              WebkitTextStroke: "2px #000000",
              textShadow: "4px 4px 0px #FDFBF7"
            }}
          >
            ANIMATION REEL CELS
          </h2>
          <p className="text-black font-semibold font-grotesk mt-2">
            홍은영 애니메이터가 지나온 빛나는 발자국과 스토리보드 라인업
          </p>
          <div className="w-32 h-1 bg-black rounded-full mt-3"></div>
        </div>

        {/* Storyboard Block Sequence */}
        <div className="space-y-12">
          {workExperience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Visual Circle Indicator Block (3 cols on lg) */}
                <div className={`lg:col-span-3 flex lg:flex-col items-center gap-4 ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                  {/* Styled Circle Number Tag resembling director clappers */}
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-retro-yellow text-black border-4 border-black flex items-center justify-center font-display font-black text-2xl sm:text-3xl shadow-brutalist-button select-none shrink-0"
                    style={{
                      textShadow: "2px 2px 0px #ffffff"
                    }}
                  >
                    0{index + 1}
                  </div>
                  
                  {/* Period Tag on side */}
                  <div className="text-right flex flex-col items-start lg:items-end font-mono">
                    <span className="bg-black text-white px-3 py-1 text-xs font-bold rounded shadow-brutalist-button inline-block uppercase">
                      {exp.period}
                    </span>
                    <span className="text-xs text-black font-semibold mt-1.5 tracking-wider hidden lg:block">
                      {exp.company === "Studio Motion Lab" ? "⚡️ SENIOR LEVEL" : "🎬 CREATOR"}
                    </span>
                  </div>
                </div>

                {/* Main Content Card (9 cols on lg) */}
                <div 
                  className="lg:col-span-9 bg-white border-4 border-black p-6 sm:p-8 rounded-[2rem] shadow-brutalist-xl relative"
                >
                  {/* Decorative film sprocket holes on left and right for an authentic physical asset feeling */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 flex flex-col gap-2 pointer-events-none">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-2.5 h-4 bg-retro-peach rounded-sm border border-black"></div>
                    ))}
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-3.5 flex flex-col gap-2 pointer-events-none">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-2.5 h-4 bg-retro-peach rounded-sm border border-black"></div>
                    ))}
                  </div>

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-3 border-black pb-4 mb-4">
                    <div>
                      <h3 className="font-display font-extrabold text-2xl md:text-3xl text-retro-orange flex items-center gap-1.5 leading-none">
                        <span>{exp.company}</span>
                      </h3>
                      <h4 className="font-grotesk font-extrabold text-black text-lg mt-1.5">
                        {exp.role}
                      </h4>
                    </div>

                    <div className="bg-retro-mint text-black border-2 border-black font-mono font-bold text-xs uppercase px-2.5 py-1 rounded inline-flex items-center gap-1 shrink-0 self-start sm:self-center">
                      <FolderKanban className="w-3.5 h-3.5" /> STAGE_{index + 1}
                    </div>
                  </div>

                  {/* High level description */}
                  <p className="text-sm md:text-base font-sans font-semibold text-gray-800 bg-retro-cream p-4 rounded-xl border border-dashed border-gray-400 mb-6">
                    {exp.description}
                  </p>

                  {/* Bullet points detailing experience */}
                  <div className="space-y-3.5 mb-6">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <CheckSquare className="w-5 h-5 text-retro-orange shrink-0 mt-0.5" />
                        <span className="font-sans text-sm md:text-base font-semibold text-gray-700 leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mr-2">
                      TOOLS IN CEL:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-retro-cream text-black font-mono px-2.5 py-1 text-xs font-semibold rounded-lg border border-black shadow-brutalist-button"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
