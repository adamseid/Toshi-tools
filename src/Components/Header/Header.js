import React from 'react';
import "../../App.css"

const Header = () => {
  return (
    <div className='outer-flex-box-container'>
        <div className='header-left'>
            Market Overview
        </div>
        <div className='inner-flex-box-container'>
            <div className='left-side'>
                <input type="text" id="search-text" name="search-text" placeholder='Search by token, wallet, ENS' />
                <div className='search'>
                    Search
                </div>

            </div>
            <div className='right-side'> 
                <div className='connect_button'>
                    Connect
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;