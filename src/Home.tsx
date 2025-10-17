import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="section hero">
        <h1>Engineering For Change</h1>
        <p>Innovating for a sustainable future.</p>
      </section>

      {/* Committee Preview */}
      <section id="committee" className="section committee-preview">
        <h2>Meet the Committee</h2>
        <p>
          A passionate team of students driving change through collaboration and
          leadership.
        </p>
        <button className="cta-btn">
          <a href="/committee">Learn More</a>
        </button>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="section projects-preview">
        <h2>Our Projects</h2>
        <p>
          From renewable energy initiatives to community outreach, we support
          projects that make a difference.
        </p>
        <button className="cta-btn">
          <a href="/projects">See Projects</a>
        </button>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="section contact-preview">
        <h2>Get in Touch</h2>
        <p>
          Interested in joining or collaborating? Reach out to us and be part of
          the change.
        </p>
        <button className="cta-btn">
          <a href="/contactus">Contact Us</a>
        </button>
      </section>
    </div>
  );
}
