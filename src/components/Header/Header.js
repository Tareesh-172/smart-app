import React from 'react';
import './Header.css';
import food1 from './food1.png';
import food2 from './food2.png';
import food3 from './food3.png';
import food4 from './food4.png';
import mobile from './mobile.png';
import biker from './biker.png';

const Header = () => {
  return (
    <div className='header'> 
      <div className='header-contents'> 
        <span>50% off on First Delivery</span>
        <h1>Made with Love,<br />Savored with interest.. .</h1>
        <p>Savor delicious dishes delivered fast to your door..</p>
        <button>View Menu</button>
      </div>
      <div className='food4'>
        <img src={food4} className='food4' alt='food4' />
      </div>

      <div className='header-images'>
        <img src={food2} className='food2' alt='food2' />
        <img src={food1} className='food1' alt='food1' />
        <img src={food3} className='food3' alt='food3' />

        {/* Mobile and Bike inside wrapper */} 
        <div className="mobile-bike-wrap">
          <img src={mobile} className='mobile' alt='mobile' />
          <img src={biker} className='biker' alt='biker' />
        </div>
      </div>
    </div>
  );
};

export default Header;
