import React from 'react'
import './AppDownland.css';
function AppDownland() {
  return (
    <div className='appdown'>
        <div className="container">
            <div className="appdown__left">
                <p className="appdown__text">
                    Take away
                </p>
                <h3 className="appdown__title">
                    Food Stalls with Persons but  to  Product marketing plane. 
                </h3>
                <p className="appdown__subtext">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.
                </p>
                <div className="appdown__element">
                    <div className="appdown__icon">
                        <img src="./apple.svg" alt="Apple" className="appdown__pic" />
                        <h4 className="appdown__title-name">
                            App Store
                        </h4>
                    </div>
                    <div className="appdown__icon">
                        <img src="./play.svg" alt="Apple" className="appdown__pic" />
                        <h4 className="appdown__title-name">
                            Google Play
                        </h4>
                    </div>
                </div>
            </div>
            <div className="appdown__right">
                <img src="./Tel.png" alt="Phone" className="appdown__picture" />
            </div>
        </div>
    </div>
  )
}

export default AppDownland