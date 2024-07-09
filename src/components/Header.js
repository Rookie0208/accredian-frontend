import React from 'react';
import TopHeader from './TopHeader';

function Header() {
  return (
    <>
      <TopHeader/>
    <header>
      <nav>
        <ul>
          <li className='active'>Refer</li>
          <li>Benefits</li>
          <li>FAQs</li>
          <li>Support</li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
