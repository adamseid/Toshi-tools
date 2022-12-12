import React, { useState } from 'react';
import profileImage from '../../images/temp-profile-image.png'

const Profile = () => {
  const [walletWorth, setWalletWorth] = useState("50,029.21");
  const [dailywalletWorth, setDailyWalletWorth] = useState(1550.39);
  const [walletDifference, setWalletDifference] = useState("+ 12.02")

  return (
    <div className='profile-outer-container'>
      <div className='profile-left-side'>
        <div className='profile-wallet-information'>
          <div className='profile-wallet-information-left'>
            <img className='profile-image' src = {profileImage} />
          </div>
          <div className='profile-wallet-information-right'>
            <div className='wallet-worth'>
              {walletWorth}
            </div>
            <div className='wallet-change'>
              {walletDifference}
            </div>
            <div className='wallet-id'>
              0xj8yh...1b34
            </div>
          </div>
        </div>
        <div className='profile-header-text'>
          Wallet Performance
        </div>
      </div>
      <div className='profile-right-side'>
        <div className='profile-header-text'>
          Your Assets
        </div>
        <div className='assets-container'>
          <div className='table-ids'>
            <div className='asset-text'>
              Asset
            </div>
            <div className='asset-text'>
              Amount
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;