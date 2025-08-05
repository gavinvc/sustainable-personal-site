'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      <nav className="space-x-6 text-slate-700 font-medium">
        <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
        <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
        <a href="https://www.linkedin.com/in/gavin-crigger-58257b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">LinkedIn</a>
      </nav>
    </header>
  );
};

export default function Home() {
  return (
    <div className="text-slate-900">
      <Header />


            {/* Hero Section with Full Background */}
            <section className="relative w-full h-screen flex items-center justify-start pl-10 overflow-hidden">
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{
      backgroundImage: `url('/background.png')`,
    }}
  />

  {/* Foreground content */}
  <div className="relative z-20 text-white text-left px-4">
    <h1 className="text-5xl font-bold">Gavin Crigger</h1>
    <p className="text-xl mt-4">Software Developer and Cybersecurity Student</p>
  </div>
</section>




      <main className="bg-emerald-50">
        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
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
                <Card className="bg-green-100 border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                      Enterprise Network Security Research Tool
                    </h3>
                    <p className="text-slate-600">
                      Built in .NET framework, confidential Epic application for network traffic monitoring and analysis
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-100 border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                      Large Language Models for Debugging Hypotheses
                    </h3>
                    <p className="text-slate-600">
                      Research with George Mason University&apos;s DevX Research Lab on using LLMs for software debugging
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-100 border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                      Web Platformer Game
                    </h3>
                    <p className="text-slate-600">
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
                Technologies I work with to create impactful solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
                { category: "Tools", skills: ["Git", "Docker", "AWS", "Vercel"] },
                { category: "Research", skills: ["Machine Learning", "Data Analysis", "Sustainability", "Research"] }
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
                  <h3 className="font-semibold text-emerald-800 mb-2">Email</h3>
                  <p className="text-slate-600">gcrigger03@gmail.com</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">GitHub</h3>
                  <p className="text-slate-600">github.com/gavinvc</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">LinkedIn</h3>
                  <p className="text-slate-600">tzn4fx@virginia.edu</p>
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
