import { useState, FormEvent } from "react";
import { Mail, Phone, Globe, MapPin, Check, Copy, Heart, Send, Sparkles } from "lucide-react";
import { contactInfo } from "../data";
import workspaceImage from "../assets/images/creative_workspace_1779793796715.png";

export default function Footer() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && emailInput.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setMessage("");
        setEmailInput("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-retro-yellow border-t-6 border-black relative overflow-hidden bg-dot-grid" id="contact">
      
      {/* Upper Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-retro-orange border-3 border-black font-mono font-bold text-xs uppercase px-3 py-1 text-white rounded shadow-brutalist mb-3 inline-flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-4 h-4 text-white hover:rotate-12 transition" /> START A PROJECT
          </div>
          <h2 
            className="text-5xl md:text-7xl font-display font-extrabold text-black uppercase mb-3"
            style={{
              WebkitTextStroke: "2px #000000",
              textShadow: "4px 4px 0px #FDFBF7"
            }}
          >
            LET'S MAKE IT MOVE!
          </h2>
          <p className="text-black font-semibold font-grotesk max-w-xl mx-auto">
            새로운 아이디어, 브랜드 컬래버레이션 등 독창적인 움직임이 필요한 프로젝트라면 언제든지 연락해주세요!
          </p>
          <div className="w-32 h-1 bg-black rounded-full mt-3"></div>
        </div>

        {/* Bento Grid layout combining Contact Form & Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hand-crafted workspace image with border & quick copy tags (5 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between">
            <div className="bg-white border-4 border-black p-4 rounded-[2.2rem] shadow-brutalist-lg relative overflow-hidden group">
              {/* Image banner with high contrast comic borders */}
              <div className="relative border-2 border-black rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src={workspaceImage} 
                  alt="Animation Studio Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label Tag Overlay */}
                <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono px-2 py-0.5 rounded border border-white">
                  STUDIO_VIEW.PNG
                </div>
              </div>

              {/* Workspace label */}
              <div className="mt-4 text-center">
                <span className="font-display font-extrabold text-lg text-black block">
                  Hong Eunyoung's Animator Workspace
                </span>
                <span className="text-[11px] font-sans font-medium text-gray-500 block mt-1">
                  창의적인 아이디어가 현실의 프레임으로 피어나는 상상의 집합체
                </span>
              </div>
            </div>

            {/* Quick parameter direct links */}
            <div className="bg-white border-3 border-black p-6 rounded-2xl shadow-brutalist mt-6 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block font-bold mb-2">
                DIRECT CONTACT BOARD
              </span>

              {/* Contact copying entries */}
              <div className="flex items-center justify-between p-2.5 bg-retro-cream border border-black rounded-xl">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-retro-orange shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold font-grotesk text-black truncate select-all">
                    {contactInfo.email}
                  </span>
                </div>
                <button 
                  onClick={() => handleCopy(contactInfo.email, "email")}
                  className="p-1 px-3 bg-black hover:bg-gray-900 text-white rounded-lg text-[10px] font-bold uppercase shrink-0 hover:scale-95 transition"
                >
                  {copiedText === "email" ? "COPIED!" : "COPY"}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-retro-cream border border-black rounded-xl">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-retro-orange shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold font-grotesk text-black truncate select-all">
                    {contactInfo.phone}
                  </span>
                </div>
                <button 
                  onClick={() => handleCopy(contactInfo.phone, "phone")}
                  className="p-1 px-3 bg-black hover:bg-gray-900 text-white rounded-lg text-[10px] font-bold uppercase shrink-0 hover:scale-95 transition"
                >
                  {copiedText === "phone" ? "COPIED!" : "COPY"}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-retro-cream border border-black rounded-xl">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-retro-orange shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold font-grotesk text-black truncate">
                    {contactInfo.website}
                  </span>
                </div>
                <a 
                  href={`https://${contactInfo.website}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1 px-3 bg-retro-mint hover:bg-emerald-400 text-black border border-black rounded-lg text-[10px] font-bold uppercase shrink-0 text-center"
                >
                  OPEN
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Whimsical Quick Messaging board (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white border-4 border-black p-6 sm:p-8 rounded-[2.2rem] shadow-brutalist h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-1">
                  DIRECT MEMO TO THE STUDIO
                </h3>
                <p className="text-xs font-sans text-gray-500 mb-6 leading-relaxed">
                  애니메이터 홍은영에게 협업 및 질문 등 다이렉트 쪽지를 전해보세요. 입력 정보는 시뮬레이션으로 전송 상태를 즉각 보여줍니다!
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4" id="contact-form">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-black block uppercase">
                      EMAIL ADDRESS OR PHONE
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. green_x@naver.com" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-retro-cream border-2 border-black p-3.5 rounded-xl font-mono text-sm focus:outline-none focus:bg-white transition shadow-brutalist-button"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-black block uppercase">
                      MESSAGE DETAILS
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="이곳에 기우가 가득한 모션 그래픽 기획 및 캐릭터 애니메이션 제작 제안을 적어주세요!" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-retro-cream border-2 border-black p-3.5 rounded-xl font-sans text-sm focus:outline-none focus:bg-white transition shadow-brutalist-button resize-none"
                    />
                  </div>

                  {/* Submission output banner */}
                  {formSubmitted ? (
                    <div className="bg-retro-mint border-2 border-black p-4 rounded-xl flex items-center gap-2 select-none">
                      <Check className="w-5 h-5 text-emerald-800 shrink-0" />
                      <span className="text-xs font-sans font-bold text-emerald-950">
                        🎬 <b>송출 완료!</b> 시뮬레이션 전송이 완료되었습니다. 메일로 신속히 화답하겠습니다!
                      </span>
                    </div>
                  ) : (
                    <button 
                      type="submit"
                      className="w-full py-3 bg-retro-orange hover:bg-red-500 text-white font-display font-extrabold text-sm tracking-wider rounded-xl border-2 border-black shadow-brutalist-button active:translate-y-0.5 active:shadow-none transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 fill-current text-white" />
                      <span>SHOOT MESSAGE</span>
                    </button>
                  )}
                </form>
              </div>

              {/* Extra visual metadata block */}
              <div className="mt-8 border-t-2 border-black pt-6 flex flex-col sm:flex-row justify-between items-center bg-retro-cream p-4 rounded-xl border border-dashed border-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black"></div>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-black">
                    SYSTEM: STABLE_AND_CONNECTED
                  </span>
                </div>
                <div className="text-[10px] font-mono text-gray-400 mt-2 sm:mt-0 uppercase">
                  UTC TIME: 2026-05-26 11:12
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-16 pt-8 border-t-3 border-black flex flex-col md:flex-row md:items-center md:justify-between text-center gap-4 text-xs font-mono text-gray-700">
          <span>
            © 2026 HONG EUNYOUNG. ALL DESIGN CEL STRUCTURES RESERVED.
          </span>
          <div className="flex justify-center items-center gap-1.5 select-none">
            <span>Hand-crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-retro-orange text-retro-orange animate-pulse" />
            <span>in Seoul, South Korea</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
