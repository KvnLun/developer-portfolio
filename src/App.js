import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code2,
  Briefcase,
  User,
  Home,
  Menu,
  X,
  ChevronDown,
  Terminal,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Zap,
  Award,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Sparkles,
  Origami,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [projectFilter, setProjectFilter] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const fullText =
    "COBOL & Java Developer | WebServices & Microservices Expert";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      name: "COBOL",
      icon: <Code2 className="w-8 h-8" />,
      level: 95,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Java",
      icon: <Server className="w-8 h-8" />,
      level: 90,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Python",
      icon: <Terminal className="w-8 h-8" />,
      level: 88,
      color: "from-blue-400 to-indigo-500",
    },
    {
      name: "Z/OS",
      icon: <Cpu className="w-8 h-8" />,
      level: 85,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-8 h-8" />,
      level: 82,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "JCL",
      icon: <Globe className="w-8 h-8" />,
      level: 80,
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Springboot",
      icon: <Smartphone className="w-8 h-8" />,
      level: 75,
      color: "from-pink-400 to-rose-500",
    },
    {
      name: "R",
      icon: <GitBranch className="w-8 h-8" />,
      level: 80,
      color: "from-gray-400 to-gray-600",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time data visualization platform with ML predictions and automated insights generation.",
      tech: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      category: "fullstack",
      image: "https://via.placeholder.com/400x300/4338ca/ffffff?text=Analytics",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Calculator API",
      description:
        "Simple RestAPI Calculator App that was created to practice and learn standard API skills and interactions",
      tech: ["Java", "RestAPI", "SpringBoot", "Maven", "JUnit 5"],
      category: "backend",
      image:
        "https://via.placeholder.com/400x300/059669/ffffff?text=E-Commerce",
      github: "https://github.com/KvnLun/calculator/tree/main",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Tribal Land Checker",
      description:
        "Script that takes in any US Address, converts to coodinates, and maps and identifies if property is on Tribal Land",
      tech: ["Python", "Pandas", "Geopy", "shapely", "requests", "openpyxl"],
      category: "scripts",
      image:
        "https://via.placeholder.com/400x300/059669/ffffff?text=E-Commerce",
      github: "https://github.com/KvnLun/TribalLandChecker",
      live: "#",
      featured: true,
    },
  ];

  const experience = [
    {
      title: "Junior Software Engineer",
      company: "FirstBank",
      period: "2024 - 2026",
      location: "Denver, CO",
      description:
        "Develop and maintain critical banking systems using COBOL and Java, supporting both legacy mainframe applications and modern microservices architecture. Ensure seamless integration between core banking systems and digital channels.",
      achievements: [
        "Maintained customer and business facing Mainframe Webservices with 95% uptime",
        "Reduced overnight batch processing time by 30% through JCL and COBOL optimization",
        "Maintained and improved upon Java webservice APIs reducing latency by 30% and improving data consistency ",
        "​Implemented unit and integration testing frameworks (JUnit, Mockito, and custom COBOL test scripts), increasing code coverage and reducing post-deployment issues",
        "​Conducted peer code reviews and enforced best practices across COBOL and Java codebases, reducing production defects by 25%. ",
        "​Participated in on-call rotations, troubleshooting incidents across COBOL and Java services to minimize production downtime. ",
      ],
    },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  const navItems = [
    { id: "home", icon: <Home className="w-5 h-5" />, label: "Home" },
    { id: "about", icon: <User className="w-5 h-5" />, label: "About" },
    { id: "skills", icon: <Code2 className="w-5 h-5" />, label: "Skills" },
    {
      id: "projects",
      icon: <Briefcase className="w-5 h-5" />,
      label: "Projects",
    },
    {
      id: "experience",
      icon: <Award className="w-5 h-5" />,
      label: "Experience",
    },
    { id: "contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setEmailSent(false);
    }, 3000);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"
              : "bg-gradient-to-br from-purple-200/30 via-blue-200/30 to-cyan-200/30"
          }`}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
          darkMode
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                KvnLun's Portfolio
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                      : darkMode
                      ? "hover:bg-gray-800"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 right-0 ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-lg border-b ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                      : darkMode
                      ? "hover:bg-gray-800"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-4 pt-16"
      >
        <div
          className="text-center z-10 max-w-4xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 animate-pulse">
              <div
                className={`w-full h-full rounded-full ${
                  darkMode ? "bg-gray-900" : "bg-white"
                } flex items-center justify-center`}
              >
                <Origami className="w-16 h-16 text-purple-500" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-blue-300 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Kevin Loun
            </span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/Resume.pdf"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 ${
                darkMode
                  ? "border-gray-700 hover:bg-gray-800"
                  : "border-gray-300 hover:bg-gray-100"
              } transform hover:scale-105 transition-all duration-300`}
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/KvnLun"
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              } transform hover:scale-110 transition-all duration-300`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-loun/"
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              } transform hover:scale-110 transition-all duration-300`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:kvn.loun@gmail.com"
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              } transform hover:scale-110 transition-all duration-300`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-400">
                Versatile developer specializing in both legacy mainframe
                systems and modern Java ecosystems, with hands-on experience
                supporting critical financial infrastructure. I excel at
                maintaining COBOL-based core banking applications while
                developing innovative solutions using Java, Spring Framework,
                and microservices architecture.
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
                My expertise spans JCL batch processing, VSAM/DB2 database
                management, and CICS transaction processing, complemented by
                modern skills in REST API development, containerization, and
                cloud deployment. I'm passionate about ensuring system
                reliability, optimizing performance, and facilitating the
                digital transformation journey for financial institutions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                  <h3 className="font-bold mb-1">Fast Learner</h3>
                  <p className="text-sm text-gray-400">
                    Quick to adapt to and learn new technologies
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <Award className="w-8 h-8 text-green-500 mb-2" />
                  <h3 className="font-bold mb-1">Problem Solver</h3>
                  <p className="text-sm text-gray-400">
                    Creative solutions to complex challenges and business needs
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-gray-700">
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <span>2+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                      <span>Denver, CO</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Briefcase className="w-5 h-5 text-pink-500" />
                      <span>Financial Services Specialist</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span>Mainframe & Modern Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/50" : "bg-white"
                } backdrop-blur-lg border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } hover:scale-105 transform transition-all duration-300 group`}
              >
                <div
                  className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${skill.color} inline-block`}
                >
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 inline-block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "backend", "scripts"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  projectFilter === filter
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                    : darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group relative rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Code2 className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className={`flex items-center space-x-1 ${
                        darkMode
                          ? "hover:text-purple-400"
                          : "hover:text-purple-600"
                      } transition-colors`}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className={`flex items-center space-x-1 ${
                        darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600"
                      } transition-colors`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 md:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 ${
                  darkMode ? "before:bg-gray-700" : "before:bg-gray-300"
                }`}
              >
                <div className="absolute left-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full -translate-x-1/2" />
                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-800/50" : "bg-white"
                  } backdrop-blur-lg border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-purple-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <p className="text-sm text-gray-400 flex items-center justify-end mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, j) => (
                      <span
                        key={j}
                        className="flex items-center space-x-1 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 text-cyan-500" />
                        <span>{achievement}</span>
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
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400">
                I'm always open to discussing new opportunities, innovative
                projects, or just having a chat about technology. Feel free to
                reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:kvn.loun@gmail.com"
                  className={`flex items-center space-x-3 p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors`}
                >
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kevin-loun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors`}
                >
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/KvnLun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors`}
                >
                  <Github className="w-5 h-5 text-gray-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-300"
                } border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-300"
                } border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-300"
                } border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
                required
              />
              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  emailSent ? "opacity-75" : ""
                }`}
                disabled={emailSent}
              >
                {emailSent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Kevin Loun. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
