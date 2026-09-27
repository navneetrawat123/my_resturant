import React, { useEffect, useState } from 'react'
import { fetchMenu } from '../api.js'

const fallbackItems = [
  { id: 1, name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in tomato-butter gravy', price: 249, category: 'Starters', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=400' },
  { id: 2, name: 'Tandoori Chicken', description: 'Char-grilled chicken marinated in yogurt & spices', price: 329, category: 'Starters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=400' },
  { id: 3, name: 'Butter Chicken', description: 'Slow-cooked chicken in creamy tomato sauce', price: 349, category: 'Main Course', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=400' },
  { id: 4, name: 'Dal Makhani', description: 'Black lentils simmered with butter and cream', price: 229, category: 'Main Course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400' },
  { id: 5, name: 'Gulab Jamun', description: 'Milk dumplings soaked in rose-cardamom syrup', price: 129, category: 'Desserts', image: 'https://images.unsplash.com/photo-1666190092208-2d3993ba7cbe?q=80&w=400' },
  { id: 6, name: 'Masala Chai', description: 'Classic spiced Indian tea', price: 79, category: 'Beverages', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=400' },
]

export default function Menu() {
  const [items, setItems] = useState(fallbackItems)
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(true)

  useEffect(() => {
    fetchMenu()
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setItems(data.items)
          setUsingFallback(false)
        }
      })
      .catch(() => { /* keep fallback items if backend isn't connected yet */ })
      .finally(() => setLoading(false))
  }, [])

  const categories = [...new Set(items.map((i) => i.category))]

  return (
    <div>
      <section className="page-hero">
        <h1>Our Menu</h1>
        <p>Handcrafted dishes made fresh every day</p>
      </section>

      <section className="section">
        {usingFallback && !loading && (
          <p className="menu-note">
            Showing sample dishes — connect the PHP backend to load live menu data.
          </p>
        )}
        {categories.map((cat) => (
          <div key={cat} className="menu-category">
            <h2 className="section-title">{cat}</h2>
            <div className="grid grid-3">
              {items.filter((i) => i.category === cat).map((item) => (
                <div className="card dish-card" key={item.id}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="dish-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="price">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
