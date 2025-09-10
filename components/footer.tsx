import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
      <footer className="border-t bg-muted/50">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-bold">Hearts to Homes</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Providing love, care, and hope to children in need since 2014.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="text-muted-foreground hover:text-foreground">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Get Involved</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/volunteer" className="text-muted-foreground hover:text-foreground">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/sponsor" className="text-muted-foreground hover:text-foreground">
                    Sponsor a Child
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-muted-foreground hover:text-foreground">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Contact Info</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>123 Hope Street</p>
                <p>Community City, CC 12345</p>
                <p>Phone: +254 728969182</p>
                <p>Email: info@heartstohomes.org</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Hearts to Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default footer