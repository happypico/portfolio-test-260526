import { motion } from "motion/react";
import { Sparkles, ArrowDown, Film, Layers, Star, Play, Award } from "lucide-react";
import { contactInfo } from "../data";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("profile-about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b-6 border-black bg-retro-yellow py-12 md:py-24 px-4 bg-dot-grid" id="hero">
      {/* Decorative Floating Retro Tags */}
      <div className="absolute top-4 left-4 md:top-8 md:on-desktop md:left-12 rotate-[-6deg] hidden sm:flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full border-2 border-white text-xs md:text-sm font-mono shadow-brutalist z-10">
        <Film className="w-4 h-4 text-retro-mint animate-spin" style={{ animationDuration: '6s' }} />
        <span>FPS: 24 | KEY_READY</span>
      </div>

      <div className="absolute top-6 right-4 md:right-12 rotate-[4deg] hidden sm:flex items-center gap-2 bg-retro-mint text-black px-4 py-1.5 rounded-lg border-2 border-black text-xs md:text-sm font-mono font-bold shadow-brutalist z-10">
        <Sparkles className="w-4 h-4 text-retro-orange animate-bounce" />
        <span>CEL_ARTIST: ACTIVE</span>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10 py-8">
        {/* Animated Cute Title Tag */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="mb-6 bg-retro-orange border-3 border-black text-white px-6 py-2 rounded-xl text-sm md:text-lg font-bold font-grotesk tracking-widest shadow-brutalist select-none uppercase inline-flex items-center gap-2"
        >
          <Star className="w-5 h-5 fill-current text-retro-yellow animate-pulse" />
          CREATIVE ANIMATION WORLD
          <Star className="w-5 h-5 fill-current text-retro-yellow animate-pulse" />
        </motion.div>

        {/* Name Header with Shifted Outlined 3D Drop Shadow */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-9xl font-display font-extrabold text-white tracking-tighter relative select-none uppercase mb-2"
          style={{
            WebkitTextStroke: "3px #000000",
            textShadow: "6px 6px 0px #000000"
          }}
        >
          HONG EUNYOUNG
        </motion.h1>

        {/* Role Subtitle with beautiful badge */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="relative inline-block mt-3 mb-10"
        >
          <span 
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-retro-mint bg-black px-8 py-3 rounded-2xl border-4 border-white inline-block shadow-brutalist tracking-wider"
          >
            ANIMATOR
          </span>
          
          <div className="absolute -bottom-5 -right-6 rotate-[12deg] bg-retro-peach text-black border-2 border-black font-mono font-extrabold text-[10px] md:text-xs px-2 py-1 rounded shadow-brutalist uppercase select-none flex items-center gap-1">
            <Award className="w-3 h-3 text-retro-orange" />
            2D SPECIALIST
          </div>
        </motion.div>

        {/* Catchphrase & Bio Intro snippet */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl text-black font-grotesk font-semibold max-w-2xl bg-white border-3 border-black p-4 rounded-2xl shadow-brutalist leading-relaxed"
        >
          "I help visual stories stand out through rich emotions and dynamic, fluid cels."
          <br />
          <span className="text-sm md:text-base font-normal font-sans text-gray-700 mt-2 block">
            📍 Based in {contactInfo.location} · 📧 {contactInfo.email}
          </span>
        </motion.p>

        {/* Retro Styled Control Buttons */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg"
        >
          <button 
            onClick={scrollToAbout}
            id="hero-btn-profile"
            className="group w-full sm:w-auto relative cursor-pointer bg-retro-orange text-white border-3 border-black px-8 py-4 rounded-2xl text-lg font-display font-bold tracking-wide shadow-brutalist transition bg-cover hover:-translate-y-1 active:translate-y-0 active:shadow-none inline-flex items-center justify-center gap-2"
          >
            <span>PROFILE SCREEN</span>
            <Play className="w-5 h-5 fill-current text-white group-hover:scale-125 transition" />
          </button>

          <a 
            href={`mailto:${contactInfo.email}`}
            id="hero-btn-contact"
            className="w-full sm:w-auto text-center cursor-pointer bg-white text-black border-3 border-black px-8 py-4 rounded-2xl text-lg font-display font-bold tracking-wide shadow-brutalist hover:bg-retro-cream transition hover:-translate-y-1 active:translate-y-0 active:shadow-none inline-flex items-center justify-center gap-2"
          >
            <span>LET'S TALK!</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-retro-orange"></span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-1 z-10" onClick={scrollToAbout} id="hero-scroll-down">
        <span className="text-[10px] font-mono font-bold tracking-widest text-black bg-white px-2 py-0.5 rounded border border-black uppercase shadow-brutalist-button">Scroll Down</span>
        <div className="bg-white border-2 border-black p-1.5 rounded-full shadow-brutalist-button">
          <ArrowDown className="w-5 h-5 text-black" />
        </div>
      </div>
    </section>
  );
}
