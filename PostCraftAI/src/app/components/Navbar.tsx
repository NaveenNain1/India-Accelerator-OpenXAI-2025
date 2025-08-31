'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-20 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            EarnByAITrain
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white/90 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/rent-gpu" className="text-white/90 hover:text-cyan-400 transition-colors">
              Rent Your GPU
            </Link>
            <Link href="/earnings" className="text-white/90 hover:text-cyan-400 transition-colors">
              Earnings
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-white/90 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/rent-gpu" className="block py-2 text-white/90 hover:text-cyan-400 transition-colors">
              Rent Your GPU
            </Link>
            <Link href="/earnings" className="block py-2 text-white/90 hover:text-cyan-400 transition-colors">
              Earnings
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
