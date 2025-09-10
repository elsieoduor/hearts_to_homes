"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Heart, CreditCard, Shield, Lock } from "lucide-react"
import Link from "next/link"

interface DonationItem {
  id: string
  name: string
  cost: number
  quantity: number
}

// Mock data - in a real app, this would come from the cart state
const mockCartItems: DonationItem[] = [
  { id: "1", name: "Nutritious Meals", cost: 50, quantity: 2 },
  { id: "2", name: "School Supplies Kit", cost: 25, quantity: 1 },
  { id: "4", name: "Medical Check-up", cost: 100, quantity: 1 },
]

export default function CheckoutPage() {
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const [isRecurring, setIsRecurring] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = mockCartItems.reduce((total, item) => total + item.cost * item.quantity, 0)
  const processingFee = Math.round(subtotal * 0.029 * 100) / 100 // 2.9% processing fee
  const total = subtotal + processingFee

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      alert("Thank you for your generous donation! You will receive a confirmation email shortly.")
      // In a real app, redirect to success page
    }, 3000)
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
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <div className="container px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter mb-2">Complete Your Donation</h1>
            <p className="text-muted-foreground">Your generosity makes a real difference in children's lives</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donor Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Donor Information</CardTitle>
                    <CardDescription>Please provide your contact details for the donation receipt</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={donorInfo.firstName}
                          onChange={handleDonorInfoChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={donorInfo.lastName}
                          onChange={handleDonorInfoChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={handleDonorInfoChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={donorInfo.phone}
                        onChange={handleDonorInfoChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" value={donorInfo.address} onChange={handleDonorInfoChange} />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" name="city" value={donorInfo.city} onChange={handleDonorInfoChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" name="state" value={donorInfo.state} onChange={handleDonorInfoChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" name="zipCode" value={donorInfo.zipCode} onChange={handleDonorInfoChange} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose how you'd like to make your donation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                        <Label htmlFor="bank-transfer">Bank Transfer</Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4 pt-4 border-t">
                        <div className="space-y-2">
                          <Label htmlFor="nameOnCard">Name on Card *</Label>
                          <Input
                            id="nameOnCard"
                            name="nameOnCard"
                            value={paymentInfo.nameOnCard}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              placeholder="MM/YY"
                              value={paymentInfo.expiryDate}
                              onChange={handlePaymentInfoChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              placeholder="123"
                              value={paymentInfo.cvv}
                              onChange={handlePaymentInfoChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Additional Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Donation Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recurring"
                        checked={isRecurring}
                        onCheckedChange={(checked) => setIsRecurring(checked === true)}
                      />
                      <Label htmlFor="recurring">Make this a monthly recurring donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full" disabled={isProcessing || !agreedToTerms}>
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Complete Donation - ${total.toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockCartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.cost * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}

                  <Separator />

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Processing Fee</span>
                    <span>${processingFee.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>

                  {isRecurring && (
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm font-medium">Monthly Recurring Donation</p>
                      <p className="text-xs text-muted-foreground">
                        This amount will be charged monthly. You can cancel anytime.
                      </p>
                    </div>
                  )}

                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800">Tax Deductible</p>
                    <p className="text-xs text-green-700">
                      Your donation is tax-deductible. You'll receive a receipt via email.
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
