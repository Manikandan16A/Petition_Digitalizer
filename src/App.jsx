import { useState } from "react";
import "./App.css";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      {/* Banner Section */}
      <section id="banner">
        <div className="banner-text">
          <h1>Petition Digitalizer</h1>
          <p>Shape a better future, one petition at a time.</p>
          <div className="banner-btn">
            <a href="#service" aria-label="Find out more">
              <span></span>
              <b>Find out</b>
            </a>
            <a href="#features" aria-label="Read more">
              <span></span>
              <b>Read More</b>
            </a>
          </div>
        </div>
      </section>

      {/* Side Navigation */}
      <div
        id="sideNav"
        style={{ right: sideNavOpen ? "0" : "-250px" }}
      >
        <nav>
          <ul>
            <li><a href="#banner">HOME</a></li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#footer">MEET US</a></li>
          </ul>
        </nav>
      </div>

      {/* Menu Button */}
      <div id="menuBtn" onClick={toggleSideNav} aria-label="Toggle Menu">
        <img
          src="https://i.postimg.cc/j5RRCtb2/menu.png"
          id="menu"
          alt="Menu Button"
        />
      </div>

      {/* Features Section */}
      <section id="features">
        <div className="title-text">
          <p>FEATURES</p>
          <h1>Why Choose Us</h1>
        </div>
        <div className="features-box">
          <div className="features">
            {[
              {
                title: "Experienced Staff",
                icon: "bx bx-check-shield",
                description:
                  "Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula.",
              },
              {
                title: "Pre Booking Online",
                icon: "bx bx-check-square",
                description:
                  "Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula.",
              },
              {
                title: "Affordable Cost",
                icon: "bx bx-rupee",
                description:
                  "Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula.",
              },
            ].map((feature, index) => (
              <div key={index} className="features-desc">
                <div className="features-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="features-text">
                  <h1>
                    <b>{feature.title}</b>
                  </h1>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="features-img">
            <img
              src="https://i.postimg.cc/qMW0y8T9/barber-man.jpg"
              alt="Features Visual"
            />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service">
        <div className="title-text">
          <p>SERVICES</p>
          <h1>
            <b>We Provide Better</b>
          </h1>
        </div>
        <div className="service-box container">
          {[
            {
              img: "https://i.postimg.cc/JhLLdMtx/pic-1.jpg",
              title: "Hair Styling",
            },
            {
              img: "https://i.postimg.cc/t4Pb5YR7/pic-2.jpg",
              title: "Beard Trim",
            },
            {
              img: "https://i.postimg.cc/VLJmJK3q/pic-3.jpg",
              title: "Hair Cut",
            },
            {
              img: "https://i.postimg.cc/9fYj6K7h/pic-4.jpg",
              title: "Dry Shampoo",
            },
          ].map((service, index) => (
            <div className="single-service" key={index}>
              <img src={service.img} alt={service.title} />
              <div className="overlay"></div>
              <div className="service-desc">
                <h3>{service.title}</h3>
                <hr />
                <p>
                  This is a test description of the {service.title} service.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials">
        <div className="title-text">
          <p>TESTIMONIALS</p>
          <h1>
            <b>What Our Customers Say</b>
          </h1>
        </div>
        <div className="testimonial-container container">
          {[
            {
              img: "https://i.postimg.cc/5Nrw360Y/male-photo1.jpg",
              name: "Ross Lee",
            },
            {
              img: "https://i.postimg.cc/c1k4jFvZ/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
              name: "Sam Root",
            },
            {
              img: "https://i.postimg.cc/fy90qvkV/male-photo3.jpg",
              name: "Ben Roy",
            },
          ].map((testimonial, index) => (
            <div className="testimonial-box" key={index}>
              <div className="customer-detail">
                <div className="customer-photo">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <p className="customer-name">{testimonial.name}</p>
                </div>
              </div>
              <div className="star-rating">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="fa fa-star checked">
                      <i className="bx bxs-star"></i>
                    </span>
                  ))}
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="footer-container">
          {/* Footer Top Section */}
          <div className="footer-top">
            {/* Contact Section */}
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <p>
                #03 ABC Colony, XYZ City, IN <i className="bx bx-map"></i>
              </p>
              <p>
                example@website.com <i className="bx bx-paper-plane"></i>
              </p>
              <p>
                +01 12345678 <i className="bx bx-phone"></i>
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="footer-links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Stay updated with the latest news and offers!</p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="footer-bottom">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
            <p>Copyright © 2024 All Rights Reserved | Designed by Your Company</p>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
