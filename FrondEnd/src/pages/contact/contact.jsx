import {
    faEnvelope,
    faMapMarkerAlt,
    faMobileAlt,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import videoFile from "../../video.mp4";
import "./contact.css";

function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                message: "",
            });
            alert("Thank you for your message! We will get back to you soon.");
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="page-wrapper">
            {/* Header */}
            <Navbar />

            {/* Contact Section */}
            <div className="wrapper">
                {/* Company Info */}
                <div className="company-info">
                    <h3>Petition Digitalizer</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> NEC Campus
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMobileAlt} /> (123) 456-7890
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> test@petitiondigitalizer.com
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="contact">
                    <h3>E-mail Us</h3>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <p>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={errors.name ? "error" : ""}
                            />
                            {errors.name && <small className="error-text">{errors.name}</small>}
                        </p>

                        <p>
                            <label>Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                            />
                        </p>

                        <p>
                            <label>E-mail Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={errors.email ? "error" : ""}
                            />
                            {errors.email && (
                                <small className="error-text">{errors.email}</small>
                            )}
                        </p>

                        <p>
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </p>

                        <p className="full">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={errors.message ? "error" : ""}
                            ></textarea>
                            {errors.message && (
                                <small className="error-text">{errors.message}</small>
                            )}
                        </p>

                        <p className="full">
                            <button type="submit">
                                <FontAwesomeIcon icon={faPaperPlane} /> Submit
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
