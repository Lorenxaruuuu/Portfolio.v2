import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Gamepad2, Code2, Layout, Github, Mail, Linkedin, Instagram, Facebook, Home, User, Briefcase, Award, FolderCode } from 'lucide-react'
import { cn } from '@/src/lib/utils'

// --- USER GUIDE: DATA CONFIGURATION ---
// Update these arrays with your own project details.

const VISUAL_PROJECTS = [
  {
    id: 1,
    title: "Mood Mirror",
    description: "A full-stack web application built with Next.js, Firebase, Tailwind CSS and a fine-tuned Flan-T5.",
    image: "https://lh3.googleusercontent.com/d/1YemRtWovRfIORxX2U4CWlOUu-CTZc3oH",
    link: "https://mood-mirror-web.vercel.app/",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Flan-T5 Model"]
  },
  {
    id: 2,
    title: "CatAdopt",
    description: "A cat adoption platform built with React Native, TypeScript, and CSS",
    image: "https://lh3.googleusercontent.com/d/13lWB9iyV5jO76Cl7f14ROf1sctQYA7CT",
    link: "https://cat-adopt-web.vercel.app/",
    tags: ["React Native", "CSS", "Snack Expo", "TypeScript"]
  },
  {
    id: 3,
    title: "Kanya-Kanya",
    description: "A web application for splitting bills",
    image: "https://lh3.googleusercontent.com/d/1u6qQrsQjEOjh_if8pw7u26Fg9dMnRjZy",
    link: "https://kkb-v1.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion", "TypeScript"]
  }
]

const SKILLS = [
  { category: "Languages", items: ["C#", "C++", "JavaScript", "Python", "Java", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML"] },
  { category: "Backend", items: ["Node.js", "Laravel", "PHP"] },
  { category: "Tools", items: ["Git", "Vercel", "React Native", ] },
  { category: "Database", items: ["Firebase", "MySQL"] }
]

const PROFILE = {
  name: "Lorence Maranga",
  role: "Web Developer and UI/UX designer",
  bio: [
    "Hello! I'm a Web Developer and UI/UX Designer based in Davao City, Philippines. I specialize in building clean, responsive, and engaging web interfaces using tools like React and Tailwind CSS. I'm passionate about crafting designs that are minimalist, intuitive, and user-friendly—creating experiences that look great and feel effortless to use.",
    "Beyond the screen, I'm an avid gamer who spends my free time grinding ranks in Mobile Legends, strategizing in Dota 2, or staying active through basketball and jogging. I am always eager to grow, constantly pushing my limits to stand out and deliver work that makes an impact."
  ],
  avatar: "https://lh3.googleusercontent.com/d/1znOkwee_Wm0ATWHYAB4HQQ_1AUyk3I2Z", // Put your profile picture link here
  socials: {
    github: "https://github.com/Lorenxaruuuu",
    linkedin: "https://www.linkedin.com/in/lorenxaruuuu/",
    instagram: "https://www.instagram.com/lorenxaruuuu/",
    facebook: "https://www.facebook.com/lorenxaruuu",
    email: "mailto:lorencemaranga@gmail.com"
  }
}

const WEB_GAMES = [
  {
    id: 1,
    title: "Space Invaders Remake",
    description: "A classic arcade game rebuilt using HTML5 Canvas and JavaScript.",
    link: "https://example.com/game-1", // Put your game link here
    icon: <Gamepad2 className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Logic Puzzle Solver",
    description: "An interactive web game that challenges your algorithmic thinking.",
    link: "https://example.com/game-2", // Put your game link here
    icon: <Code2 className="w-5 h-5" />
  },
  {
    id: 3,
    title: "UI Playground",
    description: "A collection of interactive UI components and experiments.",
    link: "https://example.com/game-3", // Put your game link here
    icon: <Layout className="w-5 h-5" />
  }
]

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Getting Started with Full Stack Java Development",
    issuer: "Simplilearn",
    date: "2024",
    image: "https://lh3.googleusercontent.com/d/1ragSspM26etww2vtC939vKblw4qbCC-R",
    link: "https://drive.google.com/file/d/1ragSspM26etww2vtC939vKblw4qbCC-R/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    date: "2024",
    image: "https://lh3.googleusercontent.com/d/1iucqGLew06nJkCKiMZg4-O_o6slakjPP",
    link: "https://drive.google.com/file/d/1iucqGLew06nJkCKiMZg4-O_o6slakjPP/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Intro to SQL",
    issuer: "Le Wagon",
    date: "2024",
    image: "https://lh3.googleusercontent.com/d/1rH1TbxsrgNjVC-mw2jlUIoNr8WgAUo4z",
    link: "https://drive.google.com/file/d/1rH1TbxsrgNjVC-mw2jlUIoNr8WgAUo4z/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Certficate of Membership - PSITS",
    issuer: "PSITS",
    date: "2023-2024",
    image: "https://lh3.googleusercontent.com/d/1r_yw2NoWWPjzsMMDSYTcfaIwIeSel8W_",
    link: "https://drive.google.com/file/d/1r_yw2NoWWPjzsMMDSYTcfaIwIeSel8W_/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Certificate of Participation - MLBB PSITS",
    issuer: "PSITS",
    date: "2024",
    image: "https://lh3.googleusercontent.com/d/1gOcPIFZFPSD0pvbmHF7UyQw_8d2cfHyd",
    link: "https://drive.google.com/file/d/1gOcPIFZFPSD0pvbmHF7UyQw_8d2cfHyd/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Certificate of Participation - Networking Competition",
    issuer: "Holy Cross of Davao College",
    date: "2024",
    image: "https://lh3.googleusercontent.com/d/12QJAwlIRdV2sdIWogIkqiVItF9lNZdkR",
    link: "https://drive.google.com/file/d/12QJAwlIRdV2sdIWogIkqiVItF9lNZdkR/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Certificate of Completion - Educational Tour",
    issuer: "WATT",
    date: "2025",
    image: "https://lh3.googleusercontent.com/d/1RDLsLqEkSxsvQ5u83LG4gIaifPqDM37a",
    link: "https://drive.google.com/file/d/1RDLsLqEkSxsvQ5u83LG4gIaifPqDM37a/view?usp=drive_link"
  }
]

const EXPERIENCES = [
  {
    id: 1,
    company: "Department of Social Welfare and Development",
    role: "Internship - Full Stack Developer",
    period: "February 2026 - Present",
    description: "Developed a web-based IPCRF Management System for the DSWD, handling both front-end and back-end features to streamline employee performance evaluations."
  },
  {
    id: 2,
    company: "Holy Cross of Davao College",
    role: "IT Laboratory Assistant",
    period: "August 2022 - June 2026",
    description: "Maintained and organized the IT laboratory, ensuring all computers and equipment were functional, assisted students with technical issues and software troubleshooting, supported faculty during lessons and lab activities, and managed IT resources including minor repairs."
  }
]

// --- COMPONENTS ---

const ProjectCard = ({ project }: { project: typeof VISUAL_PROJECTS[0] }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="group relative block overflow-hidden rounded-2xl bg-black matrix-border transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
  >
    <div className="aspect-video relative overflow-hidden border-b border-emerald-500/30">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <span className="text-emerald-400 font-mono font-medium flex items-center gap-2 matrix-glow">
          {"> ACCESS_PROJECT"} <ExternalLink className="w-4 h-4" />
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-emerald-400 mb-2 matrix-glow">{project.title}</h3>
      <p className="text-emerald-600/80 text-sm mb-4 line-clamp-2 font-mono">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-emerald-950/50 text-emerald-500 text-[10px] font-bold rounded border border-emerald-500/20 uppercase tracking-tighter">
            [{tag}]
          </span>
        ))}
      </div>
    </div>
  </motion.a>
)

const GameButton = ({ game }: { game: typeof WEB_GAMES[0] }) => (
  <motion.a
    href={game.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-4 p-4 rounded-xl bg-black matrix-border hover:border-emerald-400 transition-all group"
  >
    <div className="w-12 h-12 rounded-lg bg-emerald-950 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
      {game.icon}
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-emerald-400 matrix-glow">{game.title}</h4>
      <p className="text-xs text-emerald-600 font-mono">{game.description}</p>
    </div>
    <ExternalLink className="w-5 h-5 text-emerald-900 group-hover:text-emerald-400 transition-colors" />
  </motion.a>
)

const CertificationCard = ({ cert }: { cert: typeof CERTIFICATIONS[0] }) => (
  <motion.a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="bg-black rounded-xl matrix-border overflow-hidden transition-all block"
  >
    <div className="aspect-[4/3] relative border-b border-emerald-500/30">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover opacity-70"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-4">
      <h4 className="font-bold text-emerald-400 text-sm mb-1 matrix-glow">{cert.title}</h4>
      <div className="flex justify-between items-center text-[10px] text-emerald-600 font-mono">
        <span>{cert.issuer}</span>
        <span className="text-emerald-500">{cert.date}</span>
      </div>
    </div>
  </motion.a>
)

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-3 py-1.5 bg-black border border-emerald-500/30 text-emerald-500 text-xs font-bold rounded-lg shadow-sm hover:border-emerald-400 hover:text-emerald-400 transition-all cursor-default matrix-glow">
    {skill}
  </span>
)

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Projects', href: '#portfolio', icon: <FolderCode className="w-5 h-5" /> },
    { name: 'Certs', href: '#certifications', icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={cn(
        "fixed top-0 left-0 bottom-0 z-50 transition-all duration-300 w-20 hidden md:flex flex-col items-center py-8 border-r border-emerald-500/10",
        scrolled ? "matrix-bg border-emerald-500/30" : "bg-black/40 backdrop-blur-sm"
      )}>
        <div className="flex flex-col items-center justify-center gap-8 h-full w-full">
          <div className="flex flex-col items-center gap-6">
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href={PROFILE.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href={PROFILE.socials.email} className="text-emerald-600 hover:text-emerald-400 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-emerald-600 hover:text-emerald-400 transition-all vertical-text text-[10px] font-bold uppercase tracking-[0.1em] hover:matrix-glow"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-2 py-3 border-t border-emerald-500/20 matrix-bg backdrop-blur-lg",
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center gap-1 text-emerald-600 hover:text-emerald-400 transition-all"
          >
            {link.icon}
            <span className="text-[8px] font-bold uppercase tracking-tighter">{link.name}</span>
          </a>
        ))}
      </nav>
    </>
  )
}

const MatrixRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"\'#&_(),.;:?!\\|{}<>[]'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#10b981' // emerald-500
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20 z-0" />
}

const PhotoItem = ({ src, index }: { src: string; index: number }) => (
  <div className="relative h-48 md:h-64 flex-shrink-0 rounded-xl overflow-hidden border border-emerald-500/20 group">
    <img
      src={src}
      alt={`Memory ${index}`}
      className="h-full w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 block"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors" />
  </div>
);

const PhotoMarquee = () => {
  const photos = [
    "https://lh3.googleusercontent.com/d/1-G1dGeIj2dICtOVQdRzOF62CPLxurnWQ",
    "https://lh3.googleusercontent.com/d/15ChnXJ-aHn6zTT98LcdOsvno_bZEHmnG",
    "https://lh3.googleusercontent.com/d/1L2x89idw_rx3eeyt-WyIbtyPvwWFgIZ-",
    "https://lh3.googleusercontent.com/d/1RCxYm8-IA1dqgj2VqXMzd3esIL74AhJT",
    "https://lh3.googleusercontent.com/d/1Y-OUUbQ3mhandE8bz0KxjYyLM4guBZcw",
    "https://lh3.googleusercontent.com/d/1YQq6XFz9qaeQy7DR0dB0aS-Z95cy1MCd",
    "https://lh3.googleusercontent.com/d/1cfZMzyfKI11FJCvG33DRdO7q4cuC_UKj",
    "https://lh3.googleusercontent.com/d/1fplP-JJY2cdOPrs6Lbe7ttcNOAiRInGc",
    "https://lh3.googleusercontent.com/d/1iDc54vfAS9Nqw5SqkjtTOzPPdcmCURrv",
    "https://lh3.googleusercontent.com/d/1oZVXfhDpnV-63MmFQQh7zsNrVITy1hXs",
    "https://lh3.googleusercontent.com/d/1sgfCaUvj6sj2Sucy8DGb9fU9BICho8We",
    "https://lh3.googleusercontent.com/d/1ue9qPufpLtCT2bDnyFzccc9kxR2oZi72",
    "https://lh3.googleusercontent.com/d/1zNU5lRCfouIDfK7EqoRu8YmNPA9ule_Y"
  ];

  const row1 = photos;
  const row2 = photos.slice(6);

  return (
    <div className="relative w-full overflow-hidden py-12 border-y border-emerald-500/10 mt-16 flex flex-col gap-8">
      {/* Row 1: Forward */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-66.66%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 pr-6"
        >
          {[...row1, ...row1, ...row1].map((src, index) => (
            <PhotoItem key={`row1-${index}`} src={src} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Reverse */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["-66.66%", "0%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 pr-6"
        >
          {[...row2, ...row2, ...row2].map((src, index) => (
            <PhotoItem key={`row2-${index}`} src={src} index={index} />
          ))}
        </motion.div>
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default function App() {
  return (
    <main className="min-h-screen pb-20 bg-black text-emerald-500 font-mono selection:bg-emerald-500 selection:text-black md:pl-20 [&_section]:scroll-mt-20">
      <MatrixRain />
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-emerald-500/20 py-20">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 md:mb-10 rounded-full border-4 md:border-8 border-emerald-500/20 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-emerald-400 mb-4 tracking-tighter matrix-glow">
              {PROFILE.name.toUpperCase()}
            </h1>
            <p className="text-lg md:text-2xl text-emerald-500 font-bold mb-6 opacity-80">
              {`> ${PROFILE.role}`}
            </p>
            <p className="text-sm md:text-lg text-emerald-700 max-w-2xl mx-auto mb-10 font-mono">
              {"// INITIALIZING_SYSTEM_CORE..."}
              <br />
              {"// DEPLOYING_DIGITAL_SOLUTIONS..."}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald-500/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">System_Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-12 bg-gradient-to-b from-emerald-500 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 matrix-glow">_ABOUT_ME</h2>
            <div className="prose prose-invert space-y-4">
              {PROFILE.bio.map((paragraph, idx) => (
                <p key={idx} className="text-emerald-600 leading-relaxed font-mono">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 matrix-glow">_TECH_SKILLS</h2>
            <div className="space-y-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
                    {`[ ${skillGroup.category} ]`}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <PhotoMarquee />
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-400 mb-2 matrix-glow">_EXPERIENCE</h2>
          <p className="text-emerald-700 font-mono text-sm">{"// RETRIEVING_WORK_HISTORY..."}</p>
        </div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-emerald-500/30"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <div className="mb-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-emerald-400 mt-1">
                  {exp.role} <span className="text-emerald-600/50 font-normal">@ {exp.company}</span>
                </h3>
              </div>
              <p className="text-emerald-600/80 font-mono text-sm leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section (Combined Projects & Games) */}
      <section id="portfolio" className="container mx-auto px-6 py-12 md:py-24 bg-emerald-950/5 rounded-3xl md:rounded-[3rem] border border-emerald-500/10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-400 mb-2 matrix-glow">_PROJECTS</h2>
          <p className="text-emerald-700 font-mono text-sm">{"// EXECUTING_PROJECT_RETRIEVAL..."}</p>
        </div>
        
        {/* Visual Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {VISUAL_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Web Games Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2 matrix-glow">
            <Gamepad2 className="w-6 h-6" /> _INTERACTIVE_MODULES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WEB_GAMES.map((game) => (
              <GameButton key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-6 mt-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-400 mb-2 matrix-glow">_CERTIFICATIONS</h2>
          <p className="text-emerald-700 font-mono text-sm">{"// VALIDATING_CREDENTIALS..."}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>

      {/* Footer / Guide Section */}
      <footer className="container mx-auto px-6 mt-24 md:mt-32 pb-24 md:pb-12 pt-12 border-t border-emerald-500/20">
        <p className="text-center text-emerald-900 text-[10px] mt-12 font-mono uppercase tracking-widest">
          © 2026 Lorence // ALL_RIGHTS_RESERVED
        </p>
      </footer>
    </main>
  )
}
