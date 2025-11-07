"use client";

import dynamic from "next/dynamic";

const CoffeeScene = dynamic(() => import("@/components/CoffeeScene"), {
  ssr: false,
  loading: () => <div className="canvas-fallback">Brewing 3D goodness…</div>,
});

const featureHighlights = [
  {
    title: "Curated Origins",
    description:
      "Seasonal beans sourced directly from small farms across Colombia, Ethiopia, and Guatemala.",
  },
  {
    title: "Slow Crafted Pastries",
    description: "Baked fresh each morning with French butter, wildflower honey, and organic flour.",
  },
  {
    title: "Immersive Atmosphere",
    description:
      "Analog vinyl playlists, warm lighting, and scent design to slow time down for every guest.",
  },
  {
    title: "Barista Labs",
    description: "Monthly tasting flights and classes designed by our head roaster, Nina Alvarez.",
  },
];

const menuFavorites = [
  {
    title: "Aurora Sunrise",
    description: "Blood orange cold brew, vanilla bean foam, candied citrus zest.",
    price: "$6.50",
  },
  {
    title: "Lunar Latte",
    description: "Single-origin espresso, pistachio milk, toasted cardamom crema.",
    price: "$5.90",
  },
  {
    title: "Midnight Cortado",
    description: "Double ristretto, panela syrup, smoked sea salt finish.",
    price: "$5.30",
  },
  {
    title: "Golden Kouign",
    description: "Caramelized laminated pastry, saffron sugar, vanilla chantilly.",
    price: "$5.80",
  },
];

const testimonials = [
  {
    quote:
      "The Aurora Sunrise is a revelation. Balanced citrus with a silky finish—easily the best drink downtown.",
    author: "Jordan Michaels",
    role: "Coffee Journalist, Brewline",
  },
  {
    quote:
      "Design-forward, welcoming, and the playlists are immaculate. My go-to space for deep work and good company.",
    author: "Priya Desai",
    role: "Founder, Ember Studio",
  },
  {
    quote:
      "I hosted a cupping workshop here and the staff went above and beyond. Their passion for craft is tangible.",
    author: "Luis Romero",
    role: "Head Roaster, Carta Café",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-eyebrow">Aurora Café · Est. 2024</span>
            <h1 className="hero-title">Craft coffee that glows at the edge of dawn.</h1>
            <p className="hero-description">
              A sanctuary for seekers of specialty coffee, artisan pastries, and luminous experiences
              at the heart of the arts district. Every sip is slow roasted, every moment warmly lit.
            </p>
            <div className="hero-cta">
              <a href="#reserve" className="btn btn-primary">
                Reserve a Tasting
              </a>
              <a href="#menu" className="btn btn-secondary">
                View Signature Menu
              </a>
            </div>
            <p className="tagline">
              <span aria-hidden="true">✦</span> Open daily · Sunrise sessions & midnight pours
            </p>
          </div>
          <div className="canvas-wrapper" aria-hidden="true">
            <CoffeeScene />
          </div>
        </div>
      </section>

      <section className="container split" id="about">
        <div className="panel">
          <h2>Slow down and savor the glow.</h2>
          <p>
            Inspired by Nordic roasting houses and Tokyo kissaten, Aurora Café was crafted as a refuge
            from the velocity of the city. Our baristas collaborate with micro-lot roasters and local
            pastry artisans to deliver a menu that rotates with the moon cycle—always surprising,
            never rushed.
          </p>
        </div>
        <div className="panel">
          <h2>Stay for the experience.</h2>
          <p>
            We pair atmospheric lighting, immersive soundscapes, and thoughtful hospitality to give
            every guest their perfect moment. Whether you&apos;re hosting an intimate meet-up or
            drafting your next chapter, Aurora is designed to let ideas bloom.
          </p>
        </div>
      </section>

      <section className="container" id="features">
        <div className="panel">
          <h2>What makes Aurora distinct</h2>
          <p>
            From bean to brew, every decision is intentional. Here&apos;s what our guests keep talking
            about long after the final sip.
          </p>
          <div className="feature-grid">
            {featureHighlights.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="menu">
        <div className="panel">
          <h2>Signature pours &amp; pastry pairings</h2>
          <p>
            Our menu evolves with the seasons and celestial calendar. These guest favorites are
            pouring this week.
          </p>
          <div className="menu-grid">
            {menuFavorites.map((item) => (
              <div key={item.title} className="menu-item">
                <div className="menu-item-top">
                  <span className="menu-item-title">{item.title}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="hero-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="stories">
        <div className="panel">
          <h2>Stories from our guests</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="testimonial-card">
                <p>“{testimonial.quote}”</p>
                <p>
                  <strong>{testimonial.author}</strong> · {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container split" id="reserve">
        <div className="panel">
          <h2>Plan your next visit</h2>
          <p>
            182 Aurora Avenue · Arts District <br />
            Open daily 7am – midnight <br />
            Golden Hour tastings every Friday at 6pm
          </p>
        </div>
        <div className="panel">
          <h2>Private tasting reservations</h2>
          <p>
            Host a sensory flight with up to 12 guests in our candlelit tasting room. Includes three
            courses of coffee, pastry pairings, and guided storytelling by our head roaster.
          </p>
          <div className="hero-cta" style={{ marginTop: "1.5rem" }}>
            <a className="btn btn-primary" href="mailto:hello@auroracafe.com">
              Book a Session
            </a>
            <a className="btn btn-secondary" href="tel:+1234567890">
              Call to Curate
            </a>
          </div>
        </div>
      </section>

      <footer className="container footer">
        Crafted with <span>light</span>, <span>steam</span>, and <span>story</span> · ©{" "}
        {new Date().getFullYear()} Aurora Café
      </footer>
    </main>
  );
}
