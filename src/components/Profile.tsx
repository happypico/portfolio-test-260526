import { useState } from "react";
import { Copy, Check, Mail, Phone, Globe, MapPin, Sparkles, Smile } from "lucide-react";
import { contactInfo, profileText } from "../data";
import avatarImage from "../assets/images/hong_avatar_1779793773936.png";

export default function Profile() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 1800);
  };

  return (
    <section 
      className="border-b-6 border-black bg-retro-cream py-16 px-4 md:py-24"
      id="profile-about"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-retro-peach border-3 border-black font-mono font-bold text-xs uppercase px-3 py-1 rounded shadow-brutalist mb-3 inline-flex items-center gap-1.5">
            <Smile className="w-4 h-4 text-retro-orange inline" /> Who is she?
          </div>
          <h2 
            className="text-5xl md:text-7xl font-display font-extrabold text-black uppercase select-none mb-3"
            style={{
              WebkitTextStroke: "2px #000000",
              textShadow: "4px 4px 0px #FFB399"
            }}
          >
            ARTIST PROFILE
          </h2>
          <div className="w-32 h-1 bg-black rounded-full mt-2"></div>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: The Avatar Frame (4 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Retro Film border style */}
              <div className="absolute -inset-2 bg-black rounded-[2.5rem] rotate-[-2deg] transition group-hover:rotate-0"></div>
              
              <div 
                className="relative bg-white border-4 border-black p-4 rounded-[2.2rem] transition-all rotate-[2deg] group-hover:rotate-0 shadow-brutalist-xl overflow-hidden aspect-square max-w-sm"
              >
                {/* Vintage camera lens decorations */}
                <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-500 border border-black animate-pulse"></div>
                <div className="absolute top-4 right-4 text-[9px] font-mono tracking-wider text-gray-400">REC 24fps</div>
                
                <img 
                  src={avatarImage} 
                  alt="Hong Eunyoung Avatar" 
                  className="w-full h-full object-cover rounded-[1.5rem] border-2 border-black"
                  referrerPolicy="no-referrer"
                />

                {/* Director clapper tag overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-lg border border-white text-xs font-mono tracking-widest uppercase">
                  CUT 01 // SCENE 01
                </div>
              </div>
            </div>

            {/* Micro speech bubble details */}
            <div className="mt-8 bg-black text-retro-cream p-4 rounded-2xl border-2 border-white max-w-xs relative text-sm shadow-brutalist animate-shake-tiny">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black"></div>
              <p className="font-semibold text-center leading-normal">
                "움직임은 단순한 프레임의 합이 아닌, 마음의 파동을 전달하는 도구입니다."
              </p>
            </div>
          </div>

          {/* Right Block: Content, Bios & Contacts (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* The Whimsical Speech Bubble Bio */}
            <div className="bg-white border-4 border-black p-6 md:p-8 rounded-[2rem] shadow-brutalist relative">
              {/* Whimsical star sparkles */}
              <div className="absolute -top-4 -right-4 bg-retro-yellow border-2 border-black p-2 rounded-full shadow-brutalist z-10 animate-bounce">
                <Sparkles className="w-5 h-5 text-black" fill="currentColor" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-4 flex items-center gap-2">
                <span>안녕하세요, 홍은영입니다!</span>
              </h3>
              
              <p className="text-gray-800 text-sm md:text-base leading-relaxed font-sans font-medium whitespace-pre-wrap">
                {profileText}
              </p>
            </div>

            {/* Quick Interactive Contact Cards inside brutalist row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <div 
                className="bg-retro-mint border-3 border-black p-4 rounded-2xl shadow-brutalist flex flex-col justify-between group hover:-translate-y-1 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-900">EMAIL ADDRESS</span>
                    <Mail className="w-4 h-4 text-emerald-900 group-hover:scale-110 transition" />
                  </div>
                  <div className="font-grotesk font-bold text-black break-all select-all">
                    {contactInfo.email}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.email, "email")}
                  className="mt-4 flex items-center justify-center gap-1.5 py-1.5 bg-black text-white hover:bg-gray-900 active:scale-95 transition text-xs font-bold uppercase rounded-xl cursor-pointer border-2 border-transparent hover:border-black"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-retro-mint" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY MAIL</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div 
                className="bg-retro-peach border-3 border-black p-4 rounded-2xl shadow-brutalist flex flex-col justify-between group hover:-translate-y-1 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-red-950">CONTACT NUMBER</span>
                    <Phone className="w-4 h-4 text-red-950 group-hover:scale-110 transition" />
                  </div>
                  <div className="font-grotesk font-bold text-black select-all text-lg">
                    {contactInfo.phone}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                  className="mt-4 flex items-center justify-center gap-1.5 py-1.5 bg-black text-white hover:bg-gray-900 active:scale-95 transition text-xs font-bold uppercase rounded-xl cursor-pointer border-2 border-transparent hover:border-black"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-retro-peach" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY PHONE</span>
                    </>
                  )}
                </button>
              </div>

              {/* Website Card */}
              <a 
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noreferrer"
                className="bg-retro-blue border-3 border-black p-4 rounded-2xl shadow-brutalist flex flex-col justify-between group hover:-translate-y-1 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-blue-950">OFFICIAL WEBSITE</span>
                    <Globe className="w-4 h-4 text-blue-950 group-hover:rotate-12 transition" />
                  </div>
                  <div className="font-grotesk font-bold text-black group-hover:underline text-sm md:text-base break-all">
                    {contactInfo.website}
                  </div>
                </div>
                <div 
                  className="mt-4 text-center py-1.5 bg-black text-white hover:bg-gray-900 transition text-xs font-bold uppercase rounded-xl"
                >
                  OPEN LINK
                </div>
              </a>

              {/* Location Card */}
              <div 
                className="bg-retro-yellow border-3 border-black p-4 rounded-2xl shadow-brutalist flex flex-col justify-between group hover:-translate-y-1 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-950">CURRENT RESIDENCE</span>
                    <MapPin className="w-4 h-4 text-amber-950 group-hover:animate-bounce transition" />
                  </div>
                  <div className="font-grotesk font-bold text-black text-lg">
                    {contactInfo.location}
                  </div>
                </div>
                <div 
                  className="mt-4 text-center py-1.5 bg-black text-black bg-white border-2 border-black transition text-xs font-bold uppercase rounded-xl cursor-default select-none"
                >
                  SEOUL, KOREA
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
