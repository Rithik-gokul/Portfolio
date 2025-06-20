import { Code, Database, Cloud, Palette, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "MUI", level: 70 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Redux-saga", level: 95 }
      ]
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Backend Development",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "Python", level: 80 },
        { name: "flask", level: 75 },
        { name: "Node.js", level: 65 },
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "DevOps & Cloud",
      skills: [
        { name: "Amazon SQS", level: 75 },
        { name: "Amazon EC2", level: 65 },
        { name: "Amazon S2", level: 70 },
        { name: "CI/CD", level: 65 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: "VS Code", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: "Postman", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { name: "Figma", icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Mobile Vertical Scroll */}
          <div className="mb-12 sm:mb-16">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {skillCategories.map((category, index) => (
                  <div key={index} className="flex-shrink-0 w-72 bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                            <span className="text-blue-600 font-semibold text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet and Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium text-sm lg:text-base">{skill.name}</span>
                          <span className="text-blue-600 font-semibold text-sm lg:text-base">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-6 sm:mb-8">Favorite Tools</h3>
            
            {/* Mobile: 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-blue-600">{tool.icon}</div>
                  <span className="text-gray-700 font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Tablet and Desktop: Horizontal layout */}
            <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-blue-600">{tool.icon}</div>
                  <span className="text-gray-700 font-medium text-base">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;