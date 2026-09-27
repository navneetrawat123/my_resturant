import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3>Saffron & Spice</h3>
          <p>Authentic Indian flavors, crafted with passion and served with love since 2015.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>123 Rajpur Road, Dehradun, Uttarakhand</p>
          <p>+91 98765 43210</p>
          <p>hello@saffronspice.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Saffron & Spice. All rights reserved.
      </div>
    </footer>
  )
}
