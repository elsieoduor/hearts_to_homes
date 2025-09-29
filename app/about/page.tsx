'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Home, Award, Target, Eye, Menu, X, Briefcase, Grid3X3, Mail } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground dark:bg-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full flex flex-col items-center justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-800/80">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Hearts to Homes</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-primary font-medium">About Us</Link>
            <Link href="/donations" className="hover:text-primary transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu toggle */}
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

        {/* Mobile nav menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4 space-y-2"
          >
            <Link href="/" className="block hover:text-primary">Home</Link>
            <Link href="/about" className="block text-primary font-medium">About Us</Link>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-24"
      >
        <div className="container px-4 md:px-6 ">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Story of Hope and Love
            </h1>
            <p className="text-muted-foreground md:text-xl dark:text-gray-300">
              For over a decade, Hearts to Homes has been a beacon of hope for children in need...
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-24 bg-muted/50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Our Mission",
                icon: <Target className="h-6 w-6" />,
                text: "To provide a safe, nurturing environment where vulnerable children can heal, grow, and thrive..."
              },
              {
                title: "Our Vision",
                icon: <Eye className="h-6 w-6" />,
                text: "A world where every child has access to a loving home, quality education, and opportunity..."
              },
              {
                title: "Our Values",
                icon: <Heart className="h-6 w-6" />,
                text: "Love, compassion, integrity, and respect guide everything we do..."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground dark:text-gray-300">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">How It All Began</h2>
              <div className="space-y-4 text-muted-foreground dark:text-gray-300">
                <p>Hearts to Homes was founded in 2014 by Sarah and Michael Johnson...</p>
                <p>What started as a small initiative has grown into a full-service organization...</p>
                <p>Today, we operate five homes across the community...</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto aspect-video overflow-hidden rounded-xl bg-muted"
            >
              <img
                src="/image.png"
                alt="Founders with children"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-12 md:py-24 bg-muted/50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Holistic Approach</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground dark:text-gray-300 md:text-lg">
              We believe that every child deserves more than just basic needs...
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Safe Housing", icon: <Home className="h-8 w-8" />, desc: "Family-style homes that provide stability" },
              { title: "Education Support", icon: <Award className="h-8 w-8" />, desc: "Tutoring and enrichment programs" },
              { title: "Emotional Care", icon: <Heart className="h-8 w-8" />, desc: "Counseling and emotional support" },
              { title: "Life Skills", icon: <Users className="h-8 w-8" />, desc: "Preparation for independent living" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center space-y-3"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Stories of Transformation</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground dark:text-gray-300 md:text-lg">
              Every child has a unique story...
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Maria",
                title: "Maria's Journey",
                desc: "From struggling student to college graduate",
                story: "I arrived at Hearts to Homes at 12. Today, I’m a nurse.",
                age: "Age 24"
              },
              {
                name: "James",
                title: "James's Success",
                desc: "Overcoming trauma through art",
                story: "Art therapy helped me find my voice. Now I’m a designer.",
                age: "Age 19"
              },
              {
                name: "Sarah Thompson",
                title: "The Thompson Siblings",
                desc: "Keeping families together",
                story: "Staying with my brother helped us both heal.",
                age: "Age 17"
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 dark:text-gray-300">&quot;{s.story}&quot;</p>
                    <p className="text-xs font-medium text-muted-foreground dark:text-gray-400">- {s.name}, {s.age}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 w-full flex flex-col items-center justify-center md:py-24 bg-primary text-primary-foreground dark:bg-primary dark:text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl">Join Our Mission</h2>
            <p className="md:text-lg text-primary-foreground/90">
              Every child deserves a chance at a bright future. Your support can make the difference.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donations">Make a Donation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}


