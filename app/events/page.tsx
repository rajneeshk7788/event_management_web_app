"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EventCard } from "@/components/event-card"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Sparkles,
  Grid3x3,
  List,
  SlidersHorizontal,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AOS from 'aos'

const mockEvents = [
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
    tags: ["Networking", "Innovation", "AI"],
    price: 199,
  },
  {
    id: "2",
    title: "Web Design Workshop",
    description: "Learn modern web design principles and tools from experts",
    date: "March 20, 2025",
    location: "New York, NY",
    attendees: 89,
    maxAttendees: 150,
    image: "/collaborative-design-workshop.png",
    category: "Design",
    tags: ["Workshop", "Design", "UX"],
    price: 99,
  },
  {
    id: "3",
    title: "Startup Meetup",
    description: "Network with entrepreneurs and investors in the startup ecosystem",
    date: "March 22, 2025",
    location: "Austin, TX",
    attendees: 156,
    maxAttendees: 300,
    image: "/startup-networking-event.png",
    category: "Business",
    tags: ["Networking", "Startups", "Investors"],
    price: 0,
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
    tags: ["AI", "Machine Learning", "Data Science"],
    price: 299,
  },
  {
    id: "5",
    title: "Digital Marketing Bootcamp",
    description: "Master digital marketing strategies and tools",
    date: "April 10, 2025",
    location: "Los Angeles, CA",
    attendees: 178,
    maxAttendees: 400,
    image: "/digital-marketing-classroom.jpg",
    category: "Marketing",
    tags: ["Marketing", "SEO", "Social Media"],
    price: 149,
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
    tags: ["UX", "UI", "Design Systems"],
    price: 179,
  },
]

const categories = ["All", "Tech", "Design", "Business", "Marketing"]
const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Most Popular", value: "popular" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("latest")
  const [showFilters, setShowFilters] = useState(false)
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all")

  const filteredEvents = useMemo(() => {
    const filtered = mockEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "free" && event.price === 0) ||
        (priceFilter === "paid" && event.price > 0)
      return matchesSearch && matchesCategory && matchesPrice
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.attendees - a.attendees
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy, priceFilter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    AOS.refresh()
  }, [filteredEvents])

  return (
    <main className="bg-linear-to-b from-background via-background to-card/30 min-h-screen">
      <Navbar />

      {/* Search & Filter Section */}
      <section className="border-b border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div data-aos="fade-down">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold text-primary">Discover Events</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-3 text-balance">Find Your Next Experience</h1>
                  <p className="text-xl text-muted-foreground">
                    {filteredEvents.length} events • Browse and join amazing events
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="h-10 w-10"
                  >
                    <Grid3x3 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="h-10 w-10"
                  >
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Bar with Filters */}
            <div className="space-y-4">
              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-3">
                <div className="relative group flex-1">
                  <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border-2 border-muted/30 backdrop-blur-sm hover:border-primary/50 transition-all">
                    <Search className="h-6 w-6 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search events by title, description, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent border-0 text-lg focus:ring-0 placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-6 rounded-2xl border-2 border-muted/30 hover:border-primary/50"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </Button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 rounded-2xl bg-card/50 border-2 border-muted/30 backdrop-blur-sm space-y-6">
                      {/* Price Filter */}
                      <div>
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Price
                        </h3>
                        <div className="flex gap-2">
                          {["all", "free", "paid"].map((price) => (
                            <Button
                              key={price}
                              variant={priceFilter === price ? "default" : "outline"}
                              onClick={() => setPriceFilter(price as any)}
                              className="capitalize"
                            >
                              {price}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Sort By */}
                      <div>
                        <h3 className="text-sm font-semibold mb-3">Sort By</h3>
                        <div className="flex flex-wrap gap-2">
                          {sortOptions.map((option) => (
                            <Button
                              key={option.value}
                              variant={sortBy === option.value ? "default" : "outline"}
                              onClick={() => setSortBy(option.value)}
                            >
                              {option.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="200">
              {categories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-6 rounded-xl text-base font-semibold transition-all ${selectedCategory === category
                        ? "bg-linear-to-r from-primary to-accent text-white border-0 shadow-lg shadow-primary/30"
                        : "border-2 border-muted/50 hover:border-primary/50"
                      }`}
                  >
                    {category === "All" && <Filter className="mr-2 h-5 w-5" />}
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid/List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div
              key={`events-${viewMode}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
            >
              {filteredEvents.map((event, index) => (
                <div key={event.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  {viewMode === "list" ? (
                    <Link href={`/events/${event.id}`}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-muted/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all group"
                      >
                        <div className="md:w-64 h-48 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <Badge className="mb-2 bg-primary/20 text-primary border-0">{event.category}</Badge>
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                  {event.title}
                                </h3>
                              </div>
                              <span className="text-2xl font-bold text-primary">
                                {event.price === 0 ? "Free" : `$${event.price}`}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {event.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-secondary" />
                              <span>
                                {event.attendees} / {event.maxAttendees}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ) : (
                    <EventCard {...event} />
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-2xl font-semibold mb-2">No events match your filters</p>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setPriceFilter("all")
                }}
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
