import React, {useEffect, useState} from 'react';
import './Header.scss';
import Dropdown2 from "../../helpersSCSS/Dropdown";
import {Link} from "react-scroll";

function Header(props: any) {

    const [fixed, setFixed] = useState(false)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    useEffect(() => {
        if (offset >= 780) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }, [offset])


    console.log(offset);

    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <div className="user">
                        <div className="user__avatar">
                            <img src="https://placehold.it/57/3" alt=""/>
                        </div>
                        <div className="user__content">
                            <div className="user__name">
                                Lewis <br/> Nathaniel
                            </div>
                            <div className="user__prof">
                                UI &amp; UX Designer
                            </div>
                        </div>
                    </div>
                    <nav className="nav">
                        <a className="nav__link" href="">Work</a>
                        <a className="nav__link" href="">About me</a>
                        <a className="nav__link" href="">Blog</a>
                        <a className="nav__link" href="">Contact</a>
                        <a className="nav__link nav__link--btn" href="" data-modal="#modal_hire_me">Hire me</a>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;
