"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Server,
  Database,
  ChevronDown,
  Download,
  ExternalLink,
  Award,
  GraduationCap,
  Star,
  Terminal,
  Home,
  User,
  Briefcase,
  FolderOpen,
  BookOpen,
  MessageSquare,
  Cloud,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    window.open("https://drive.google.com/file/d/1lLFTwV0rPbsfLmuexq0FE6y3BznR6sSm/view?usp=sharing", "_blank")
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-x-hidden">
      {/* Centered Pill Navigation - No Background */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation - Centered Pill Style */}
            <div className="hidden lg:flex items-center space-x-2 bg-slate-800/80 backdrop-blur-xl rounded-full p-2 border border-slate-700/50 shadow-2xl shadow-black/20">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                AS
              </motion.div>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-700/50"
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                  ></span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2 bg-slate-800/90 backdrop-blur-xl rounded-2xl mt-4 border border-slate-700/50">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 w-full text-left px-6 py-3 mx-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              AKSHAT SWAMI
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8"
            >
              Python Backend Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <Badge
                variant="secondary"
                className="bg-cyan-900/30 text-cyan-300 border-cyan-500/50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg hover:bg-cyan-800/40 transition-all duration-300"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Python Developer
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-900/30 text-purple-300 border-purple-500/50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg hover:bg-purple-800/40 transition-all duration-300"
              >
                <Server className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Backend Developer
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-900/30 text-blue-300 border-blue-500/50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg hover:bg-blue-800/40 transition-all duration-300"
              >
                <Database className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                API Developer
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex justify-center space-x-4 sm:space-x-6"
            >
              <motion.a
                href="https://github.com/Akshatswami610"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="p-4 sm:p-4 bg-slate-800/50 rounded-full border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akshatswami/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="p-4 sm:p-4 bg-slate-800/50 rounded-full border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/20 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="mailto:akshatswami0610@gmail.com"
                whileTap={{ scale: 0.9 }}
                className="p-4 sm:p-4 bg-slate-800/50 rounded-full border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/20 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/90 border-cyan-500/40 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500 shadow-xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                    Python backend developer skilled in Django, FastAPI, Flask, REST APIs, and database integration
                    (MongoDB, SQLite, PostgreSQL). Experienced in building scalable and secure backend systems with
                    cloud deployment on AWS S3 and Render.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Uses AI tools for quick frontend generation while specialising in backend logic and API-driven
                    solutions. Focused on creating efficient, production-ready applications with modern deployment
                    practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex justify-center mt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={downloadCV}
                  className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-slate-950/50 to-indigo-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Backend Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized expertise in Python backend development and modern deployment technologies
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {[
              {
                category: "Languages & Frameworks",
                skills: [
                  { name: "Python", level: 95, color: "from-yellow-400 to-yellow-600" },
                  { name: "Django", level: 90, color: "from-green-500 to-emerald-600" },
                  { name: "Django REST Framework", level: 90, color: "from-emerald-400 to-emerald-600" },
                  { name: "FastAPI", level: 85, color: "from-green-400 to-green-600" },
                  { name: "Flask", level: 85, color: "from-blue-400 to-blue-600" },
                  { name: "WebSockets", level: 85, color: "from-purple-400 to-purple-600" },
                ],
                icon: Code,
                gradient: "from-cyan-500/20 to-blue-500/20",
              },
              {
                category: "Databases",
                skills: [
                  { name: "PostgreSQL", level: 90, color: "from-blue-500 to-blue-700" },
                  { name: "MySQL", level: 90, color: "from-orange-400 to-orange-600" },
                  { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
                  { name: "SQLite", level: 85, color: "from-blue-400 to-blue-600" },
                ],
                icon: Database,
                gradient: "from-emerald-500/20 to-teal-500/20",
              },
              {
                category: "Cloud & Deployment",
                skills: [
                  { name: "AWS S3", level: 85, color: "from-orange-400 to-orange-600" },
                  { name: "AWS RDS", level: 85, color: "from-orange-500 to-orange-700" },
                  { name: "AWS IAM", level: 85, color: "from-orange-400 to-orange-600" },
                  { name: "Render", level: 90, color: "from-purple-400 to-purple-600" },
                  { name: "Docker", level: 85, color: "from-cyan-400 to-cyan-600" },
                ],
                icon: Cloud,
                gradient: "from-orange-500/20 to-red-500/20",
              },
              {
                category: "Tools & Libraries",
                skills: [
                  { name: "PyCharm", level: 80, color: "from-yellow-400 to-yellow-600" },
                  { name: "Pydantic", level: 90, color: "from-green-400 to-green-600" },
                  { name: "Git & GitHub", level: 85, color: "from-gray-400 to-gray-600" },
                  { name: "MongoDB Compass", level: 80, color: "from-green-400 to-green-600" },
                  { name: "Postman", level: 85, color: "from-orange-400 to-orange-600" },
                ],
                icon: Terminal,
                gradient: "from-purple-500/20 to-pink-500/20",
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className={`bg-slate-800/90 backdrop-blur-sm border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 h-full shadow-xl shadow-cyan-500/10`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4">
                        <skillGroup.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="space-y-6">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-cyan-400 font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "REST API Design",
                "Database Integration",
                "Cloud Deployment",
                "Backend Architecture",
                "Performance Optimization",
                "CRUD Operations",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/30 transition-all duration-300 px-4 py-2 text-base"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Professional experience in backend development and API design
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-800/90 backdrop-blur-sm border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 shadow-xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <Briefcase className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Python Developer</h3>
                          <p className="text-cyan-400 font-semibold text-lg">Infosys Springboard</p>
                          <p className="text-gray-400">Remote</p>
                        </div>
                        <span className="text-sm text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-full mt-2 md:mt-0 inline-block">
                          Sept 2025 - Present
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span>
                            Developing backend services using Python (FastAPI/Django) for scalable web applications
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span>
                            Designing and integrating REST APIs with secure authentication and database operations
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-950/50 to-indigo-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Python-powered backend solutions showcasing modern frameworks, database integration, and cloud deployment
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Ask - Real Time Doubt Sharing Platform",
                description:
                  "Built a platform for students to post doubts and interact via comments, likes, and private chats. Integrated WebSockets for real-time messaging and live updates. Added leaderboard, anonymous posting, and tagging for gamification and easy search.",
                tech: ["Django", "Django Channels", "WebSockets", "PostgreSQL", "HTML", "CSS", "JavaScript"],
                date: "Sept 2025",
                outcome: "Enhanced student engagement and peer learning in a structured, real-time system.",
                github: "https://github.com/Akshatswami610/Ask",
                demo: null,
                gradient: "from-purple-500/10 to-pink-500/10",
                icon: MessageSquare,
                status: "Under Development",
              },
              {
                title: "Blog Page - Django Blog Web App",
                description:
                  "Built a blogging platform with Django backend for managing posts and content. Designed a responsive UI with AI-assisted frontend templates. Deployed static assets on AWS S3 for optimized performance.",
                tech: ["Django", "HTML", "CSS", "JavaScript", "AWS S3", "Bootstrap"],
                date: "July 2025",
                outcome: "Developed a fully functional blog system with dynamic content management.",
                github: "https://github.com/Akshatswami610/Blog-website",
                demo: "https://blog-website-3wu2.onrender.com",
                gradient: "from-blue-500/10 to-cyan-500/10",
                icon: Globe,
              },
              {
                title: "FastNotes - FastAPI Notes Web App",
                description:
                  "Designed backend APIs for creating, editing, and managing notes with timestamps. Integrated MongoDB using Pydantic models and implemented CRUD operations. Deployed app with Uvicorn + Render, ensuring production-ready performance.",
                tech: ["FastAPI", "MongoDB", "Jinja2", "Pydantic", "Uvicorn", "Render"],
                date: "July 2025",
                outcome: "Delivered a fast notes management system with real-time updates.",
                github: "https://github.com/Akshatswami610/Notes-app-using-FastAPI",
                demo: "https://notes-app-dpz8.onrender.com",
                gradient: "from-green-500/10 to-emerald-500/10",
                icon: Server,
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`bg-slate-800/90 backdrop-blur-sm border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 h-full shadow-xl shadow-cyan-500/10`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                          <project.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.status && (
                            <Badge
                              variant="outline"
                              className="border-yellow-500/50 text-yellow-300 text-xs mt-1 inline-block"
                            >
                              {project.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 border-slate-600/50 hover:bg-slate-700/50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="border-t border-slate-700/50 pt-4 mb-4">
                      <p className="text-sm text-gray-400">
                        <strong className="text-cyan-400">Outcome:</strong> {project.outcome}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-h-[44px]"
                      >
                        <Button className="w-full h-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 px-4 py-3 text-sm font-medium touch-manipulation">
                          <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                          View Code
                        </Button>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.95 }}
                          className="sm:w-auto w-full min-h-[44px]"
                          title="View Live Demo"
                        >
                          <Button className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 px-4 py-3 text-sm font-medium touch-manipulation">
                            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="sm:hidden">Live Demo</span>
                            <span className="hidden sm:inline">Demo</span>
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg font-semibold">
                  <FolderOpen className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Academic foundation in computer science and engineering
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Bachelor of Technology - Computer Science and Engineering",
                institution: "Lovely Professional University",
                location: "Punjab, India",
                period: "August 2023 - present",
                details: "CGPA: 7.36",
                icon: GraduationCap,
                gradient: "from-cyan-500/10 to-blue-500/10",
              },
              {
                title: "Intermediate",
                institution: "Kendriya Vidyalaya AFS",
                location: "Bikaner, Rajasthan",
                period: "April 2022 - March 2023",
                details: "Percentage: 75%",
                icon: GraduationCap,
                gradient: "from-purple-500/10 to-pink-500/10",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`bg-slate-800/90 backdrop-blur-sm border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 shadow-xl shadow-cyan-500/10`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                        <edu.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                            <p className="text-cyan-400 font-semibold text-lg">{edu.institution}</p>
                            <p className="text-gray-400">{edu.location}</p>
                          </div>
                          <span className="text-sm text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-full mt-2 md:mt-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-300 text-lg">{edu.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gradient-to-b from-slate-950/50 to-indigo-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Professional certifications validating technical expertise
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-800/90 backdrop-blur-sm border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 shadow-xl shadow-emerald-500/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg">
                      <Award className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Python Foundation Certification</h3>
                          <p className="text-emerald-400 font-semibold text-lg">Infosys Springboard</p>
                          <p className="text-gray-400">Online Platform</p>
                        </div>
                        <span className="text-sm text-emerald-300 bg-emerald-900/30 px-4 py-2 rounded-full mt-2 md:mt-0">
                          June 2025
                        </span>
                      </div>
                      <p className="text-gray-300 text-lg">Certified in Python fundamentals and programming concepts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on backend projects or discuss Python development opportunities.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/90 border-cyan-500/40 backdrop-blur-sm shadow-xl shadow-cyan-500/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <motion.a
                        href="mailto:akshatswami0610@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
                      >
                        <Mail className="w-6 h-6 text-cyan-400" />
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <p className="text-gray-400">akshatswami0610@gmail.com</p>
                        </div>
                      </motion.a>
                      <motion.a
                        href="tel:+919257811102"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
                      >
                        <Phone className="w-6 h-6 text-purple-400" />
                        <div>
                          <p className="font-semibold text-white">Phone</p>
                          <p className="text-gray-400">+91 9257811102</p>
                        </div>
                      </motion.a>
                      <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg border border-green-500/30">
                        <MapPin className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-white">Location</p>
                          <p className="text-gray-400">Jalandhar, Punjab, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-cyan-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Akshat Swami. Built with Next.js and Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
