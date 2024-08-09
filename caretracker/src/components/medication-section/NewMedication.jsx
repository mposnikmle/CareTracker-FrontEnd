import React, { useState } from 'react';
import './NewMedication.css';

export function NewMedication({ onAddMedication }) {
    const [medication, setMedication] = useState(() => ({
        medicationName: '',
        medicationType: '',
        strength: '',
        attachment: '',
        prescriber: '',
        drugDetails: '',
        dosage: '',
        beginDateTime: '',
        scheduleRepeat: '',
        scheduleTimeSlots: '',
        instruction: '',
    }));

    const [jdSquares, setJdSquares] = useState(() => {
        const daysInMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
        ).getDate();
        return Array(daysInMonth).fill(false);
    });

    const [medicationAdded, setMedicationAdded] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedication((prevMedication) => ({ ...prevMedication, [name]: value }));
    };

    const handleAddMedication = () => {
        // Add validation or additional logic if needed
        onAddMedication({ ...medication, jdSquares });
        // Reset the form
        setMedication(() => ({
            medicationName: '',
            medicationType: '',
            strength: '',
            attachment: '',
            prescriber: '',
            drugDetails: '',
            dosage: '',
            beginDateTime: '',
            scheduleRepeat: '',
            scheduleTimeSlots: '',
            instruction: '',
        }));
        setJdSquares(() => {
            const daysInMonth = new Date(
                new Date().getFullYear(),
                new Date().getMonth() + 1,
                0
            ).getDate();
            return Array(daysInMonth).fill(false);
        });
        setMedicationAdded(true);
    };

    const renderMedicationDetails = () => {
        return Object.entries(medication).map(([property, value]) => (
            <div key={property} className="medication-detail">
                <p>
                    <b>{property.charAt(0).toUpperCase() + property.slice(1)}:</b> {value}
                </p>
            </div>
        ));
    };

    return (
        <div className="new-medication-container">
            <h2>Add New Medication</h2>
            {Object.entries(medication).map(([property, value]) => (
                <label key={property} className="medication-label">
                    {property.charAt(0).toUpperCase() + property.slice(1)}:
                    <input type="text" name={property} value={value} onChange={handleChange} className="medication-input" />
                </label>
            ))}
            <button onClick={handleAddMedication} className="add-medication-button">
                Add Medication
            </button>
            {medicationAdded && (
                <div>
                    <div>
                        JD Squares:
                        {jdSquares.map((isJd, index) => (
                            <input
                                key={`jd-square-${index}`}
                                type="checkbox"
                                checked={isJd}
                                onChange={() =>
                                    setJdSquares((prevJdSquares) => {
                                        const newJdSquares = [...prevJdSquares];
                                        newJdSquares[index] = !isJd;
                                        return newJdSquares;
                                    })
                                }
                                className="jd-square-checkbox"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}