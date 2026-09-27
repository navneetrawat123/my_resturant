import React from 'react'

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <h1>About Us</h1>
        <p>Our story, our passion, our kitchen.</p>
      </section>

      <section className="section about-grid">
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=700"
          alt="Restaurant interior"
        />
        <div>
          <h2>Our Story</h2>
          <p>
            Founded in 2015, Saffron & Spice began as a small family kitchen with a big dream:
            to bring authentic, home-style Indian cooking to every table. What started as a
            10-seat cafe has grown into a beloved dining destination, but our commitment to
            traditional recipes and warm hospitality has never changed.
          </p>
          <p>
            Every dish on our menu is crafted using time-honored techniques, hand-ground spices,
            and ingredients sourced from trusted local farms — because great food starts with
            great ingredients.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Quality First</h3>
            <p>We never compromise on freshness, hygiene, or the authenticity of our flavors.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>We believe food brings people together, and every guest is treated like family.</p>
          </div>
          <div className="card">
            <h3>Sustainability</h3>
            <p>We partner with local farmers and minimize waste across our kitchen operations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
