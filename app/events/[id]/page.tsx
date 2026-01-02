'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Share2, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Mock event detail data
const mockEventDetail = {
  id: '1',
  title: 'Tech Conference 2025',
  description: 'Join us for the biggest tech conference of the year with industry leaders sharing insights on the future of technology.',
  fullDescription: 'This comprehensive tech conference brings together innovators, entrepreneurs, and tech enthusiasts from around the world. Over two days, attend keynote speeches from industry leaders, participate in hands-on workshops, and network with like-minded professionals. Topics include AI, cloud computing, cybersecurity, and emerging technologies.',
  date: 'March 15, 2025',
  time: '9:00 AM - 5:00 PM',
  location: 'San Francisco, CA',
  address: 'Moscone Center, 747 Howard St',
  attendees: 245,
  maxAttendees: 500,
  image: '/tech-conference-stage.jpg',
  category: 'Tech',
  speakers: [
    { name: 'Sarah Chen', title: 'VP of AI at Tech Corp' },
    { name: 'James Wilson', title: 'CEO of StartupXYZ' },
    { name: 'Emma Davis', title: 'Lead Architect at CloudTech' }
  ]
}

export default function EventDetailPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [isAttending, setIsAttending] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/events">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Button>
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden h-80 md:h-96"
          >
            <img
              src={mockEventDetail.image || "/placeholder.svg"}
              alt={mockEventDetail.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4">{mockEventDetail.category}</Badge>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">{mockEventDetail.title}</h1>
            <p className="text-xl text-muted-foreground">{mockEventDetail.description}</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              onClick={() => setIsAttending(!isAttending)}
              className={isAttending ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              {isAttending ? '✓ Attending' : 'Join Event'}
            </Button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLiked(!isLiked)}
              className="px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors flex items-center gap-2"
            >
              <Share2 className="h-5 w-5" />
              Share
            </motion.button>
          </motion.div>

          {/* Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-semibold">{mockEventDetail.date}</p>
                  <p className="text-sm">{mockEventDetail.time}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">{mockEventDetail.location}</p>
                  <p className="text-sm">{mockEventDetail.address}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Attendees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border"
          >
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold">{mockEventDetail.attendees} of {mockEventDetail.maxAttendees} attending</p>
              <div className="w-48 h-2 bg-muted rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(mockEventDetail.attendees / mockEventDetail.maxAttendees) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">About This Event</h2>
            <p className="text-muted-foreground leading-relaxed">{mockEventDetail.fullDescription}</p>
          </motion.div>

          {/* Speakers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockEventDetail.speakers.map((speaker, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4" />
                    <p className="font-semibold">{speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
