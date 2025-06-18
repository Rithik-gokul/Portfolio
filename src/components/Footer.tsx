import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">GR</span>
                </div>
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold">Gokul Rithik</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Passionate Full Stack Developer creating exceptional digital experiences 
                through clean code and innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:block sm:space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base block"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold">Let's Connect</h4>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/Rithik-gokul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gokul-rithik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:rithikgokul200@gmail.com"
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Gokul Rithik. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span>and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;