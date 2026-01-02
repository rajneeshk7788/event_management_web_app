"use client"

import { motion, Variants, Transition } from "framer-motion"
import Link from "next/link"
import { CalendarDays, Users, Zap, ArrowRight, Search, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"

const featuredEvents = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "Join us for the biggest tech conference of the year with industry leaders",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    attendees: 245,
    maxAttendees: 500,
    image: "/tech-conference-stage.jpg",
    category: "Tech",
  },
  {
    id: "4",
    title: "AI & Machine Learning Summit",
    description: "Explore the latest advancements in artificial intelligence",
    date: "April 5, 2025",
    location: "Boston, MA",
    attendees: 312,
    maxAttendees: 600,
    image: "/artificial-intelligence-presentation.jpg",
    category: "Tech",
  },
  {
    id: "6",
    title: "UX/UI Design Conference",
    description: "Discover cutting-edge design trends and best practices",
    date: "April 18, 2025",
    location: "Seattle, WA",
    attendees: 203,
    maxAttendees: 350,
    image: "/ux-ui-conference.png",
    category: "Design",
  },
]

const categories = [
  {
    name: "Technology",
    icon: "💻",
    count: 234,
    color: "from-blue-500 to-cyan-500",
    image: "/tech-conference-stage.jpg",
  },
  {
    name: "Business",
    icon: "💼",
    count: 189,
    color: "from-purple-500 to-pink-500",
    image: "/collaborative-design-workshop.png",
  },
  {
    name: "Design",
    icon: "🎨",
    count: 156,
    color: "from-orange-500 to-red-500",
    image: "/ux-ui-conference.png",
  },
  {
    name: "Music",
    icon: "🎵",
    count: 203,
    color: "from-green-500 to-emerald-500",
    image: "/vibrant-music-festival.png",
  },
  {
    name: "Sports",
    icon: "⚽",
    count: 167,
    color: "from-yellow-500 to-orange-500",
    image: "/vibrant-sports-event.png",
  },
  {
    name: "Food",
    icon: "🍔",
    count: 142,
    color: "from-red-500 to-pink-500",
    image: "/food-festival.png",
  },
]

const upcomingEvents = [
  {
    id: "7",
    title: "Startup Pitch Night",
    date: "Feb 28, 2025",
    location: "Austin, TX",
    attendees: 89,
    image: "/startup-pitch.png",
    category: "Business",
  },
  {
    id: "8",
    title: "Photography Workshop",
    date: "Mar 5, 2025",
    location: "Portland, OR",
    attendees: 45,
    image: "/photography-workshop.png",
    category: "Arts",
  },
  {
    id: "9",
    title: "Blockchain Summit",
    date: "Mar 12, 2025",
    location: "Miami, FL",
    attendees: 178,
    image: "/blockchain-conference.png",
    category: "Tech",
  },
  {
    id: "10",
    title: "Fitness Bootcamp",
    date: "Mar 18, 2025",
    location: "Los Angeles, CA",
    attendees: 62,
    image: "/fitness-bootcamp.png",
    category: "Sports",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: CalendarDays,
      title: "Smart Event Creation",
      description: "Create stunning events with our intelligent tools and templates",
      linear: "from-primary/20 to-primary/5",
    },
    {
      icon: Users,
      title: "Vibrant Communities",
      description: "Connect with thousands of like-minded event enthusiasts",
      linear: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant notifications keep everyone synchronized and engaged",
      linear: "from-accent/20 to-accent/5",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemTransition: Transition = {
    duration: 0.6,
    ease: "easeOut",
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: itemTransition,
    },
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredEvents.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Moved to top with enhanced visibility */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background linear */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-10"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-block" data-aos="fade-down" suppressHydrationWarning>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                    The Future of Events
                  </span>
                </div>
                <h1
                  className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  suppressHydrationWarning
                >
                  Create Events That{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Inspire
                  </span>
                </h1>
                <p
                  className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  suppressHydrationWarning
                >
                  Discover unforgettable experiences, manage every detail effortlessly, and build meaningful connections
                  with your community
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                data-aos="fade-up"
                data-aos-delay="300"
                suppressHydrationWarning
              >
                <Link href="/events" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-lg h-16 px-8 rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all"
                  >
                    Explore Events <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/create" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-lg h-16 px-8 rounded-xl border-2 border-muted hover:border-primary hover:bg-primary/5 bg-transparent"
                  >
                    Create Event
                  </Button>
                </Link>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative max-w-2xl mx-auto mt-16"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-3 px-6 py-5 rounded-2xl bg-card/50 border-2 border-muted/30 backdrop-blur-sm hover:border-primary/50 transition-all shadow-xl">
                    <Search className="h-6 w-6 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search amazing events..."
                      className="w-full bg-transparent text-foreground placeholder-muted-foreground focus:outline-none text-lg"
                    />
                    <Button className="bg-gradient-to-r from-primary to-accent rounded-lg">Search</Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            data-aos="fade-up"
            suppressHydrationWarning
          >
            {[
              { label: "Active Events", value: "2,500+", icon: CalendarDays },
              { label: "Event Creators", value: "50K+", icon: Users },
              { label: "Cities Worldwide", value: "150+", icon: Zap },
              { label: "Happy Attendees", value: "1M+", icon: Sparkles },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 border border-muted/30 backdrop-blur-sm text-center hover:border-primary/50 transition-all">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Featured Events Carousel */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
            data-aos="fade-up"
            suppressHydrationWarning
          >
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Featured Events</h2>
              <p className="text-xl text-muted-foreground">Handpicked experiences you won't want to miss</p>
            </div>

            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative h-500 md:h-600">
                  {featuredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                      style={{ pointerEvents: currentSlide === index ? "auto" : "none" }}
                    >
                      <div className="relative h-full w-full group">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-end p-8 md:p-12">
                          <div className="max-w-3xl space-y-6">
                            <div className="inline-block px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full">
                              <span className="text-sm font-semibold text-white">{event.category}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white text-balance">{event.title}</h3>
                            <p className="text-xl text-white/90 text-balance">{event.description}</p>
                            <div className="flex flex-wrap items-center gap-6 text-white/80">
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                <span>
                                  {event.attendees} / {event.maxAttendees} attending
                                </span>
                              </div>
                            </div>
                            <Link href={`/events/${event.id}`}>
                              <Button
                                size="lg"
                                className="bg-white text-black hover:bg-white/90 text-lg h-14 rounded-xl"
                              >
                                View Event Details <ArrowRight className="ml-2 h-6 w-6" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <Button
                  onClick={prevSlide}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>
                <Button
                  onClick={nextSlide}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {featuredEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-primary" : "w-2 bg-muted"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Event Categories Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center" data-aos="fade-up" suppressHydrationWarning>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Explore by Category</h2>
              <p className="text-xl text-muted-foreground">Find events that match your interests and passions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  suppressHydrationWarning
                >
                  <Link href={`/events?category=${category.name.toLowerCase()}`}>
                    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                      {/* Background Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                        />
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                        <div className="text-4xl mb-2">{category.icon}</div>
                        <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count} events</p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Upcoming Events Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center" data-aos="fade-up" suppressHydrationWarning>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Happening Soon</h2>
              <p className="text-xl text-muted-foreground">Don't miss these upcoming events near you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  suppressHydrationWarning
                >
                  <Link href={`/events/${event.id}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-card border border-muted/30 hover:border-primary/50 transition-all cursor-pointer">
                      {/* Event Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                          {event.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center" data-aos="fade-up" suppressHydrationWarning>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-8 rounded-xl border-2 border-muted hover:border-primary hover:bg-primary/5 bg-transparent"
                >
                  View All Events <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
            data-aos="fade-up"
            suppressHydrationWarning
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make event management effortless and engaging
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  suppressHydrationWarning
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.linear} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  />
                  <div className="relative p-10 rounded-2xl border border-muted/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            data-aos="zoom-in"
            suppressHydrationWarning
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-10" />
            <div className="relative p-12 md:p-16 text-center backdrop-blur-sm bg-card/50 border border-muted/30">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Stay in the Loop</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get weekly updates on the hottest events, exclusive offers, and insider tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-background/50 border-2 border-muted/30 focus:border-primary focus:outline-none text-foreground placeholder-muted-foreground backdrop-blur-sm"
                />
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-14 px-8 rounded-xl"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Join 50,000+ subscribers. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    EventHub
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Creating unforgettable experiences and building meaningful connections worldwide.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Platform</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <Link href="/events" className="hover:text-primary transition-colors">
                      Browse Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/create" className="hover:text-primary transition-colors">
                      Create Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="hover:text-primary transition-colors">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
              <p className="text-lg">&copy; 2025 EventHub. Crafted with care for amazing events.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
