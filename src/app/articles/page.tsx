'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink, Calendar, Users } from "lucide-react";

type Article = {
  title: string;
  date: string;
  source: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  isRemoteImage?: boolean;
  buttonLabel: string;
};

const articles: Article[] = [
  {
    title: "TRACE-LLM: Traffic Recognition and Classification of Encrypted LLM Browser Services",
    date: "Spring 2026",
    source: "CS 7457 — Computer Networks, University of Virginia",
    description:
      "Research on the effectiveness of traffic fingerprinting methods for identifying different LLM browser services and broader LLM traffic in encrypted networks. The project was initially written for CS 7457 and later developed for submission to IMC 26.",
    tags: ["Network Security", "LLM Fingerprinting", "Encrypted Traffic", "IMC Submission"],
    href: "/TRACE_LLM.pdf",
    imageSrc: "/TRACE_LLM_diagram.png",
    imageAlt: "Encrypted LLM traffic classification diagram",
    buttonLabel: "Read Full Paper",
  },
  {
    title: "TrafficChop: On Obfuscation of LLM Traffic Flows for the Prevention of Fingerprinting Attacks",
    date: "Spring 2026",
    source: "CS 6501 — Security of AI Systems: Attacks and Defenses, University of Virginia",
    description:
      "Exploration of time-based traffic obfuscation techniques for mitigating LLM traffic fingerprinting attacks. The paper evaluates methods inspired by TRACE-LLM and finds that single feature-class obfuscation was ineffective, suggesting future work should alter more than one feature class at a time.",
    tags: ["AI Security", "Traffic Obfuscation", "Fingerprinting", "TRACE-LLM"],
    href: "/AI_Security_Paper.pdf",
    imageSrc: "/ai_security_sim.png",
    imageAlt: "Traffic obfuscation visualization",
    buttonLabel: "Read Full Paper",
  },
  {
    title: "Local Modeling and Privacy Analysis of LLMTor",
    date: "Spring 2026",
    source: "CS 6501 — Network Security and Privacy, University of Virginia",
    description:
      "Privacy analysis of the LLMTor services, which aims to decouple identity from LLM prompting within the anonymity set of LLMTor users. My contribution focused on constructing the local modeling pipeline and building the experimental simulation used for evaluation.",
    tags: ["Privacy Analysis", "Network Security", "Local Modeling", "Anonymity"],
    href: "/Network_Security_and_Privacy_LLMTor.pdf",
    imageSrc: "/llm_tor_sim.png",
    imageAlt: "LLMTor privacy analysis visualization",
    buttonLabel: "Read Full Paper",
  },
  {
    title: "APE: Adversarial Protocol Extraction Via an Iterative Multi-Agent LLM System",
    date: "Spring 2026",
    source: "CS 6501 — Software Security Testing, University of Virginia",
    description:
      "Exploration of a multi-agent LLM system for probing network endpoints and constructing protocol grammars for fuzzing campaigns. The project was completed under a very restrictive timeframe, which constrained the depth of the final system but still demonstrated the promise of iterative protocol extraction.",
    tags: ["Software Security", "Protocol Extraction", "Multi-Agent LLMs", "Fuzzing"],
    href: "/Software_Security_Testing_Paper.pdf",
    imageSrc: "/ape_diagram.png",
    imageAlt: "APE protocol extraction diagram",
    buttonLabel: "Read Full Paper",
  },
  {
    title: "Sustainability Tour of the University of Virginia",
    date: "June 2026",
    source: "UVA Office for Sustainability",
    description:
      "A StoryMap built during my time as a Sustainability Site Intern, developed across two semesters alongside regular work for the Office for Sustainability. It highlights key UVA sustainability stops including the Rotunda, Student Garden, green buildings, transportation, and waste diversion efforts.",
    tags: ["StoryMap", "Student Engagement", "UVA Grounds", "Sustainability"],
    href: "https://storymaps.arcgis.com/stories/968be2230aa245a3ac152dbcd4a78914",
    imageSrc: "/storymap_capture.png",
    imageAlt: "Sustainability Tour of the University of Virginia StoryMap preview",
    buttonLabel: "View StoryMap",
  },
  {
    title: "CS 6762 Final Project Report — Smartwatch Habit Detection",
    date: "December 2025",
    source: "CS 6762 — Signal Processing, Machine Learning & Control",
    description:
      "A wearable sensing pipeline I built with fellow UVA students to encourage better brushing habits. Using integrated smartwatch accelerometer data, sequential feature selection, and a J48 decision tree ported to cascading if-else logic on an Asus ZenWatch, the system identifies brushing intervals with 97% accuracy and triggers positive reinforcement plus reminders.",
    tags: ["Signal Processing", "Wearable Tech", "Decision Trees", "Positive Reinforcement"],
    href: "/CS%206762%20Final%20Project%20Report.pdf",
    imageSrc: "/watch.png",
    imageAlt: "Smartwatch habit detection prototype",
    buttonLabel: "Read Full Report",
  },
  {
    title: "Large Language Models for Debugging Hypotheses",
    date: "2023",
    source: "George Mason University - DevX Research Lab",
    description:
      "Research done through the George Mason University Aspiring Scientists Summer Internship Program (ASSIP) in the summer of 2023. I worked in the Developer Experience Research Lab during the advent of public LLMs, researching how they could be integrated into software that took videos of web app behavior and proposed debugging hypotheses.",
    tags: ["OpenAI", "Web Applications", "Debugging"],
    href: "https://journals.gmu.edu/index.php/jssr/article/view/3895",
    imageSrc: "/gmu.jpg",
    imageAlt: "George Mason University campus",
    buttonLabel: "Read Abstract",
  },
  {
    title: "Campus Race to Zero Waste Case Study",
    date: "2024",
    source: "University of Virginia",
    description:
      "My 2024 case study outlines UVA's Race to Zero Waste strategy, focused on zero-waste Green Games that expanded composting and volunteer engagement. Over 66,000 lbs of waste were diverted through the dedication of hardworking staff, volunteers from student organizations, and local residents.",
    tags: ["Zero Waste", "Green Games", "Sustainability Reports", "Composting"],
    href: "https://campusracetozerowaste.org/wp-content/uploads/2024/06/2024-CR2ZW-University-of-Virginia-case-study.pdf",
    imageSrc: "/crzw.png",
    imageAlt: "Campus Race to Zero Waste logo",
    buttonLabel: "View Case Study",
  },
  {
    title: "A Trip to the Student Garden at UVA",
    date: "2024",
    source: "UVA Office for Sustainability",
    description:
      "My article highlights the UVA Student Garden, which is a community garden dedicated towards fighting food insecurity through sustainable practices like rainwater collection and composting, as well as the community space that it creates.",
    tags: ["Community Garden", "UVA Grounds", "Sustainability"],
    href: "https://sustainability.virginia.edu/blog/trip-student-garden-uva",
    imageSrc: "/gardening.png",
    imageAlt: "Gavin Crigger watering a bed of plants",
    buttonLabel: "Read Full Article",
  },
  {
    title: "UVA Green Games Receive Green Travel Award",
    date: "June 11, 2024",
    source: "UVA Office for Sustainability",
    description:
      "UVA hosted 10 Green Games in the 2023–24 athletic season with community volunteers diverting over 66,000 lbs of waste. The initiative earned GFL's $6,000 award and a Virginia Green Travel Star Award for Most Innovative Project.",
    tags: ["Green Athletics", "Zero-Waste Events", "Waste Diversion"],
    href: "https://sustainability.virginia.edu/blog/uva-green-games-receive-green-travel-award",
    imageSrc: "/greengame.jpg",
    imageAlt: "Student volunteers at a Green Game event",
    buttonLabel: "Read Full Article",
  },
  {
    title: "Green Athletics Is Grabbing Gold: Sustainability in Global Sports",
    date: "2024",
    source: "UVA Office for Sustainability",
    description:
      "Co-authored with Aliza Diop, this article detailes how the Paris 2024 Olympics demonstrated a larger trend towards sustainability in collegiate and professional sports.",
    tags: ["Green Athletics", "Sustainability Goals"],
    href: "https://sustainability.virginia.edu/blog/green-athletics-grabbing-gold-sustainability-global-sports",
    imageSrc: "/paris.png",
    imageAlt: "Gavin Crigger and Aliza Diop smiling",
    buttonLabel: "Read Full Article",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
        <Link href="/" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Home</Link>
        <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Articles</span>
        <Link href="/personal" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Personal</Link>
        <a href="https://www.linkedin.com/in/gavin-crigger" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">LinkedIn ↗</a>
      </nav>
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

function ArticleCard({ article }: { article: Article }) {
  const image = article.isRemoteImage ? (
    <img src={article.imageSrc} alt={article.imageAlt} className="h-full w-full object-cover" />
  ) : (
    <Image src={article.imageSrc} alt={article.imageAlt} fill className="object-cover" />
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
      <Card className="bg-emerald-50 border-none group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex flex-col">
          <div className="relative h-56 lg:h-72 overflow-hidden">{image}</div>
          <CardContent className="p-8 w-full">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-800 group-hover:text-emerald-700 transition-colors">{article.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{article.source}</span>
                  </div>
                </div>
              </div>
              <ExternalLink className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors flex-shrink-0 mt-1" />
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-lg max-w-none">{article.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <span>{article.buttonLabel}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Articles() {
  return (
    <div className="text-slate-900">
      <Header />

      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 to-green-200">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-20 px-4">
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
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                <FileText className="h-8 w-8" />
                📚 Articles & Publications
              </h2>
              <p className="text-lg text-slate-600">Academic publications across computer science and sustainability</p>
            </motion.div>

            <div className="space-y-8">
              {articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }} viewport={{ once: true }}>
                <Card className="bg-slate-50 border-2 border-dashed border-slate-300">
                  <CardContent className="p-12 text-center">
                    <div className="text-slate-400">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">More Articles Coming Soon</h3>
                      <p className="text-lg">Currently working on additional research projects and publications in cybersecurity and software engineering.</p>
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
