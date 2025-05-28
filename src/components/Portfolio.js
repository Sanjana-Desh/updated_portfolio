import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Star, Award, Heart, Menu, X, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Attendance Management System",
      description: "Real-time attendance tracking system with automated reporting and analytics dashboard",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Express", "Supabase", "JavaScript"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Naveen's Software Website",
      description: "Professional business website with modern design and responsive interface",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "DevOps Student Club Website",
      description: "Interactive club website with event management and member portal features",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      tech: ["React", "Next.js", "Tailwind", "Express"],
      github: "#",
      live: "#"
    },
    {
      title: "FinTrack - Financial Tracker",
      description: "Comprehensive financial tracking application to monitor credits, debits and expenses",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tech: ["React", "Supabase", "Python", "Machine Learning"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 85, icon: "🌐" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "React/Next.js", level: 85, icon: "⚛️" },
    { name: "Tailwind CSS", level: 88, icon: "🎨" },
    { name: "Express.js", level: 78, icon: "🚀" },
    { name: "Python", level: 82, icon: "🐍" },
    { name: "C/C++", level: 75, icon: "💻" },
    { name: "Supabase", level: 80, icon: "🗄️" },
    { name: "Machine Learning", level: 75, icon: "🤖" }
  ];

  const FloatingElement = ({ delay = 0, size = 'w-4 h-4', className = '' }) => (
    <div 
      className={`absolute animate-pulse ${size} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <FloatingElement 
            key={i} 
            delay={i * 0.5} 
            size={i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'}
            className="bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30"
          />
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl px-4 md:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                Sanjana Desh
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-4 py-2 transition-all duration-300 hover:text-cyan-400 ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/80'
                    } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 py-4 border-t border-white/10">
                <div className="flex flex-col space-y-4">
                  {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-left px-4 py-2 transition-all duration-300 hover:text-cyan-400 ${
                        activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/80'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Creative
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting next-generation digital experiences with cutting-edge technology, 
              innovative design, and a passion for pushing boundaries.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold flex items-center gap-3 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <Download className="w-5 h-5" />
                Download Resume
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Sanjana-Desh" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Mail, href: "mailto:sanjana0desh@gmail.com" }
                ].map(({ Icon, href }, index) => (
                  <a key={index} href={href} className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Icon className="w-5 md:w-6 h-5 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                I'm a passionate full-stack developer and AI enthusiast with a keen eye for design. 
                Currently pursuing Computer Science at Malnad College of Engineering, I specialize in creating 
                innovative solutions that blend cutting-edge technology with exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Award className="w-6 md:w-8 h-6 md:h-8" />, title: "CGPA 9.4", subtitle: "Academic Excellence" },
                  { icon: <Code className="w-6 md:w-8 h-6 md:h-8" />, title: "4+", subtitle: "Projects" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.title}</div>
                    <div className="text-sm md:text-base text-white/60">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white flex items-center gap-2">
                      <span className="text-xl md:text-2xl">{skill.icon}</span>
                      <span className="text-sm md:text-base">{skill.name}</span>
                    </span>
                    <span className="text-cyan-400 font-semibold text-sm md:text-base">{skill.level}%</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 md:h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, transitionDelay: `${index * 200}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${project.featured ? 'md:col-span-2' : ''}`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/10 border border-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-sm md:text-base hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-sm md:text-base hover:bg-white/20 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm always excited to collaborate on innovative projects 
            and discuss new opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: <Mail className="w-6 md:w-8 h-6 md:h-8" />, title: "Email", value: "sanjana0desh@gmail.com", href: "mailto:sanjana0desh@gmail.com" },
              { icon: <Phone className="w-6 md:w-8 h-6 md:h-8" />, title: "Phone", value: "+91 8073641226", href: "tel:+918073641226" },
              { icon: <Github className="w-6 md:w-8 h-6 md:h-8" />, title: "GitHub", value: "@Sanjana-Desh", href: "https://github.com/Sanjana-Desh" }
            ].map((contact, index) => (
              <a
                key={contact.title}
                href={contact.href}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-sm md:text-base text-white/70">{contact.value}</p>
              </a>
            ))}
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-white/50 focus:bg-white/20 focus:border-cyan-400 transition-all duration-300 focus:outline-none text-sm md:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-white/50 focus:bg-white/20 focus:border-cyan-400 transition-all duration-300 focus:outline-none text-sm md:text-base"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-white/50 focus:bg-white/20 focus:border-cyan-400 transition-all duration-300 focus:outline-none text-sm md:text-base"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-white/50 focus:bg-white/20 focus:border-cyan-400 transition-all duration-300 focus:outline-none resize-none text-sm md:text-base"
              />
              <button 
                onClick={() => alert('Contact functionality would be implemented with backend!')}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 text-sm md:text-base"
              >
                Send Message
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 