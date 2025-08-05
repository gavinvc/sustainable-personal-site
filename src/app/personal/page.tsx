'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Mountain, Heart, Music, Camera, MapPin, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
        <Link href="/" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Home</Link>
        <Link href="/#about" className="hover:text-emerald-700 transition-colors">About</Link>
        <Link href="/#projects" className="hover:text-emerald-700 transition-colors">Projects</Link>
        <Link href="/#contact" className="hover:text-emerald-700 transition-colors">Contact</Link>
        <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Personal</span>
        <a href="https://www.linkedin.com/in/gavin-crigger-58257b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">LinkedIn ↗</a>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden flex flex-col space-y-1 text-xs text-slate-700 font-medium text-right">
        <div className="flex space-x-3">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-emerald-700 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-emerald-700 transition-colors">Projects</Link>
        </div>
        <div className="flex space-x-3">
          <Link href="/#contact" className="hover:text-emerald-700 transition-colors">Contact</Link>
          <span className="text-emerald-600 font-semibold">Personal</span>
          <a href="https://www.linkedin.com/in/gavin-crigger-58257b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">LinkedIn ↗</a>
        </div>
      </nav>
    </header>
  );
};

export default function Personal() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4">Beyond the Code</h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6">Adventures, creativity, and passions that fuel my journey</p>
          <Link href="/">
            <Button className="flex items-center gap-2 mx-auto bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </motion.div>
      </section>

      <main className="bg-emerald-50">
        {/* Hiking Adventures Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
              <Mountain className="h-8 w-8" />
              🥾 Hiking Adventures
            </h2>
            <p className="text-lg text-slate-600">
              Exploring nature&apos;s beauty, one trail at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shenandoah National Park",
                location: "Virginia",
                date: "Fall 2024+",
                description: "I've been hiking here since 2016, and recently hiked the Old Rag Mountain loop trail - a challenging hike done with friends",
                image: "/rag.png"
              },
              {
                title: "Smoky Mountains National Park",
                location: "Tennessee/North Carolina",
                date: "Summer 2024",
                description: "Multiple hikes across the Smoky Mountains, most scenic being the Mount LeConte trail",
                image: "/smokies.png"
              },
              {
                title: "Pictured Rocks National Lakeshore",
                location: "Michigan",
                date: "Summer 2025",
                description: "Incredible hikes along the Lake Superior coastline, with unique rock formations and beautiful weather",
                image: "/superior.png"
              }
            ].map((hike, index) => (
              <motion.div
                key={hike.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={hike.image}
                      alt={hike.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {hike.date}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {hike.title}
                    </h3>
                    <p className="text-emerald-600 text-sm font-medium mb-3">{hike.location}</p>
                    <p className="text-slate-600">{hike.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Crochet Projects Section */}
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
                <Heart className="h-8 w-8" />
                🧶 Crochet Creations
              </h2>
              <p className="text-lg text-slate-600">
                Handmade with love - sustainable crafting for a cozy world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cozy Winter Sweater",
                  description: "Hand-crocheted using sustainable wool yarn",
                  difficulty: "Advanced",
                  color: "Forest Green"
                },
                {
                  title: "Baby Blanket Set",
                  description: "Soft cotton baby blanket with matching hat",
                  difficulty: "Intermediate",
                  color: "Pastel Yellow"
                },
                {
                  title: "Market Tote Bag",
                  description: "Eco-friendly alternative to plastic bags",
                  difficulty: "Beginner",
                  color: "Natural Beige"
                },
                {
                  title: "Amigurumi Animals",
                  description: "Cute crocheted stuffed animals collection",
                  difficulty: "Intermediate",
                  color: "Various"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-emerald-50 border-none h-full group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-32 bg-gradient-to-br from-emerald-200 to-green-300 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-4xl">🧶</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-emerald-800">{project.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className="bg-emerald-200 text-emerald-800 px-2 py-1 rounded">
                          {project.difficulty}
                        </span>
                        <span className="text-slate-500">{project.color}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section className="py-20 px-6 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                <Music className="h-8 w-8" />
                🎵 Musical Journey
              </h2>
              <p className="text-lg text-slate-600">
                Rhythms and melodies that inspire my creativity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Current Favorites</h3>
                    <div className="space-y-4">
                      {[
                        { genre: "Indie Folk", artists: "Bon Iver, Fleet Foxes, Iron & Wine" },
                        { genre: "Electronic", artists: "ODESZA, Tycho, Emancipator" },
                        { genre: "Classical", artists: "Ludovico Einaudi, Max Richter" },
                        { genre: "Alternative", artists: "Radiohead, Arctic Monkeys, Tame Impala" }
                      ].map((music, index) => (
                        <div key={music.genre} className="border-l-4 border-emerald-300 pl-4">
                          <h4 className="font-semibold text-emerald-700">{music.genre}</h4>
                          <p className="text-slate-600 text-sm">{music.artists}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Musical Experiences</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Concert Memories</p>
                          <p className="text-sm text-slate-600">Live performances that left lasting impressions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Music className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Coding Playlists</p>
                          <p className="text-sm text-slate-600">Curated music for deep focus sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Vinyl Collection</p>
                          <p className="text-sm text-slate-600">Building a sustainable music library</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-8">
                🌟 Fun Facts About Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "I believe sustainable living starts with small daily choices",
                  "My favorite hiking snack is homemade trail mix",
                  "I learned to crochet from YouTube during the pandemic",
                  "Music helps me solve coding problems more creatively",
                  "I&apos;m working towards visiting all US National Parks",
                  "Every crochet project I make uses eco-friendly yarn"
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-300"
                  >
                    <p className="text-slate-700">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
