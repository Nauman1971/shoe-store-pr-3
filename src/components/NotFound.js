import React from "react";
import './notFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
    <div className="main-notFound">
        <section></section>
                <div class="container">
                <h1 class="h1" id="firstH1">404</h1>
                <h1 class="h1 wave">404</h1>
                </div>

                <div id="background-wrap">
                <div class="x1">
                    <div class="cloud"></div>
                </div>

                <div class="x2">
                    <div class="cloud"></div>
                </div>

                <div class="x3">
                    <div class="cloud"></div>
                </div>

                <div class="x4">
                    <div class="cloud"></div>
                </div>

                <div class="x5">
                    <div class="cloud"></div>
                </div>
                </div>

                <div class="container2">
                <span>Page not Found</span>
                <span class="drop"></span>
                </div>

                <svg>
                <defs>
                    <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -20" result="gooey" />
                    <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                    </filter>
                </defs>
                </svg>

                <button class="button"><Link to="/">Return to home</Link></button>
    </div>
                </>
    )
}

export default NotFound;