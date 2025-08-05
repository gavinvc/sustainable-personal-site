'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
        <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
        <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
        <Link href="/personal" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Personal</Link>
        <a href="https://www.linkedin.com/in/gavin-crigger" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">LinkedIn ↗</a>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden flex flex-col space-y-1 text-xs text-slate-700 font-medium text-right">
        <div className="flex space-x-3">
          <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
        </div>
        <div className="flex space-x-3">
          <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          <Link href="/personal" className="hover:text-emerald-700 transition-colors">Personal</Link>
          <a href="https://www.linkedin.com/in/gavin-crigger-58257b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">LinkedIn ↗</a>
        </div>
      </nav>
    </header>
  );
};

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageLoaded) {
            // Preload the image
            const img = new window.Image();
            img.onload = () => setImageLoaded(true);
            img.src = '/background.png';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [imageLoaded]);

  return (
    <div className="text-slate-900">
      <Header />


            {/* Hero Section with Full Background */}
            <section 
              ref={heroRef}
              className="relative w-full h-screen flex items-center justify-start pl-4 md:pl-10 overflow-hidden"
            >
  {/* Background image layer */}
  <div
    className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-500 ${
      imageLoaded ? 'opacity-100' : 'opacity-0'
    }`}
    style={{
      backgroundImage: imageLoaded ? `url('/background.png')` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  />
  
  {/* Fallback background while loading */}
  <div
    className={`absolute inset-0 bg-gradient-to-br from-emerald-300 to-green-900 z-0 transition-opacity duration-500 ${
      imageLoaded ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* Foreground content */}
  <div className="relative z-20 text-white text-left px-4 max-w-2xl">
    <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Gavin Crigger</h1>
    <p className="text-lg md:text-xl">Software Developer and Cybersecurity Student</p>
  </div>

  {/* Personal Life Notification Blurb */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.5, duration: 0.8 }}
    className="absolute bottom-6 right-6 z-30"
  >
    <Link 
      href="/personal" 
      className="group flex items-center gap-2 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-500/30"
    >
      <span className="text-emerald-200">🌿</span>
      <span>I took this photo - click to see more!</span>
      <Sparkles className="h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
    </Link>
  </motion.div>
</section>




      <main className="bg-emerald-50">
        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Image
                src="/gavin.png"
                alt="Gavin Crigger"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-6">
                🌍 About Me
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                I&apos;m a fourth year student at the University of Virginia studying
                computer science with a focus in cybersecurity. I have a passion for sustainability
                and intern experience in software development for security applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                💡 Projects
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Here are some of the projects I&apos;ve been working on
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a href="https://www.epic.com/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="bg-green-100 border-none h-full cursor-pointer group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20">
                      <Image
                        src="/window.svg"
                        alt="Network Security Tool"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 relative z-30">
                      <h3 className="text-xl font-semibold mb-3 text-emerald-800 group-hover:text-white transition-colors duration-300">
                        Enterprise Network Security Research Tool
                      </h3>
                      <p className="text-slate-600 group-hover:text-white transition-colors duration-300">
                        Built in .NET framework, confidential Epic application for network traffic monitoring and analysis
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a href="https://journals.gmu.edu/index.php/jssr/article/view/3895" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="bg-green-100 border-none h-full cursor-pointer group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20">
                      <Image
                        src="/globe.svg"
                        alt="LLM Research"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 relative z-30">
                      <h3 className="text-xl font-semibold mb-3 text-emerald-800 group-hover:text-white transition-colors duration-300">
                        Large Language Models for Debugging Hypotheses
                      </h3>
                      <p className="text-slate-600 group-hover:text-white transition-colors duration-300">
                        Research with George Mason University&apos;s DevX Research Lab on using LLMs for software debugging
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-100 border-none h-full cursor-pointer group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20">
                    <Image
                      src="/next.svg"
                      alt="Web Platformer Game"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 relative z-30">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800 group-hover:text-white transition-colors duration-300">
                      Web Platformer Game
                    </h3>
                    <p className="text-slate-600 group-hover:text-white transition-colors duration-300">
                      Wouldn&apos;t you like to know more?
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                🛠️ Skills & Technologies
              </h2>
              <p className="text-lg text-slate-600">
                Just some of the areas I work in to create impactful solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { category: "Backend", skills: [".NET Framework", "Python", "Java", "C and C++"] },
                { category: "Tools", skills: ["Git", "Docker", "R", "Heroku"] },
                { category: "Passions", skills: ["Network Security", "Sustainability", "Volunteering", "Music and Crochet"] }
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border-none h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-2">
                        {skillGroup.skills.map((skill) => (
                          <li key={skill} className="text-slate-600">
                            • {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                📫 Get in Touch
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let&apos;s connect and discuss opportunities to work together
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">Personal Email</h3>
                  <a 
                    href="mailto:gcrigger03@gmail.com"
                    className="text-slate-600 hover:text-emerald-700 transition-colors underline decoration-emerald-200 hover:decoration-emerald-400"
                  >
                    gcrigger03@gmail.com
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/gavinvc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-700 transition-colors underline decoration-emerald-200 hover:decoration-emerald-400"
                  >
                    github.com/gavinvc ↗
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">School Email</h3>
                  <a 
                    href="mailto:tzn4fx@virginia.edu"
                    className="text-slate-600 hover:text-emerald-700 transition-colors underline decoration-emerald-200 hover:decoration-emerald-400"
                  >
                    tzn4fx@virginia.edu
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="mt-4 flex items-center gap-2 mx-auto bg-emerald-600 hover:bg-emerald-700">
                  <Sparkles className="h-4 w-4" /> View Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
