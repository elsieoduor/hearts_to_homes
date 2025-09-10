"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Hearts to Homes</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link
              href="/donations"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Donate
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/donations">Donate Now</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">Get in Touch</h1>
            <p className="text-muted-foreground md:text-xl text-pretty">
              We&quot;d love to hear from you. Whether you have questions about our programs, want to volunteer, or need
              support, we&quot;re here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Hope Street
                        <br />
                        Community City, CC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        Main: (555) 123-4567
                        <br />
                        Emergency: (555) 123-4568
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        General: info@heartstohomes.org
                        <br />
                        Donations: donate@heartstohomes.org
                        <br />
                        Volunteer: volunteer@heartstohomes.org
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        <span className="text-sm italic">24/7 Emergency Support Available</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button variant="outline" asChild>
                    <Link href="/donations">Make a Donation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/volunteer">Volunteer With Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sponsor">Sponsor a Child</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&quot;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Emergency Contact</CardTitle>
              <CardDescription className="text-red-700">
                If you have an urgent matter or emergency involving a child&quot;s safety, please contact us immediately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="destructive" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line: (555) 123-4568
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Email: emergency@heartstohomes.org
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tighter">Visit Us</h2>
            <p className="text-muted-foreground">
              We welcome visitors by appointment. Please call ahead to schedule your visit.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">123 Hope Street, Community City, CC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
