import { User, MapPin, Calendar, Award, Code, Coffee, Target, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "5+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "24/7", label: "Problem Solver", icon: <Coffee className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Crafting Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Excellence</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Personal Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Professional Profile</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-semibold text-gray-800">Gokul Rithik N V N</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800">Nellore, AP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-800">1+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Award className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="font-semibold text-gray-800">CS Degree</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                      <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced About Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl text-gray-800 font-medium">
                    I'm a passionate Full Stack Developer who believes in the power of technology 
                    to transform ideas into impactful digital experiences.
                  </p>
                  
                  <p>
                    With over 1 year of experience in the industry, I've had the privilege of working 
                    with diverse teams and clients, from innovative startups to established enterprises. 
                    My journey began with a curiosity about how websites work, which evolved into a 
                    deep passion for creating meaningful digital solutions.
                  </p>
                  
                  <p>
                    I specialize in modern web technologies including React, Node.js, Python and flask, 
                    with a strong focus on creating scalable, maintainable, and user-friendly applications. 
                    I'm particularly passionate about clean code architecture, performance optimization, 
                    and delivering exceptional user experiences.
                  </p>
                  
                  <p>
                    Beyond coding, I'm an advocate for continuous learning and staying current with 
                    emerging technologies. I actively contribute to open-source projects, mentor 
                    junior developers, and enjoy sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-7 h-7 mr-3" />
                  Core Values & Approach
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-blue-200" />
                    <span className="font-medium">Clean, Maintainable Code</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-blue-200" />
                    <span className="font-medium">User-Centered Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-200" />
                    <span className="font-medium">Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5 text-blue-200" />
                    <span className="font-medium">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;