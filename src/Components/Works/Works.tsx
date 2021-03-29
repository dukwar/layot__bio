import React from 'react';
import './Works.scss';


function Works() {
    return (
        <>

            <div className="works">
                <div className="container">
                    <div className="works__nav">
                        <a href="" className="works__nav-link" data-filter="all">All</a>
                        <a href="" className="works__nav-link" data-filter="app">App</a>
                        <a href="" className="works__nav-link" data-filter="website">Website</a>
                        <a href="" className="works__nav-link" data-filter="interaction">Interaction</a>
                    </div>

                    <div className="portfolio">

                        <div className="portfolio__col" data-cat="app">

                            <div className="work" data-modal="#modal_project_1">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category: app</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="portfolio__col" data-cat="website">

                            <div className="work">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category:website</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="portfolio__col" data-cat="interaction">


                            <div className="work">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category: interaction</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="portfolio__col" data-cat="website">


                            <div className="work">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category: website</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio__col" data-cat="interaction">
                            <div className="work">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category: interaction</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="portfolio__col" data-cat="app">
                            <div className="work">
                                <img className="works__image" src="https://placehold.it/370x250" alt=""/>
                                <div className="work__content">
                                    <div className="work__cat">category: app</div>
                                    <div className="work__title">
                                        Project title
                                        <time className="work__date" dateTime="2020-11-22 19:00">2020</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a className="btn btn--sm" href="">LOAD MORE WORK</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Works;
