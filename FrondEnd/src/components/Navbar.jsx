import { faBars, faHandshake, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setSideNavOpen(!sideNavOpen);
        document.body.style.overflow = sideNavOpen ? "" : "hidden";
    };

    // Close Menu on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setSideNavOpen(false);
                setSearchOpen(false);
                document.body.style.overflow = "";
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".search-icon, .search-box, form")) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle Search & Menu Toggle in JSX
    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen);
        setSideNavOpen(false);
    };

    const handleNavOpen = () => {
        setSideNavOpen(true);
        setSearchOpen(false);
    };

    const handleNavClose = () => {
        setSideNavOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${sideNavOpen ? 'nav-open' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <FontAwesomeIcon icon={faHandshake} className="brand-icon" />
                    <span>Petition Digitalizer</span>
                </Link>

                <div className="navbar-right">
                    <div className={`search-container ${searchOpen ? 'active' : ''}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                        <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
                            <FontAwesomeIcon icon={searchOpen ? faTimes : faSearch} />
                        </button>
                    </div>

                    <div className="nav-toggle" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={sideNavOpen ? faTimes : faBars} />
                    </div>

                    <ul className={`nav-links ${sideNavOpen ? 'show' : ''}`}>
                        <li>
                            <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/track" className={location.pathname === '/track' ? 'active' : ''}>
                                Track
                            </Link>
                        </li>
                        <li>
                            <Link to="/petition" className={location.pathname === '/petition' ? 'active' : ''}>
                                File Grievance
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                                Contact
                            </Link>
                        </li>
                        <li className="auth-buttons">
                            <Link to="/login" className="login-btn">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
