import React from 'react'
import { Link } from 'react-router-dom'

const features = [
  { icon: '👨‍🍳', title: 'Master Chefs', text: 'Recipes perfected over generations by our expert culinary team.' },
  { icon: '🌿', title: 'Fresh Ingredients', text: 'Locally sourced, farm-fresh produce in every single dish.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'Hot, fresh food delivered to your doorstep in under 40 minutes.' },
]

const highlights = [
  { name: 'Butter Chicken', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=500' },
  { name: 'Veg Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?q=80&w=500' },
  { name: 'Tandoori Chicken', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500' },
]

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to</p>
          <h1>Saffron & Spice</h1>
          <p className="hero-subtitle">Where every dish tells a story of tradition, spice, and soul.</p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
            <Link to="/contact" className="btn btn-outline-light">Book a Table</Link>
          </div>
        </div>
      </section>

      <section className="section features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid grid-3">
          {features.map((f) => (
            <div className="card feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section highlights">
        <h2 className="section-title">Chef's Highlights</h2>
        <div className="grid grid-3">
          {highlights.map((h) => (
            <div className="card dish-card" key={h.name}>
              <img src={h.img} alt={h.name} loading="lazy" />
              <h3>{h.name}</h3>
            </div>
          ))}
        </div>
        <div className="center-cta">
          <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
        </div>
      </section>

      <section className="section cta-band">
        <h2>Hungry already?</h2>
        <p>Create an account to save your favorite dishes and order faster next time.</p>
        <Link to="/register" className="btn btn-primary">Get Started</Link>
      </section>
    </div>
  )
}
