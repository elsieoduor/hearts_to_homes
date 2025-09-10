'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Home, Gift, Menu, X } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-800/80 transition-all">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Hearts to Homes</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/donations" className="hover:text-primary transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Donate Button (desktop) */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/donations">Donate Now</Link>
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4 space-y-2"
          >
            <Link href="/" className="block hover:text-primary">Home</Link>
            <Link href="/about" className="block hover:text-primary">About Us</Link>
            <Link href="/donations" className="block hover:text-primary">Donate</Link>
            <Link href="/contact" className="block hover:text-primary">Contact</Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/donations">Donate Now</Link>
            </Button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">Bringing Hope to Children in Need</h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground dark:text-gray-300 text-lg">
                Hearts to Homes provides a safe, loving environment for children who need it most. Together, we can give them the care, education, and opportunities they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/donations">Make a Donation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-video overflow-hidden rounded-xl bg-muted"
            >
              <img
                src="/image.png"
                alt="Children at Hearts to Homes"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 md:py-24 bg-muted/50 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { icon: <Users className="h-6 w-6" />, number: "150+", label: "Children Supported" },
              { icon: <Home className="h-6 w-6" />, number: "5", label: "Safe Homes" },
              { icon: <Heart className="h-6 w-6" />, number: "10", label: "Years of Service" },
              { icon: <Gift className="h-6 w-6" />, number: "1000+", label: "Donations Received" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-muted-foreground dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Donation Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-12 md:py-24"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Make a Difference Today</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground dark:text-gray-300 text-lg">
              Your donation helps provide food, shelter, education, and love to children in need.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "Essential Needs",
                description: "Food, clothing, and basic necessities",
                image: "/needs.png",
                href: "/donations?category=essentials",
                button: "Donate for Essentials",
              },
              {
                title: "Education",
                description: "School supplies, books, and learning materials",
                image: "/education.png",
                href: "/donations?category=education",
                button: "Support Education",
              },
              {
                title: "Healthcare",
                description: "Medical care and health supplies",
                image: "/healthcare.png",
                href: "/donations?category=healthcare",
                button: "Support Healthcare",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href={card.href}>{card.button}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
