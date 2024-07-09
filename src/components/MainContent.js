import React, { useState } from 'react';
import ReferModal from './ReferModal';
import HeroImg from './assets/heroSection-Bihb70-y.png'

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <section className="hero">
        <div className="content">
          <h1>Let's Learn <br/>& Earn</h1>
          <p>Get a chance to win <br/> up to <span> Rs.15,000</span></p>
          <button onClick={openModal}>Refer Now</button>
        </div>
      </section>
      <ReferModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </main>
  );
}

export default MainContent;
