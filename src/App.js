import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiExternalLink, FiPower } from 'react-icons/fi';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';
import VintageMonitor from './components/VintageMonitor';
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOn, setProfileOn] = useState(true); // <-- new state

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "PORTFOLIO SAYA",
      description: "Personal portfolio website with modern design and smooth animations",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
    },
    {
      title: "EDUCATION",
      description: "Educational platform with interactive learning modules",
      tags: ["React", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900"
    },
    {
      title: "EXPERTISE",
      description: "Showcase of technical skills and professional experience",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900"
    },
    {
      title: "IMMOURSSTUDIO",
      description: "Creative studio website with stunning visual effects",
      tags: ["React", "Three.js", "GSAP"],
      image: "bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-900"
    },
    {
      title: "ADMIN WORK",
      description: "Admin dashboard with comprehensive data management",
      tags: ["React", "Material-UI", "Firebase"],
      image: "bg-gradient-to-br from-green-600 via-teal-700 to-blue-900"
    },
    {
      title: "WEBSITE IMMOURSSTUDIO",
      description: "Full-stack web application with modern architecture",
      tags: ["React", "Express", "PostgreSQL"],
      image: "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900"
    },
    {
      title: "MANPRICE",
      description: "E-commerce platform with advanced features",
      tags: ["Next.js", "Stripe", "Tailwind"],
      image: "bg-gradient-to-br from-orange-600 via-red-700 to-pink-900"
    },
    {
      title: "VISION YOUR ENVIRONMENT",
      description: "Environmental awareness platform with interactive maps",
      tags: ["React", "Mapbox", "D3.js"],
      image: "bg-gradient-to-br from-emerald-600 via-green-700 to-teal-900"
    }
  ];

  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  JAJANG ROHMANUDIN
                </h1>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-3">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                    PORTFOLIO SAYA
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    JAJANG
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">ROHMANUDIN</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Freelance Web Developer & Frontend Engineer
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Passionate about creating beautiful, functional, and user-friendly websites. 
                  Specialized in modern web technologies and responsive design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition"
                  >
                    View Projects
                  </a>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:jrnurdin277@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FiMail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="w-72 h-72 md:w-96 md:h-96 relative">
                  <div className="absolute inset-0 rounded-3xl shadow-xl bg-white dark:bg-gray-800">
                    <VintageMonitor defaultOn={profileOn} size="large">
                      <img
                        src="/profile.jpg"
                        alt="Jajang Rohmanudin"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%234F46E5' width='400' height='400'/%3E%3Ctext fill='white' font-size='120' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EJR%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </VintageMonitor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Learn more about my journey and expertise
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuously learning and staying updated with the latest web technologies and best practices.
                </p>
              </div>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Freelance developer with experience in building responsive and modern web applications.
                </p>
              </div>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Specialized in React, Tailwind CSS, and creating seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technologies and tools I work with
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
                  >
                    <Icon className={`text-6xl ${skill.color} mb-4`} />
                    <p className="font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore some of my recent work and projects
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <FiExternalLink className="w-6 h-6 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind? Let's work together!
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jrnurdin277@gmail.com"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FiMail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <FiGithub className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400">
                © 2024 Jajang Rohmanudin. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="mailto:jrnurdin277@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
