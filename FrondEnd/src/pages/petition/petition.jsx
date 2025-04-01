import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./petition.css";

const PetitionForm = () => {
    const [isTamil, setIsTamil] = useState(false); // Toggle between English and Tamil
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        petitionTitle: "",
        petitionDescription: "",
        gender: "",
        grievanceType: "",
        department: "",
        proofImage: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "proofImage") {
            const file = files[0];
            if (file) {
                setFormData({ ...formData, proofImage: file });

                const fileType = file.type;

                // Set file preview based on type
                if (fileType.startsWith("image/")) {
                    setImagePreview({ type: "image", url: URL.createObjectURL(file) });
                } else if (fileType === "application/pdf") {
                    setImagePreview({ type: "pdf", url: URL.createObjectURL(file) });
                } else if (
                    fileType === "application/msword" ||
                    fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ) {
                    setImagePreview({
                        type: "doc",
                        url: URL.createObjectURL(file),
                        name: file.name,
                    });
                } else {
                    setImagePreview({ type: "unsupported" });
                }
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (
            !formData.fullName ||
            !formData.email ||
            !formData.petitionTitle ||
            !formData.petitionDescription ||
            !formData.gender ||
            !formData.grievanceType ||
            !formData.department
        ) {
            alert(isTamil ? "தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்!" : "Please fill in all required fields!");
            return;
        }
        console.log("Form submitted successfully:", formData);
        alert(isTamil ? "✅ மனு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!" : "✅ Petition submitted successfully!");
        navigate("/thank-you");
    };

    // Modal controls
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <Navbar />
            <div className="form-container">
                <button className="toggle-btn" onClick={() => setIsTamil(!isTamil)}>
                    {isTamil ? "Switch to English" : "தமிழுக்கு மாற்று"}
                </button>

                <form onSubmit={handleSubmit}>
                    <div className="form-split-container">
                        {/* Left Section */}
                        <div className="form-left">
                            <h2>{isTamil ? "பொது தகவல்" : "General Information"}</h2>

                            <div className="form-group">
                                <label>{isTamil ? "முழு பெயர்*" : "Full Name*"}</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder={isTamil ? "உங்கள் முழு பெயரை உள்ளிடவும்" : "Enter your full name"}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{isTamil ? "மனு தலைப்பு*" : "Petition Title*"}</label>
                                <input
                                    type="text"
                                    name="petitionTitle"
                                    value={formData.petitionTitle}
                                    onChange={handleChange}
                                    placeholder={isTamil ? "மனு தலைப்பை உள்ளிடவும்" : "Enter petition title"}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{isTamil ? "புகார் வகை*" : "Grievance Type*"}</label>
                                <select name="grievanceType" value={formData.grievanceType} onChange={handleChange} required>
                                    <option value="">{isTamil ? "தேர்ந்தெடுக்கவும்" : "Select"}</option>
                                    <option value="academic">{isTamil ? "கல்வி" : "Academic"}</option>
                                    <option value="administration">{isTamil ? "நிர்வாகம்" : "Administration"}</option>
                                    <option value="infrastructure">{isTamil ? "உள்கட்டமைப்பு" : "Infrastructure"}</option>
                                    <option value="other">{isTamil ? "மற்றவை" : "Other"}</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>{isTamil ? "துறை*" : "Department*"}</label>
                                <select name="department" value={formData.department} onChange={handleChange} required>
                                    <option value="">{isTamil ? "தேர்ந்தெடுக்கவும்" : "Select"}</option>
                                    <option value="department1">{isTamil ? "துறை 1" : "Department 1"}</option>
                                    <option value="department2">{isTamil ? "துறை 2" : "Department 2"}</option>
                                    <option value="department3">{isTamil ? "துறை 3" : "Department 3"}</option>
                                </select>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="form-right">
                            <h2>{isTamil ? "தொடர்பு விவரங்கள்" : "Contact Details"}</h2>

                            <div className="form-group">
                                <label>{isTamil ? "மின்னஞ்சல் முகவரி*" : "Email Address*"}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={isTamil ? "உங்கள் மின்னஞ்சலை உள்ளிடவும்" : "Enter your email address"}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{isTamil ? "மனுவின் விவரம்*" : "Petition Description*"}</label>
                                <textarea
                                    name="petitionDescription"
                                    rows="4"
                                    value={formData.petitionDescription}
                                    onChange={handleChange}
                                    placeholder={isTamil ? "உங்கள் மனுவை விவரிக்கவும்" : "Describe your petition"}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{isTamil ? "ஆவணத்தை பதிவேற்றவும் (விருப்பமானது)" : "Upload Proof (Optional)"}</label>
                                <input
                                    type="file"
                                    name="proofImage"
                                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* File Preview */}
                            {imagePreview && (
                                <div className="file-preview">
                                    <button type="button" onClick={openModal}>
                                        <p>{isTamil ? "முன்னோட்டம்:" : "Preview:"}</p>
                                    </button>
                                </div>
                            )}

                            <button type="submit" className="btn-submit">
                                {isTamil ? "மனுவை சமர்ப்பிக்கவும்" : "Submit Petition"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Modal for File Preview */}
            {isModalOpen && (
                <div className="modal-container show">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        {imagePreview?.type === "image" && <img src={imagePreview.url} alt="Preview" />}
                        {imagePreview?.type === "pdf" && (
                            <iframe src={imagePreview.url} title="PDF Preview" width="100%" height="500px" />
                        )}
                        {imagePreview?.type === "doc" && (
                            <a href={imagePreview.url} download={imagePreview.name}>
                                {isTamil ? "Word கோப்பை பதிவிறக்கவும்" : "Download Word File"}
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetitionForm;
