import React, { useState } from 'react'
import { sendContactMessage } from '../api.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', text: '' })
    setLoading(true)
    try {
      const res = await sendContactMessage(form)
      setStatus({ type: 'success', text: res.message || 'Message sent!' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="section contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 123 Rajpur Road, Dehradun, Uttarakhand, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@saffronspice.com</p>
          <p>🕒 Mon - Sun: 11:00 AM - 11:00 PM</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          {status.text && (
            <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {status.text}
            </div>
          )}
          <label>Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />

          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  )
}
