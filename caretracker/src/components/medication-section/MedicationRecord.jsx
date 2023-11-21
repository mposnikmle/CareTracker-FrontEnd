// medicationRecord.js
import React, { useState, useEffect } from 'react';
import './MedicationRecord.css'
import { NewMedication } from './NewMedication';

export function MedicationRecord() {
    const [numCols, setNumCols] = useState(31);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [medications, setMedications] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [isAddMedicationModalOpen, setAddMedicationModalOpen] = useState(false);

    useEffect(() => {
        const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        ).getDate();

        setNumCols(daysInMonth);

        // Generate an array with the names of the days of the week
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        setDaysOfWeek(Array.from({ length: daysInMonth }, (_, index) => days[(index + currentDate.getDay()) % 7]));

        // Initialize medications with JD squares
        const initialMedications = [
            {
                medicationName: 'RISPERIDONE 0.5 MG TABLET',
                medicationType: 'tablet, oral, Scheduled (Medication)',
                strength: 'Strength: 0.5mg',
                attachment: 'Attachment: DN PCP 06.22.pdf (682.40 KB)',
                prescriber: 'Prescriber: Megan lane / FNP (Northern Light Mercy Primary Care)',
                drugDetails: 'Drug Details',
                dosage: 'Give Amount / Quantity: Give one 0.5 mg tab by mouth once daily',
                beginDateTime: 'Begin Date & Time: 11/18/2023',
                scheduleRepeat: 'Schedule Repeat: Every Day 1 time(s) a day',
                scheduleTimeSlots: 'Schedule Time Slot(s): 8:00 am',
                instruction: 'Instruction: Give one 0.5 mg tab by mouth once daily',
                jdSquares: Array(daysInMonth).fill(false),
            },
            {
                medicationName: 'ACETAMINOPHEN 650 MG TABLET',
                medicationType: 'tablet, oral, As Needed (Medication)',
                strength: 'Strength: 650mg',
                attachment: 'Attachment: Acetaminophen Information Sheet.pdf (94.56 KB)',
                prescriber: 'Prescriber: John Smith / MD (Northern Light Mercy Primary Care)',
                drugDetails: 'Drug Details',
                dosage: 'Give Amount / Quantity: Take 2 tablets by mouth every 4-6 hours as needed for pain or fever.',
                beginDateTime: 'Begin Date & Time: 11/15/2023',
                scheduleRepeat: 'Schedule Repeat: As Needed',
                scheduleTimeSlots: 'Schedule Time Slot(s): As Needed',
                instruction: 'Instruction: Take 2 tablets by mouth every 4-6 hours as needed for pain or fever. Do not exceed 4 grams (6 tablets) in 24 hours.',
                jdSquares: Array(daysInMonth).fill(false),
            },
            // ... (other medications)
        ];

        setMedications(initialMedications);
    }, [currentDate]);

    const handleSquareClick = (medicationIndex, colIndex) => {
        setMedications((prevMedications) => {
            const newMedications = [...prevMedications];
            const medication = { ...newMedications[medicationIndex] };

            // Clear all squares in the same column for the specific medication
            for (let i = colIndex; i < medication.jdSquares.length; i += numCols) {
                medication.jdSquares[i] = false;
            }

            // Toggle the JD status for the clicked square
            medication.jdSquares[colIndex] = !medication.jdSquares[colIndex];
            // Update the state with the modified medication
            newMedications[medicationIndex] = medication;

            return newMedications;
        });
    };

    const showPreviousMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const showNextMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const handleNewMedication = (newMedication) => {
        setMedications((prevMedications) => [...prevMedications, newMedication]);
        setAddMedicationModalOpen(false); // Close the modal
    };

    const openAddMedicationModal = () => {
        setAddMedicationModalOpen(true);
    };

    const closeAddMedicationModal = () => {
        setAddMedicationModalOpen(false);
    };

    const generateGrid = (medication, medicationIndex) => {
        return (
            <div key={`medication-${medication.medicationName}`} className="medication-container">
                {/* Add the medication details section */}
                <div key="medication-details" className="medication-details-container">
                    <div className="medication-title">
                        <div>{medication.medicationName}</div>
                        <div>{medication.medicationType}</div>
                    </div>

                    <div className="medication-detail">
                        <div>{medication.strength}</div>
                        <div>{medication.attachment}</div>
                        <div>{medication.prescriber}</div>
                        <div>{medication.drugDetails}</div>
                        <div>{medication.dosage}</div>
                    </div>

                    <div className="medication-detail">
                        <div>{medication.beginDateTime}</div>
                        <div>{medication.scheduleRepeat}</div>
                        <div>{medication.scheduleTimeSlots}</div>
                        <div>{medication.instruction}</div>
                    </div>
                </div>

                {/* Add navigation buttons */}
                <div key="navigation" className="navigation">
                    <button onClick={showPreviousMonth}>Previous Month</button>
                    <div className="current-month-year">
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </div>
                    <button onClick={showNextMonth}>Next Month</button>
                </div>

                {/* Add the days of the week row */}
                <div key="days-of-week" className="row">
                    {daysOfWeek.map((day, index) => (
                        <div key={`day-of-week-${index}`} className="square day-of-week">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Add the second row with numerical dates of the month */}
                <div key="numerical-dates" className="row">
                    {Array.from({ length: numCols }, (_, index) => (
                        <div key={`numerical-date-${index}`} className="square numerical-date">
                            {index + 1}
                        </div>
                    ))}
                </div>

                {/* Add the third row with squares and event listeners */}
                <div key="jd-squares" className="row">
                {/* Check if medication.jdSquares is defined before mapping */}
                {medication.jdSquares && medication.jdSquares.map((isJd, index) => (
                    <div
                        key={`jd-square-${index}`}
                        className={`square jd-square ${isJd ? 'jd-filled' : ''}`}
                        onClick={() => handleSquareClick(medicationIndex, index)}
                    >
                        {isJd ? 'JD' : ''}
                    </div>
                ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            {medications.map((medication, index) => generateGrid(medication, index))}
            <button onClick={openAddMedicationModal}>New Medication</button>
            {isAddMedicationModalOpen && <NewMedication onAddMedication={handleNewMedication} onClose={closeAddMedicationModal} />}
        </div>
    );
}