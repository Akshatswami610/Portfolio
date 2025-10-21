"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Calendar, Target } from "lucide-react"
import { useRouter } from "next/navigation"
import { Server, Database, Settings, Globe, MessageSquare } from "lucide-react"

export default function AllProjects() {
  const router = useRouter()

  const allProjects = [
    {
      title: "Ask - Real Time Doubt Sharing Platform",
      description:
        "Built a platform for students to post doubts and interact via comments, likes, and private chats. Integrated WebSockets for real-time messaging and live updates. Added leaderboard, anonymous posting, and tagging for gamification and easy search.",
      tech: ["Django", "Django Channels", "WebSockets", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      date: "Sept 2025",
      outcome: "Enhanced student engagement and peer learning in a structured, real-time system.",
      github: "https://github.com/Akshatswami610/Ask",
      demo: null,
      category: "Backend",
      status: "Under Development",
      icon: MessageSquare,
      gradient: "from-purple-500/10 to-pink-500/10",
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
      category: "Full-Stack",
      status: "Completed",
      icon: Globe,
      gradient: "from-blue-500/10 to-cyan-500/10",
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
      category: "Backend",
      status: "Completed",
      icon: Server,
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "MyTodo - Flask To-Do Web App",
      description:
        "Built a to-do list management backend with task filtering and status updates. Integrated SQLite database with SQLAlchemy ORM for smooth operations. Deployed the app on Render for live access.",
      tech: ["Flask", "SQLite", "SQLAlchemy", "Render", "HTML", "CSS"],
      date: "July 2025",
      outcome: "Created a lightweight, responsive task management app with reliable CRUD functionality.",
      github: "https://github.com/Akshatswami610/MyTodo",
      demo: "https://mytodo-a61g.onrender.com",
      category: "Backend",
      status: "Completed",
      icon: Database,
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Jarvis AI (Voice Assistant)",
      description:
        "Built a voice-activated virtual assistant with Python backend processing. Integrated OpenAI's GPT API for intelligent responses and implemented speech recognition for seamless user interaction.",
      tech: ["Python", "OpenAI API", "SpeechRecognition", "REST API", "NLP"],
      date: "May 2025",
      outcome: "Intelligent backend system powering voice-driven automation.",
      github: "https://github.com/Akshatswami610/JarvisAI",
      demo: null,
      category: "AI/ML",
      status: "Completed",
      icon: Settings,
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            All Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Python backend projects showcasing modern frameworks, database integration, and cloud deployment expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-slate-800/90 backdrop-blur-sm border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 h-full shadow-xl shadow-cyan-500/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                        <project.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                            {project.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              project.status === "Completed"
                                ? "border-green-500/50 text-green-300"
                                : "border-yellow-500/50 text-yellow-300"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-cyan-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border-slate-600/50 hover:bg-slate-700/50 transition-colors duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t border-slate-700/50 pt-4 mb-4">
                    <div className="flex items-start space-x-2">
                      <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-400">
                        <strong className="text-cyan-400">Outcome:</strong> {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-h-[44px]"
                    >
                      <Button className="w-full h-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 text-sm font-medium touch-manipulation px-4 py-3">
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
                        <Button className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 text-sm font-medium touch-manipulation px-4 py-3">
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
      </div>
    </div>
  )
}
