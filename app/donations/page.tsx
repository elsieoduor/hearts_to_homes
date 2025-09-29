"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Plus, Minus, X } from "lucide-react"
import Link from "next/link"

interface DonationItem {
  id: string
  name: string
  description: string
  category: string
  urgency: "high" | "medium" | "low"
  cost: number
  image: string
}

const donationItems: DonationItem[] = [
  {
    id: "1",
    name: "Nutritious Meals",
    description: "Provide healthy, balanced meals for children for one week",
    category: "Food & Nutrition",
    urgency: "high",
    cost: 50,
    image: "/needs.png",
  },
  {
    id: "2",
    name: "School Supplies Kit",
    description: "Complete set of notebooks, pencils, and educational materials",
    category: "Education",
    urgency: "medium",
    cost: 25,
    image: "/school-supply.png",
  },
  {
    id: "3",
    name: "Winter Clothing Set",
    description: "Warm clothes including jacket, shoes, and accessories",
    category: "Clothing",
    urgency: "high",
    cost: 75,
    image: "/clothes.png",
  },
  {
    id: "4",
    name: "Medical Check-up",
    description: "Comprehensive health examination and basic medical care",
    category: "Healthcare",
    urgency: "high",
    cost: 100,
    image: "/healthcare.png",
  },
  {
    id: "5",
    name: "Educational Toys",
    description: "Learning games and toys that promote cognitive development",
    category: "Education",
    urgency: "low",
    cost: 30,
    image: "/education.png",
  },
  {
    id: "6",
    name: "Bedding & Linens",
    description: "Comfortable bed sheets, pillows, and blankets",
    category: "Housing",
    urgency: "medium",
    cost: 40,
    image: "/beddings.png",
  },
  {
    id: "7",
    name: "Sports Equipment",
    description: "Balls, equipment for outdoor activities and physical development",
    category: "Recreation",
    urgency: "low",
    cost: 35,
    image: "/sports.png",
  },
  {
    id: "8",
    name: "Therapy Session",
    description: "Professional counseling session to support emotional healing",
    category: "Healthcare",
    urgency: "medium",
    cost: 80,
    image: "/therapy.png",
  },
]

const categories = ["All", "Food & Nutrition", "Education", "Clothing", "Healthcare", "Housing", "Recreation"]

export default function DonationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [showCart, setShowCart] = useState(false)

  const filteredItems =
    selectedCategory === "All" ? donationItems : donationItems.filter((item) => item.category === selectedCategory)

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = donationItems.find((i) => i.id === itemId)
      return total + (item ? item.cost * quantity : 0)
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full flex flex-col items-center justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Link href="/donations" className="text-sm font-medium text-primary">
              Donate
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowCart(!showCart)} className="relative">
              <ShoppingCart className="h-4 w-4" />
              {getCartItemCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                  {getCartItemCount()}
                </Badge>
              )}
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="#checkout">Donate Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 ">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
              Make a Difference Today
            </h1>
            <p className="text-muted-foreground md:text-xl text-pretty">
              Choose from our carefully curated list of essential items that directly impact the lives of children in
              our care. Every donation, no matter the size, brings hope and creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 w-full border-y">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Items Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                    <Badge className={getUrgencyColor(item.urgency)} variant="outline">
                      {item.urgency}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-primary">${item.cost}</p>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {cart[item.id] ? (
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => removeFromCart(item.id)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{cart[item.id]}</span>
                          <Button size="sm" variant="outline" onClick={() => addToCart(item.id)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" onClick={() => addToCart(item.id)}>
                          <Plus className="h-3 w-3 mr-1" />
                          Add
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowCart(false)}>
          <div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Your Donation Cart</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowCart(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {Object.keys(cart).length === 0 ? (
                <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {Object.entries(cart).map(([itemId, quantity]) => {
                    const item = donationItems.find((i) => i.id === itemId)
                    if (!item) return null
                    return (
                      <div key={itemId} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">${item.cost} each</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="outline" onClick={() => removeFromCart(itemId)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{quantity}</span>
                          <Button size="sm" variant="outline" onClick={() => addToCart(itemId)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            {Object.keys(cart).length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary">${getCartTotal()}</span>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout">Proceed to Donation</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Impact Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">Your Impact</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg text-pretty">
              See how your donations directly transform lives and create lasting change in our community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">150+</CardTitle>
                <CardDescription>Children Currently Supported</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
                <CardDescription>Funds Go Directly to Programs</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">500+</CardTitle>
                <CardDescription>Lives Changed Since 2014</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
