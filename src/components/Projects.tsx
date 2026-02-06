import { useState } from 'react';
import { ExternalLink, Github, Calendar, Star, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Enhanced projects array with more detailed information
  const projects = [
    {
      id: 1,
      title: "Feedback Dashboard",
      description: "UI to give feedback to the employees from the manager End to end POC",
      image: "feedbackDashboard.png",
      tech: ["React", "javascript", "MUI", "Python", "Flask", "MongoDB", "Render"],
      githubUrl: "https://github.com/Rithik-gokul/feedback",
      liveUrl: "https://feedback-dashboard-71id.onrender.com/",
      date: "2025",
      category: "fullstack",
      featured: true,
      highlights: ["Responsive", "full-scale", "Modern"] 
    },
    {
      id: 2,
      title: "Hotel Booking Demo",
      description: "UI for a basic hotel booking app with filter and data fetched by using API made using React",
      image: "project_booking.png",
      tech: ["React", "javascript", "MUI"],
      githubUrl: "https://github.com/Rithik-gokul/Hotel-Booking-Demo",
      liveUrl: "https://rithik-gokul.github.io/Hotel-Booking-Demo/",
      date: "2023",
      category: "frontend",
      featured: true,
      highlights: ["Responsive", "Smooth", "Modern"] 
    },
  ];

  const categories = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Projects</span>
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          {/* Category Filter - Mobile Horizontal Scroll */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {/* Mobile: Horizontal scroll */}
            <div className="sm:hidden">
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex-shrink-0 flex items-center space-x-1 px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs ${
                      filter === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                    }`}
                  >
                    <Filter className="w-3 h-3" />
                    <span>{category.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      filter === category.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet and Desktop: Centered layout */}
            <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                    filter === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    filter === category.id ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-500" />
                Featured Projects
              </h3>
              
              {/* Mobile: Vertical scroll */}
              <div className="lg:hidden">
                <div className="space-y-6">
                  {featuredProjects.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 flex flex-col space-y-2">
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                          <span className="px-2 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.date}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                        
                        {/* Project Highlights */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.highlights.map((highlight, index) => (
                            <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              ✓ {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-col space-y-3">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 flex flex-row space-x-2">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Project Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            ✓ {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-6 sm:mb-8">Other Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {otherProjects.map((project) => (
                  <div key={project.id} className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="relative mb-3 sm:mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-28 sm:h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-white/90 text-gray-600 text-xs font-medium rounded-full flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </div>
                      <span className="text-xs text-gray-500 capitalize">{project.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;