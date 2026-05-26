import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationAndLanguages from "./components/EducationAndLanguages";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-retro-cream text-black font-sans selection:bg-retro-orange selection:text-white">
      {/* Mini Retro Top Indicator line */}
      <div className="w-full h-2.5 bg-black flex overflow-hidden">
        <div className="w-1/4 h-full bg-retro-orange"></div>
        <div className="w-1/4 h-full bg-retro-yellow"></div>
        <div className="w-1/4 h-full bg-retro-mint"></div>
        <div className="w-1/4 h-full bg-retro-blue"></div>
      </div>

      {/* Main Single-Page Sequence Layout */}
      <main className="w-full flex flex-col">
        {/* Hero Banner Section */}
        <Hero />

        {/* Profile & Copy Action Card Details */}
        <Profile />

        {/* Interactive lightboard Frame Slider Skills */}
        <Skills />

        {/* Stories Line Sequential Experience */}
        <ExperienceTimeline />

        {/* Education Diploma and Voices Bento Blocks */}
        <EducationAndLanguages />

        {/* Custom Form and Studio workspace contact card */}
        <Footer />
      </main>
    </div>
  );
}
