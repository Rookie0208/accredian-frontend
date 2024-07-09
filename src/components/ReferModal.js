import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ReferModal({ isOpen, onRequestClose }) {
  const [referringPerson, setReferringPerson] = useState('');
  const [referredPerson, setReferredPerson] = useState('');
  const [course, setCourse] = useState('');
  const [referringEmail, setReferringEmail] = useState('');
  const [referredEmail, setReferredEmail] = useState('');
  const [error, setError] = useState(null);

  const handleRefer = async () => {
    setError(null);

    if (!referringPerson || !referredPerson || !course || !referringEmail || !referredEmail) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(referringEmail) || !emailRegex.test(referredEmail)) {
      setError('Invalid email format.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/referrals', { // Make sure the URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          referringPerson,
          referredPerson,
          course,
          referringEmail,
          referredEmail
        })
      });

      if (!response.ok) {
        const responseBody = await response.json();
        throw new Error(responseBody.error || 'Failed to submit referral.');
      }

      alert('Referral submitted successfully!');
      onRequestClose();
    } catch (err) {
      console.error('Error submitting referral:', err);
      setError(err.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Refer a Friend"
    >
      <h2>Refer a Friend</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <label>
          Referring Person:
          <input
            type="text"
            value={referringPerson}
            onChange={(e) => setReferringPerson(e.target.value)}
          />
        </label>
        <br />
        <label>
          Referred Person:
          <input
            type="text"
            value={referredPerson}
            onChange={(e) => setReferredPerson(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course Referred:
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
        </label>
        <br />
        <label>
          Referring Person's Email:
          <input
            type="email"
            value={referringEmail}
            onChange={(e) => setReferringEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Referred Person's Email:
          <input
            type="email"
            value={referredEmail}
            onChange={(e) => setReferredEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="button" className="refer-btn" onClick={handleRefer}>Refer</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default ReferModal;
