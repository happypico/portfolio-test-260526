import { GraduationCap, Languages, Star, CheckCircle, Smile } from "lucide-react";
import { educations, languages } from "../data";

export default function EducationAndLanguages() {
  return (
    <section 
      className="border-b-6 border-black bg-retro-cream py-16 px-4 md:py-24" 
      id="education-languages"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Main Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Academic Milestones (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div className="bg-white border-4 border-black p-6 sm:p-8 rounded-[2rem] shadow-brutalist h-full relative">
              
              {/* Floating aesthetic ring wires like a sketch notebook */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none -mt-10">
                {[1, 2, 3, 4, 5].map((r) => (
                  <div key={r} className="w-4 h-8 bg-black rounded-full border-2 border-white shadow-md"></div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-8 border-b-2 border-black pb-4 mt-2">
                <div className="p-2 bg-retro-yellow rounded-xl border-2 border-black">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-black uppercase leading-tight">
                    ACADEMIC LOGS
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">ANIMATOR EDUCATION DETAILS</span>
                </div>
              </div>

              {/* Education list with timeline connectors */}
              <div className="space-y-8 relative pl-6">
                {/* Connecting Line */}
                <div className="absolute left-[9px] top-2 bottom-2 w-[3px] bg-black"></div>

                {educations.map((edu, eIdx) => (
                  <div key={edu.id} className="relative group">
                    {/* Bullet circle */}
                    <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-retro-yellow border-2 border-black group-hover:bg-retro-orange transition duration-200"></div>

                    <div className="font-mono text-xs text-retro-orange font-bold uppercase mb-1">
                      {edu.period}
                    </div>

                    <h4 className="font-display font-extrabold text-xl text-black">
                      {edu.school}
                    </h4>
                    
                    <p className="font-grotesk font-extrabold text-sm text-gray-700 mt-1">
                      {edu.degree} · Major in <span className="text-black bg-retro-mint/40 px-1.5 py-0.5 rounded">{edu.major}</span>
                    </p>

                    {eIdx === 0 && (
                      <div className="mt-3.5 bg-retro-cream p-3 rounded-lg border border-dashed border-gray-300 text-xs font-sans text-gray-600">
                        ✨ 대표 애니메이션 제작 연구 및 프레임워크 설계 과정 이수
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Block: Language Skills (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="bg-retro-blue border-4 border-black p-6 sm:p-8 rounded-[2rem] shadow-brutalist h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 mb-8 border-b-2 border-black pb-4">
                  <div className="p-2 bg-white rounded-xl border-2 border-black">
                    <Languages className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-black uppercase leading-none">
                      LANGUAGES
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-950">GLOBAL STORYTELLING</span>
                  </div>
                </div>

                <p className="text-xs font-sans font-semibold text-blue-950 leading-relaxed mb-6">
                  다양한 애니메이션 수혜자들과의 교류 및 글로벌 프로덕션 파트너들과 어깨를 견줄 수 있는 어학 역량을 입증합니다.
                </p>

                {/* Star visual rating rows */}
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div 
                      key={lang.id} 
                      className="bg-white border-2 border-black p-3 rounded-xl flex items-center justify-between shadow-brutalist-button"
                    >
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-retro-orange" />
                        <span className="font-display font-bold text-black text-md">
                          {lang.name}
                        </span>
                      </div>

                      {/* Outlined stars representation */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((sIdx) => {
                          const isFilled = sIdx <= lang.stars;
                          return (
                            <Star 
                              key={sIdx}
                              className={`w-4 h-4 text-black ${
                                isFilled ? 'fill-retro-yellow animate-shake-tiny' : 'fill-none'
                              }`} 
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct character note footer */}
              <div className="mt-8 bg-white border-2 border-black p-4 rounded-xl flex gap-3 items-center">
                <Smile className="w-8 h-8 text-retro-orange inline shrink-0" />
                <p className="text-[11px] font-sans font-medium text-black leading-snug">
                  <b>GLOBAL CASTING NOTE:</b> 원활한 커뮤니케이션을 통해 제작 프로세싱 조율 및 해외 프로젝트 수주 조력 가능.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
