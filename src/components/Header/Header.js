import React,{useEffect} from 'react';
import './Header.css';
import {NavLink,useLocation} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
            disable: 'mobile',
            once: true,
        });
    });

    const navActive = ({isActive})=> isActive?'selected':''
    const location =useLocation()
    const path = location.pathname
    // console.log(location)
    const renderIcon = path.includes('detail')
        ?<h2>profile</h2>
        // :path.includes('details')
        //     ?<h2>details</h2>
            :<h2>Main</h2>

    return (
        <header id='header'>
            <div className="container">
                <div data-aos="fade-right"
                    className="header__nav">
                    {renderIcon}
                    {/*<img src="https://seeklogo.com/images/K/ketel-one-logo-A512F8385B-seeklogo.com.png" alt=""/>*/}
                    <ul>
                        <li><NavLink className={navActive} to={'/'} end>Main</NavLink></li>
                        <li><NavLink className={navActive} to={'/detail'}>Detail</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
