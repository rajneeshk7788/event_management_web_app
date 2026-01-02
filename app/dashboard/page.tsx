'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, TrendingUp, BarChart3, Edit2, Trash2, Eye, Plus, Filter } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

// Mock dashboard data
const mockUserEvents = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    date: 'March 15, 2025',
    attendees: 245,
    capacity: 500,
    status: 'upcoming',
    views: 1240,
    registrations: 245
  },
  {
    id: '2',
    title: 'Web Design Workshop',
    date: 'March 20, 2025',
    attendees: 89,
    capacity: 150,
    status: 'upcoming',
    views: 456,
    registrations: 89
  },
  {
    id: '3',
    title: 'Startup Meetup',
    date: 'February 10, 2025',
    attendees: 156,
    capacity: 300,
    status: 'completed',
    views: 890,
    registrations: 156
  }
]

const stats = [
  {
    label: 'Total Events',
    value: '12',
    icon: Calendar,
    color: 'from-primary'
  },
  {
    label: 'Total Attendees',
    value: '2,543',
    icon: Users,
    color: 'from-secondary'
  },
  {
    label: 'Total Views',
    value: '8,234',
    icon: Eye,
    color: 'from-accent'
  },
  {
    label: 'Revenue',
    value: '$24,500',
    icon: TrendingUp,
    color: 'from-green-500'
  }
]

export default function DashboardPage() {
  const [filter, setFilter] = useState('all')
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  const filteredEvents = mockUserEvents.filter(event => {
    if (filter === 'upcoming') return event.status === 'upcoming'
    if (filter === 'completed') return event.status === 'completed'
    return true
  })

  const toggleEventSelection = (eventId: string) => {
    setSelectedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.AOS) {
  //     window.AOS.refresh()
  //   }
  // }, [])

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center justify-between" data-aos="fade-down">
            <div>
              <h1 className="text-4xl font-bold">Event Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage and track your events</p>
            </div>
            <Link href="/create">
              <Button className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create Event
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={index} variants={itemVariants} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card className="relative overflow-hidden h-full">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${stat.color} opacity-5 rounded-full -mr-16 -mt-16`} />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex items-center gap-2" data-aos="fade-up">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex gap-2 flex-wrap">
              {['all', 'upcoming', 'completed'].map(status => (
                <motion.button
                  key={status}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === status
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Events Table */}
          <motion.div variants={itemVariants} data-aos="fade-up" data-aos-delay="100">
            <Card>
              <CardHeader>
                <CardTitle>Your Events</CardTitle>
                <CardDescription>{filteredEvents.length} events</CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {filteredEvents.length > 0 ? (
                    <motion.div
                      key="events-table"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {filteredEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group"
                          data-aos="fade-in"
                        >
                          {/* Selection Checkbox */}
                          <input
                            type="checkbox"
                            checked={selectedEvents.includes(event.id)}
                            onChange={() => toggleEventSelection(event.id)}
                            className="w-4 h-4 rounded border-border cursor-pointer"
                          />

                          {/* Event Info */}
                          <div className="flex-1 ml-4">
                            <div className="flex items-center gap-3">
                              <div>
                                <Link href={`/events/${event.id}`}>
                                  <h3 className="font-semibold hover:text-primary transition-colors">
                                    {event.title}
                                  </h3>
                                </Link>
                                <p className="text-sm text-muted-foreground">{event.date}</p>
                              </div>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="hidden lg:flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-muted-foreground">Attendees</p>
                              <p className="font-semibold">{event.attendees}/{event.capacity}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Views</p>
                              <p className="font-semibold">{event.views}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Registrations</p>
                              <p className="font-semibold">{event.registrations}</p>
                            </div>
                          </div>

                          {/* Status */}
                          <Badge
                            variant={event.status === 'upcoming' ? 'default' : 'outline'}
                            className="mx-4"
                          >
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </Badge>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-lg hover:bg-muted transition-colors"
                              title="View event"
                            >
                              <Eye className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-lg hover:bg-muted transition-colors"
                              title="Edit event"
                            >
                              <Edit2 className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-lg hover:bg-muted transition-colors"
                              title="Delete event"
                            >
                              <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive transition-colors" />
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-events"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12"
                    >
                      <p className="text-muted-foreground mb-4">No events found</p>
                      <Link href="/create">
                        <Button>Create Your First Event</Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Analytics */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Upcoming Events */}
            <motion.div variants={itemVariants} data-aos="fade-up" data-aos-delay="100">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUserEvents
                      .filter(e => e.status === 'upcoming')
                      .map(event => (
                        <div key={event.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                          <span className="font-medium">{event.title}</span>
                          <Badge variant="outline">{event.date}</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={itemVariants} data-aos="fade-up" data-aos-delay="200">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Top Performing Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUserEvents
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 3)
                      .map(event => (
                        <div key={event.id} className="space-y-2 pb-4 border-b border-border last:border-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{event.title}</span>
                            <span className="text-sm font-semibold text-primary">{event.views} views</span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(event.views / 1500) * 100}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
