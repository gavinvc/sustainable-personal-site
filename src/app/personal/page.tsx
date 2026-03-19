"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ArrowLeft, Mountain, Heart, Music, Camera, MapPin, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-emerald-700 cursor-pointer">🌱 GC</span>
      </Link>
      <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
        <Link href="/" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Home</Link>
        <Link href="/articles" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">Articles</Link>
        <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Personal</span>
        <Link href="/personal#hiking" className="hover:text-emerald-700 transition-colors">Hiking</Link>
        <Link href="/personal#crochet" className="hover:text-emerald-700 transition-colors">Crochet</Link>
        <Link href="/personal#music" className="hover:text-emerald-700 transition-colors">Music</Link>
        <a href="https://www.linkedin.com/in/gavin-crigger-58257b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-400 pb-1">LinkedIn ↗</a>
      </nav>
      <nav className="md:hidden flex flex-col space-y-1 text-xs text-slate-700 font-medium text-right">
        <div className="flex space-x-3">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <Link href="/articles" className="hover:text-emerald-700 transition-colors">Articles</Link>
          <span className="text-emerald-600 font-semibold">Personal</span>
        </div>
      </nav>
    </header>
  );
};

export default function Personal() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [slideProgress, setSlideProgress] = useState<number>(0);

  useEffect(() => {
    const criticalImages = [
      '/sweater.png','/hat.png','/bag.png','/frog.png',
      '/rag.png','/smokies.png','/superior.png',
      '/flipturn.png','/guitar.png','/rachel.png',
      '/road-trip-day-1.jpeg','/road-trip-day-2.jpeg','/road-trip-day-3.jpeg',
      '/road-trip-day-4.jpeg','/road-trip-day-5.jpeg','/road-trip-day-6.jpeg','/road-trip-day-7.jpeg',
      '/road-trip-day-8.jpeg'
    ];
    
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.onload = () => handleImageLoad(src);
      img.src = src;
    });
  }, []);

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  };

  const slideshowData = [
    { img: 1, text: "Sunset at a Cape Cod inlet beach" },
    { img: 2, text: "Great Island trail (during a mildly treacherous snowstorm)" },
    { img: 3, text: "Boston! Newbury Street!" },
    { img: 4, text: "Mid-Beehive hike at Acadia" },
    { img: 5, text: "Lake Placid (frozen over)" },
    { img: 6, text: "Lounging atop Cascade Mountain"},
    { img: 7, text: "Whirlpool State Park!" },
    { img: 8, text: "Retiring at New River Gorge (exhausted)" },
  ];

  return (
    <div className="text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 to-green-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-20 px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4">Beyond the Code</h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6">
            All about me outside of work and education!
          </p>
          <Link href="/">
            <Button className="flex items-center gap-2 mx-auto bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </motion.div>
      </section>

      <main className="bg-emerald-50">

        {/* ================= HIKING (NOW FIRST) ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto hiking" id="hiking">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
              <Mountain className="h-8 w-8" />
              Outdoor Adventures 🥾
            </h2>
            <p className="text-lg text-slate-600">
              Big nature guy
            </p>
          </motion.div>
          {/* Slideshow + Static Text */}
            <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">

              {/* LEFT TEXT (compact, NOT full height) */}
              <div className="bg-white rounded-xl shadow p-6 lg:w-[28%]">
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                  Northeast Road Trip
                </h3>

                <p className="text-slate-700 mb-3 leading-relaxed">
                  I spent my final college spring break driving through the northeast,
                  hitting a mix of cities and national parks. Check it out!
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Cape Cod → Boston → Acadia → Adirondacks → Niagara Falls →
                  Pittsburgh → New River Gorge
                </p>
              </div>

              {/* RIGHT SLIDESHOW (dominant) */}
              <div className="lg:w-[72%]">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Splide
                    options={{
                      type: "loop",
                      autoplay: true,
                      interval: 3500,
                      pauseOnHover: true,
                      arrows: true,
                      pagination: false,
                    }}
                    className="h-full"
                    onMounted={(splide) => {
                      const total = splide.length || slideshowData.length;
                      const idx = splide.index || 0;
                      const pct = ((idx % total) + 1) / total * 100;
                      setSlideProgress(pct);
                    }}
                    onMoved={(splide) => {
                      const total = splide.length || slideshowData.length;
                      const idx = splide.index || 0;
                      const pct = ((idx % total) + 1) / total * 100;
                      setSlideProgress(pct);
                    }}
                  >
                    {slideshowData.map((slide) => (
                      <SplideSlide key={slide.img}>
                        <div className="relative w-full h-full">
                          <Image
                            src={`/road-trip-day-${slide.img}.jpeg`}
                            alt={`Road Trip ${slide.img}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 72vw"
                            className="object-cover"
                            priority={slide.img === 1}
                          />

                          <div className="absolute inset-0 bg-black/25 flex items-end">
                            <div className="p-6 text-white text-lg font-semibold">
                              {slide.text}
                            </div>
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                    </Splide>

                    {/* Progress bar overlay */}
                    <div className="absolute left-6 right-6 bottom-6 pointer-events-none">
                      <div className="bg-emerald-200 h-1 rounded-full w-full">
                        <div
                          className="bg-emerald-600 h-1 rounded-full transition-all"
                          style={{ width: `${slideProgress}%` }}
                        />
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

              {/* Hiking Adventures Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shenandoah National Park",
                location: "Virginia",
                date: "Fall 2024+",
                description: "I've been hiking here since 2016, and I recently hiked the Old Rag Mountain loop trail - a challenging hike done with friends",
                image: "/rag.png"
              },
              {
                title: "Smoky Mountains National Park",
                location: "Tennessee/North Carolina",
                date: "Spring 2025",
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
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    {/* Fallback gradient background while loading */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-400 transition-opacity duration-500 ${
                        loadedImages.has(hike.image) ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    
                    {/* Actual image */}
                    <Image
                      src={hike.image}
                      alt={hike.title}
                      fill
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index === 0}
                      className={`object-cover group-hover:scale-105 transition-all duration-300 ${
                        loadedImages.has(hike.image) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(hike.image)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <section className="py-20 px-6 bg-white crochet" id="crochet">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                <Heart className="h-8 w-8" />
                Crochet 🧶
              </h2>
              <p className="text-lg text-slate-600">
                Crafting is my middle name
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cozy Winter Sweater",
                  description: "Hand-crocheted in free time over (more than) a couple months",
                  difficulty: "Intermediate",
                  color: "Maroon and white",
                  image: "/sweater.png"
                },
                {
                  title: "Sunburst Hat",
                  description: "Hat crocheted from 5 panels for a friend",
                  difficulty: "Easy",
                  color: "White and browns",
                  image: "/hat.png"
                },
                {
                  title: "Market Tote Bag",
                  description: "Complex granny squares sewed together",
                  difficulty: "Advanced",
                  color: "Yellow, blue, and white",
                  image: "/bag.png"
                },
                {
                  title: "Amigurumi Animals",
                  description: "Crochet frogz for friends",
                  difficulty: "Intermediate",
                  color: "Various",
                  image: "/frog.png"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-emerald-50 border-none h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="relative w-full aspect-square rounded-lg mb-4 overflow-hidden bg-white">
                        {/* Fallback gradient background while loading */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-300 transition-opacity duration-500 ${
                            loadedImages.has(project.image) ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        
                        {/* Actual image */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          loading={index < 4 ? "eager" : "lazy"}
                          priority={index === 0}
                          className={`object-cover group-hover:scale-105 transition-all duration-300 ${
                            loadedImages.has(project.image) ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(project.image)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
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
        <section className="py-20 px-6 bg-emerald-50 music" id="music">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                <Music className="h-8 w-8" />
                Musical Journey 🎵
              </h2>
              <p className="text-lg text-slate-600">
                If my spotify wrapped is less than 100,000 minutes its a bad year
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Text Content - Takes up 2/3 of the width */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="bg-white border-none h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Current Favorites</h3>
                    <div className="space-y-4 mb-8">
                      {[
                        { genre: "Indie", artists: "Nilüfer Yanya, Indigo De Souza, Flipturn, Spacey Jane, The Backseat Lovers" },
                        { genre: "Alternative Pop", artists: "Sarah Kinsley, Spill Tab, Rachel Chinouriri, Lorde" },
                        { genre: "And more", artists: "Saya Gray, Doechii, Ethel Cain" },
                      ].map((music, index) => (
                        <div key={music.genre} className="border-l-4 border-emerald-300 pl-4">
                          <h4 className="font-semibold text-emerald-700">{music.genre}</h4>
                          <p className="text-slate-600 text-sm">{music.artists}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Musical Experiences</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Concert Memories</p>
                          <p className="text-sm text-slate-600">Live performances like Rachel Chinouriri (pictured), Flipturn (also pictured), Lorde, and local Charlottesville bands</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Music className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Piano</p>
                          <p className="text-sm text-slate-600">I have been practicing and learning piano in my own time since 2018</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-slate-700">Guitar</p>
                          <p className="text-sm text-slate-600">I am in the midst of teaching myself guitar - how successful I am is still to be seen...</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Music Carousel - Takes up 1/3 of the width */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="lg:col-span-1 h-full"
              >
                <Card className="bg-white border-none h-full overflow-hidden flex flex-col">
                  <div className="flex-1">
                    <Carousel
                      items={[
                        {
                          src: "/flipturn.png",
                          alt: "Flipturn concert",
                          caption: "Flipturn live at Ting Pavilion in Charlottesville"
                        },
                        {
                          src: "/guitar.png",
                          alt: "Guitar practice",
                          caption: "Learning guitar in my free time"
                        },
                        {
                          src: "/rachel.png",
                          alt: "Rachel Chinouriri concert",
                          caption: "Rachel Chinouriri at the 9:30 Club in DC"
                        }
                      ]}
                    />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}