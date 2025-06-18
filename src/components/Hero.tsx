import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Gokul%20Rithik%20Resume.pdf";
    link.download = "Gokul Rithik Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-40'
        }
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Enhanced Animation */}
          {/* <div className="mb-8 animate-fade-in">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JS</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-white animate-pulse"></div>
            </div>
          </div> */}

          {/* Enhanced Main Content */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Gokul Rithik N V N
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-300 text-base mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nellore, AP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>1+ Years Experience</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-slide-up animation-delay-200 font-semibold">
              Full Stack Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
              Crafting exceptional digital experiences through
              <span className="text-blue-300 font-semibold"> clean code</span>,
              <span className="text-purple-300 font-semibold">
                {" "}
                innovative solutions
              </span>
              , and
              <span className="text-pink-300 font-semibold">
                {" "}
                user-centered design
              </span>
            </p>

            {/* Simplified Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-8 animate-slide-up animation-delay-600">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-blue-300 text-xs">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  100%
                </div>
                <div className="text-purple-300 text-xs">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  1+
                </div>
                <div className="text-pink-300 text-xs">Years</div>
              </div>
            </div>

            {/* Social Links with Enhanced Styling */}
            <div className="flex justify-center space-x-4 mb-8 animate-slide-up animation-delay-800">
              <a
                href="https://github.com/Rithik-gokul"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/gokul-rithik"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" />
              </a>
              <a
                href="mailto:rithikgokul2003@gmail.com"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" />
              </a>
            </div>

            {/* Enhanced CTA Buttons - Better Spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-1000">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Let's Work Together</span>
              </button>
              <button
                onClick={downloadResume}
                className="group px-6 py-3 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 py-3 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="group p-2 text-white/70 hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <div className="flex flex-col items-center space-y-1">
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            <div className="w-px h-6 bg-gradient-to-b from-white/70 to-transparent"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
