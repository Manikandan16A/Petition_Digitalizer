import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./trackPetition.css";

const TrackPetition = () => {
    const [petitionId, setPetitionId] = useState("");
    const [trackingMode, setTrackingMode] = useState("track");
    const [petitionData, setPetitionData] = useState(null);
    const [error, setError] = useState(null);

    // Mocked petition data for demonstration
    const mockPetitionData = {
        P12345: {
            status: "Done",
            reply: "Your grievance has been addressed. The department resolved the issue successfully.",
            department: "Water Department",
        },
        P67890: {
            status: "In Progress",
            reply: "Your petition is currently under review by the department.",
            department: "Electricity Department",
        },
    };

    // Handle Petition ID change
    const handleChange = (e) => {
        setPetitionId(e.target.value);
    };

    // Handle Tracking Mode (Track/Status)
    const handleModeChange = (mode) => {
        setTrackingMode(mode);
        setPetitionData(null);
        setPetitionId("");
        setError(null);
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (mockPetitionData[petitionId]) {
            setPetitionData(mockPetitionData[petitionId]);
            setError(null);
        } else {
            setPetitionData(null);
            setError("⚠️ Petition ID not found. Please check and try again.");
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="track-container">
                <div className="track-content">
                    <h2>📜 Track Your Petition</h2>

                    {/* Mode Selection */}
                    <div className="mode-selector">
                        <button
                            className={trackingMode === "track" ? "active" : ""}
                            onClick={() => handleModeChange("track")}
                        >
                            Track by Petition ID
                        </button>
                        <button
                            className={trackingMode === "status" ? "active" : ""}
                            onClick={() => handleModeChange("status")}
                        >
                            View Petition Status
                        </button>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="track-form">
                        <label htmlFor="petitionId">Enter Petition ID*</label>
                        <input
                            type="text"
                            id="petitionId"
                            name="petitionId"
                            value={petitionId}
                            onChange={handleChange}
                            placeholder="Enter Petition ID (e.g., P12345)"
                            required
                        />
                        <button type="submit">🔍 Track Petition</button>
                    </form>

                    {/* Error Message */}
                    {error && <p className="error">{error}</p>}

                    {/* Petition Details Section */}
                    {petitionData && (
                        <div className="result-container">
                            <h3>📄 Petition Details</h3>
                            <p>
                                <strong>Department:</strong> {petitionData.department}
                            </p>
                            {trackingMode === "track" ? (
                                <>
                                    <p>
                                        <strong>Reply:</strong> {petitionData.reply}
                                    </p>
                                    <p
                                        className={`status ${
                                            petitionData.status === "Done" ? "done" : "in-progress"
                                        }`}
                                    >
                                        <strong>Status:</strong> {petitionData.status}
                                    </p>
                                </>
                            ) : (
                                <p
                                    className={`status ${
                                        petitionData.status === "Done" ? "done" : "in-progress"
                                    }`}
                                >
                                    <strong>Status:</strong> {petitionData.status}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrackPetition;
