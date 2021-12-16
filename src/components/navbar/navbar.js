import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaTypo3, FaTimes, FaBackward, FaBars } from 'react-icons/fa';
import Button from '../UI/button';
const Navbar = () => {
    const [menustate, setmenustate] = useState(false);
    const [buttonstate,setbuttonstate] = useState(true);


    
    const handlebutton =()=>{
        if(window.innerWidth <= 960){
            setbuttonstate(false)
        }else{
            setbuttonstate(true)
        }
    }
    window.addEventListener('resize',handlebutton);
    const menufunc = () => {
        setmenustate(!menustate)
    }
    const closemobilehandler = () => {
        setmenustate(false)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" to="/">
                        Travel <FaTypo3 />
                    </Link>
                    <div className="menu-icon" onClick={menufunc}>
                        {menustate ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={menustate ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closemobilehandler}>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tourism" className="nav-links" onClick={closemobilehandler}>
                                گردشگری
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tour" className="nav-links" onClick={closemobilehandler}>
                                تور
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-links-mobile"
                                to='/signup'
                                onClick={closemobilehandler}
                            >
                                ثبت نام
                            </Link>
                        </li>
                    </ul>
                    {
                        buttonstate ?
                        <Button buttonStyle="btn--outline" to="/signup">
                        ثبت نام
                        </Button>:null
                    }
                </div>
            </nav>
        </>

    );
}

export default Navbar;
