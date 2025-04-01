import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import videoFile from "../../video.mp4";
import "./home.css";

function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setSideNavOpen(!sideNavOpen);
        document.body.style.overflow = sideNavOpen ? "" : "hidden"; // Prevent scroll when menu is open
    };

    // Smooth Scroll to Section
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: "smooth",
            });
        }
    };

    // Close Menu on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && sideNavOpen) {
                setSideNavOpen(false);
                document.body.style.overflow = "";
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [sideNavOpen]);

    // Scroll Effect - Add scrolled class on navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navigation Handlers
    const handleHomeClick = () => {
        navigate("/home"); // Redirect to Home.jsx
    };

    const handleTrackClick = () => {
        navigate("/track"); // Redirect to trackPetition.jsx
    };

    const handleFileGrievanceClick = () => {
        navigate("/petition"); // Redirect to petition.jsx
    };

    const handleSchemesClick = () => {
        navigate("/schemes"); // Redirect to schemes.jsx
    };

    const handleContactClick = () => {
        navigate("/contact"); // Redirect to contact.jsx
    };

    return (
        <>
            {/* Navbar Section */}
            <Navbar />

            <section className="hero-section">
                <div className="hero">
                    <h2>Empower Your Voice</h2>
                    <p>
                        Transform your ideas into impactful petitions. Join our platform to create, track, and support petitions that matter to you. Let's make a difference together.
                    </p>
                    <div className="buttons">
                        <a href="/petition" className="join">Start a Petition</a>
                        <a href="#" className="learn" onClick={() => scrollToSection("#workflow")}>Learn More</a>
                    </div>
                </div>
                <div className="globe-container">
                    <video className="globe" autoPlay loop muted>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Workflow Section 
            <section id="workflow" className="workflow-section">
                <div className="workflow-container">
                    <h2>How It Works</h2>
                    <div className="workflow-steps">
                        <div className="step">
                            <h3>Create Petition</h3>
                            <p>Start by creating a petition. Provide all the necessary details and submit your petition for review.</p>
                            <button onClick={handleFileGrievanceClick}>Create Petition</button>
                        </div>
                        <div className="step">
                            <h3>Track Petition</h3>
                            <p>Track the status of your petition. Stay updated with the progress and any actions taken.</p>
                            <button onClick={handleTrackClick}>Track Petition</button>
                        </div>
                        <div className="step">
                            <h3>Status Verification</h3>
                            <p>Verify the status of your petition. Ensure that your petition is being addressed and resolved.</p>
                            <button onClick={handleTrackClick}>Verify Status</button>
                        </div>
                    </div>
                </div>
            </section>*/}
        </>
    );
}

export default Home;
