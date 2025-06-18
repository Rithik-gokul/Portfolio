import { useState } from 'react';
import { ExternalLink, Github, Calendar, Star, Plus, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Enhanced projects array with more detailed information
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution with advanced features including user authentication, payment processing, inventory management, and real-time analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      category: "fullstack",
      featured: true,
      highlights: ["100k+ users", "99.9% uptime", "50% faster loading"]
    },
    {
      id: 2,
      title: "AI-Powered Task Management",
      description: "Intelligent task management application with AI-driven prioritization, natural language processing for task creation, and team collaboration features with real-time updates.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Python", "FastAPI", "OpenAI", "Firebase", "TensorFlow"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      category: "ai",
      featured: true,
      highlights: ["AI-powered insights", "Real-time collaboration", "Smart automation"]
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Advanced analytics dashboard with real-time data visualization, customizable widgets, and automated reporting for business intelligence.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "D3.js", "MongoDB", "Socket.io", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      category: "frontend",
      featured: false,
      highlights: ["Real-time updates", "Interactive charts", "Custom widgets"]
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description: "Scalable microservices architecture with containerization, API gateway, service mesh, and comprehensive monitoring and logging.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Node.js", "Docker", "Kubernetes", "MongoDB", "Redis", "Nginx"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023",
      category: "backend",
      featured: false,
      highlights: ["Highly scalable", "Auto-scaling", "99.9% uptime"]
    },
    {
      id: 5,
      title: "Mobile-First PWA",
      description: "Progressive Web Application with offline functionality, push notifications, and native-like performance across all devices.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Service Workers", "IndexedDB", "Workbox"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023",
      category: "mobile",
      featured: false,
      highlights: ["Offline support", "Push notifications", "Native experience"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-500" />
                Featured Projects
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 flex space-x-2">
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
                          className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
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
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Other Projects</h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <div key={project.id} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="relative mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-white/90 text-gray-600 text-xs font-medium rounded-full flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
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
                          <Github className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <span className="text-xs text-gray-500 capitalize">{project.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add New Project CTA */}
          {/* <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
              <Plus className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Want to Add a New Project?</h3>
              <p className="text-blue-100 mb-6">
                Simply update the projects array in the Projects component to showcase your latest work!
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-left">
                <code className="text-sm text-blue-200">
                  // Add your project to the projects array<br/>
                  // All fields are customizable and the layout will adapt automatically
                </code>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;