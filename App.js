import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formspree endpoint action URL
    const formEndpoint = "https://formspree.io/f/mvgonzvn"; // Your Formspree endpoint

    // Prepare form data
    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    // Send the form data using fetch
    fetch(formEndpoint, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Message sent successfully!"); // Show success message
          setFormData({
            name: "",
            email: "",
            message: "",
          }); // Reset form fields after successful submission
        } else {
          return response.text().then((text) => {
            throw new Error(text || "Error occurred.");
          });
        }
      })
      .catch((error) => {
        setStatus(`There was an error. Please try again. ${error.message}`); // Show error message
        console.error("Error submitting the form:", error);
      });
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">KSH</div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/keltjona-shpata/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/keltjona"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <nav>
          <a href="#contact" className="nav-link">
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Frontend Developer & Cybersecurity Student</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <div className="hero-image">
          <img src="ME AT WBU.jpeg" alt="PIC NOT LOADING" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-image">
          <img src="tools.png" alt="PIC NOT LOADING" />
        </div>
        <h2>Hi, I'm Keltjona. Nice to meet you.</h2>
        <p>
          I am a dedicated Cybersecurity student with a passion for technology,
          digital innovation, and problem-solving. With experience in both academic projects and extracurricular
          leadership, I have developed strong analytical and teamwork skills.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service">
          <div className="service-header">
            <h3>Frontend Developer</h3>
          </div>
          <p>Crafting beautiful websites from scratch, one line of code at a time!</p>
          <p>
            <strong>Languages I speak:</strong> HTML, CSS, JavaScript, React, Angular
          </p>
          <p>
            <strong>Dev Tools:</strong> Sublime Text, VS Code, Github, Netlify, WordPress, Webflow, Figma
          </p>
        </div>
        <div className="service">
          <div className="service-header">
            <h3>Cybersecurity Enthusiast</h3>
          </div>
          <p>Protecting the digital world, one security protocol at a time!</p>
          <p>
            <strong>Skills I Use:</strong> Network Security, Ethical Hacking, Penetration Testing, Cryptography, Risk Management
          </p>
          <p>
            <strong>Tools I’m Exploring:</strong> Firewalls, encryption, vulnerability scanning, and monitoring tools
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>My Recent Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="contact" id="contact">
        <h2>Leave a Message</h2>
        <div className="contact-image">
      <img src="cnt.png" alt="Contact" />
    </div>
        <form
          action="https://formspree.io/f/mvgonzvn" // Replace with your Formspree endpoint
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        {status && <p>{status}</p>} {/* Display success or error message */}
      </section>

      

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Keltjona Shpata. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
