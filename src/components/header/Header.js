import telegramIcon from "./../../IMG/icon-telegram.svg";
import behanceIcon from "./../../IMG/icon-behance.svg";
import imailIcon from "./../../IMG/icon-email.svg";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import "./style.css";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const path = useLocation(); 
    useEffect(() => {
        setToggle(false);
    }, [path]);

    const activeLink = "header__menu-link header__menu-link-select";
    const normalLink = "header__menu-link";

    return (
        <header className="header _container">
            <div className="header__main-blok">
                <div className="header__menu-links decktop">
                    <nav>
                        <ul>
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Работы</NavLink>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/contact">Контакты</NavLink>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/blog">Блог</NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="header__title">
                        <h3><NavLink to="/">Литвиненко Илья</NavLink></h3>
                    <div onClick={() => {setToggle(!toggle)}} className="header__menu-modile-burger">
                        <div className="header__menu-modile-burger-item"></div>
                        <div className="header__menu-modile-burger-item"></div>
                        <div className="header__menu-modile-burger-item"></div>
                    </div>
                </div>
                <div className="icons header__icons decktop">
                    <div className="icon">
                        <a href="https://t.me/ILIALiT"><img src={telegramIcon} alt="telegram"/></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.behance.net/iliya1"><img src={behanceIcon} alt="behance"/></a>
                    </div>
                    <div className="icon">
                        <a href="mailto:ilialitvinenko2004@gmail.com"><img src={imailIcon} alt="email"/></a>
                    </div>
                </div>
            </div>
            {toggle && (
                <div className="header__menu-modile-body _container">
                <div className="header__menu-links mobile">
                    <nav>
                        <ul>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/">Работы</NavLink>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/contact">Контакты</NavLink>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/blog">Блог</NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="icons mobile">
                    <div className="icon">
                        <a href="https://t.me/ILIALiT"><img src={telegramIcon} alt="telegram"/></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.behance.net/iliya1"><img src={behanceIcon} alt="behance"/></a>
                    </div>
                    <div className="icon">
                        <a href="mailto:ilialitvinenko2004@gmail.com"><img src={imailIcon} alt="email"/></a>
                    </div>
                </div>
            </div>
            )}
            
            <div className="header__line-blok"></div>
        </header>
    );
}

export default Header;