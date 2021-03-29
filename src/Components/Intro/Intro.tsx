import React from 'react';
import './Intro.scss';
import Intro__Photo from "../../img/intro__photo/photo.svg"
import {Facebook, Google, LinkedIn, Twitter} from "../../helpersSCSS/imgFiles";

function Intro() {
    return (
        <>
            <section className="intro">
                <div className="container">
                    <div className="intro__inner">

                        <div className="intro__content">
                            <h2 className="intro__subtitle">Hello I'am</h2>
                            <h1 className="intro__title">Lewis Nathaniel</h1>
                            <div className="intro__text">UI &amp; UX Designer</div>


                            <div className="social">
                                <Facebook/>
                                <Google/>
                                <LinkedIn/>
                                <Twitter/>

                            </div>

                            <a className="btn" data-modal="#modal_hire_me" href="#">HIRE ME</a>
                            <button className="btn" type="button" data-modal="#modal_resume">SEE MY RESUME</button>
                        </div>
                        <div className="intro__photo">
                            <img src={Intro__Photo} alt=""/>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;
