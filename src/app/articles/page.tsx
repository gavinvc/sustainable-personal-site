'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink, Calendar, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
        <Link href="/" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Home</Link>
        <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Articles</span>
        <Link href="/personal" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Personal</Link>
        <a href="https://www.linkedin.com/in/gavin-crigger" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">LinkedIn ↗</a>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden flex flex-col space-y-1 text-xs text-slate-700 font-medium text-right">
        <div className="flex space-x-3">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="text-emerald-600 font-semibold">Articles</span>
          <Link href="/personal" className="hover:text-emerald-700 transition-colors">Personal</Link>
        </div>
      </nav>
    </header>
  );
};

export default function Articles() {
  return (
    <div className="text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 to-green-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-20 px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4">Research & Publications</h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6">Academic contributions and research endeavors</p>
          <Link href="/">
            <Button className="flex items-center gap-2 mx-auto bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </motion.div>
      </section>

      <main className="bg-emerald-50">
        {/* Articles Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                <FileText className="h-8 w-8" />
                📚 Articles & Publications
              </h2>
              <p className="text-lg text-slate-600">
                Academic publications across computer science and sustainability
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* Article 1 - LLM Debugging Research */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-1 relative h-48 lg:h-auto overflow-hidden">
                      <Image 
                        src="/gmu.jpg" 
                        alt="George Mason University campus" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:col-span-3">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">
                              Large Language Models for Debugging Hypotheses
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>2023</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>George Mason University - DevX Research Lab</span>
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                          Research done through the George Mason University Aspiring Scientists
                          Summer Internship Program (ASSIP) in the summer of 2023. I worked in the Developer Experience
                            Research Lab during the advent of public LLMs, researching how they could be integrated
                            into software that took videos of web app behavior and proposed debugging hypotheses.

                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {["OpenAI", "Web Applications", "Debugging"].map((tag) => (
                            <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a 
                          href="https://journals.gmu.edu/index.php/jssr/article/view/3895" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          <span>Read Abstract</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Image section */}
                    <div className="lg:col-span-1 relative h-48 lg:h-auto overflow-hidden">
                        <Image 
                        src="/crzw.png" 
                        alt="Campus Race to Zero Waste logo" 
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Content section */}
                    <div className="lg:col-span-3">
                        <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">
                                Campus Race to Zero Waste Case Study
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                                <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>2024</span>
                                </div>
                                <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>University of Virginia</span>
                                </div>
                            </div>
                            </div>
                            <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            My 2024 case study outlines UVA&apos;s Race to Zero Waste strategy, focused on zero-waste Green Games that expanded composting and volunteer engagement. Over 66,000 lbs of waste were diverted through the dedication of hardworking staff, volunteers from student organizations, and local residents.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Zero Waste", "Green Games", "Sustainability Reports", "Composting"].map((tag) => (
                            <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                                {tag}
                            </span>
                            ))}
                        </div>

                        <a 
                            href="https://campusracetozerowaste.org/wp-content/uploads/2024/06/2024-CR2ZW-University-of-Virginia-case-study.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <span>View Case Study</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        </CardContent>
                    </div>
                    </div>
                </Card>
                </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Image section */}
                    <div className="lg:col-span-1 relative h-48 lg:h-auto overflow-hidden">
                        <Image 
                          src="/gardening.png" 
                          alt="Gavin Crigger watering a bed of plants" 
                          fill
                          className="object-cover"
                        />
                    </div>

                    {/* Content section */}
                    <div className="lg:col-span-3">
                        <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">
                                A Trip to the Student Garden at UVA
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                                <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>2024</span>
                                </div>
                                <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>UVA Office for Sustainability</span>
                                </div>
                            </div>
                            </div>
                            <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                        My article highlights the UVA Student Garden, which is a community garden dedicated towards fighting food insecurity through sustainable practices like rainwater collection and composting, as well as the community space that it creates.
                        </p>


                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Community Garden", "UVA Grounds", "Sustainability"].map(tag => (
                            <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                                {tag}
                            </span>
                            ))}
                        </div>

                        <a
                            href="https://sustainability.virginia.edu/blog/trip-student-garden-uva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <span>Read Full Article</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        </CardContent>
                    </div>
                    </div>
                </Card>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {/* Image section */}
                <div className="lg:col-span-1 relative h-48 lg:h-auto overflow-hidden">
                    <Image 
                      src="/greengame.jpg" 
                      alt="Student volunteers at a Green Game event" 
                      fill
                      className="object-cover"
                    />
                </div>

                {/* Content section */}
                <div className="lg:col-span-3">
                    <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">
                            UVA Green Games Receive Green Travel Award
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                            <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>June 11, 2024</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>UVA Office for Sustainability</span>
                            </div>
                        </div>
                        </div>
                        <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                        UVA hosted 10 Green Games in the 2023–24 athletic season with community volunteers diverting over 66,000 lbs of waste. The initiative earned GFL’s $6,000 award and a Virginia Green Travel Star Award for Most Innovative Project.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Green Athletics", "Zero‑Waste Events", "Waste Diversion"].map(tag => (
                        <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                        ))}
                    </div>

                    <a
                        href="https://sustainability.virginia.edu/blog/uva-green-games-receive-green-travel-award"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <span>Read Full Article</span>
                        <ExternalLink className="h-4 w-4" />
                    </a>
                    </CardContent>
                </div>
                </div>
            </Card>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {/* Image section */}
                <div className="lg:col-span-1 relative h-48 lg:h-auto overflow-hidden">
                    <Image 
                      src="/paris.png" 
                      alt="Gavin Crigger and Aliza Diop smiling" 
                      fill
                      className="object-cover"
                    />
                </div>

                {/* Content section */}
                <div className="lg:col-span-3">
                    <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">
                            Green Athletics Is Grabbing Gold: Sustainability in Global Sports
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                            <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>2024</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>UVA Office for Sustainability</span>
                            </div>
                        </div>
                        </div>
                        <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                        Co-authored with Aliza Diop, this article detailes how the Paris 2024 Olympics demonstrated a larger trend towards sustainability in collegiate and professional sports.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Green Athletics", "Sustainability Goals"].map(tag => (
                        <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                        ))}
                    </div>

                    <a
                        href="https://sustainability.virginia.edu/blog/green-athletics-grabbing-gold-sustainability-global-sports"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <span>Read Full Article</span>
                        <ExternalLink className="h-4 w-4" />
                    </a>
                    </CardContent>
                </div>
                </div>
            </Card>
            </motion.div>

            
              {/* Placeholder for future articles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-50 border-2 border-dashed border-slate-300">
                  <CardContent className="p-12 text-center">
                    <div className="text-slate-400">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">More Articles Coming Soon</h3>
                      <p className="text-lg">
                        Currently working on additional research projects and publications in cybersecurity and software engineering.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>


            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
