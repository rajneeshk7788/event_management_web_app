"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  id: string
  title: string
  description: string
  date: string
  location: string
  attendees: number
  maxAttendees: number
  image: string
  category: string
  tags?: string[]
  price?: number
}

export function EventCard({
  id,
  title,
  description,
  date,
  location,
  attendees,
  maxAttendees,
  image,
  category,
  tags,
  price,
}: EventCardProps) {
  const attendancePercentage = Math.round((attendees / maxAttendees) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/events/${id}`}>
        <div
          className="h-full rounded-2xl border border-muted/50 overflow-hidden bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300 cursor-pointer flex flex-col group shadow-lg hover:shadow-2xl hover:shadow-primary/10"
          data-aos="fade-up"
        >
          {/* Image Container */}
          <div className="relative h-56 bg-gradient-to-br from-primary/30 to-accent/20 overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">{category}</Badge>
              {price !== undefined && (
                <Badge className="bg-black/50 backdrop-blur-sm text-white border-0">
                  {price === 0 ? "Free" : `$${price}`}
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-7">
            <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-base mb-4 line-clamp-2 flex-1">{description}</p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Meta Information */}
            <div className="space-y-4 mb-7 pb-7 border-b border-muted/50">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">{location}</span>
              </div>

              {/* Attendance Bar */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-5 w-5 text-secondary" />
                    <span className="font-medium">
                      {attendees} / {maxAttendees}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary">{attendancePercentage}%</span>
                </div>
                <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${attendancePercentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all rounded-xl group/btn">
              <span>View Details</span>
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
