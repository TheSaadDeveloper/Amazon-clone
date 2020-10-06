import React from 'react';
import './Header2.css';
import { useStateValue } from './StateProvider';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';

function Header2() {
    const [{user}] = useStateValue();
    return (
        <div className="header2">
            <RoomTwoToneIcon className="header2__addressLogo" />
            <div className="header2__address">
                <h4>Hello</h4>
                <h2 className="option2">Select Your address</h2>
            </div>

            <div className="header2__option">
                <h2>Fresh</h2>
            </div>
            <div className="header2__option">
                <h2>Amazon Pay</h2>
            </div>
            <div className="header2__option">
                <h2>Mobiles</h2>
            </div>
            <div className="header2__option">
                <h2>Customer service</h2>
            </div>
            <div className="header2__option">
                <h2>Sports</h2>
            </div>

            <div className="header2__add">
                    <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/400x39-_With-Disclaimer_ft._CB406908609_.jpg"
                    alt="header__add"
                    />
            </div>
        </div>
    )
}

export default Header2
