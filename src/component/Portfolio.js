import React from "react";
import { Link } from "react-router-dom";
import Photo from "../component/pic.jpg"
import Photo1 from "../component/react.png"
import Photo2 from "../component/html Logo.png"
import Photo3 from "../component/JavaScript.png"
import Photo4 from "../component/css.webp"
import Photo5 from "../component/sass.png"
import Image from "../component/download (1) - Copy.jpg"
const Portfolio =()=>{
    return(
        <>
               <header>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/home" className="nav__link">Home</Link>
                    <Link to="/services" className="nav__link">My Services</Link>
                    <Link to="/about" className="nav__link">About Me</Link>
                    <Link to="#work" className="nav__link">My Work</Link>
                </li>
            </ul>
        </nav>
    </header>
    {/* Introduction */}
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Ariel Wobo</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={Photo} alt=" Ariel" width="400px" className="intro__img"/>
    </section>
    {/* <Info */}
    <div id="Odom">
    <fieldset>
        
        <h3>Date Of Birth:</h3><h5>August 11th</h5>
        <h3>Nationality:</h3>
        <br/>
        <h3>Institutions Attended:</h3>
        </fieldset>
    {/* Working Experiences */}
    <fieldset>
        <h3>Working Expreriences:</h3>

    </fieldset>
</div>

    {/* My Services */}
    <fieldset>
        <section className="My-Services" id="services">
            <h2 className="section__title section__title--services">
                <div className="subject">My Work Tools</div>

            </h2>


            <div className="services">
                <div className="service">
                    <h3>React.Js</h3>
                    <p>Open source JavaScript library.it works best to build user interfaces by combining sections of code (components) into full websites.</p>
                    <img src={Photo1} alt="React" width="1000px" height="200px" className="img-crl"/>

                </div>
                <div className="service">
                    <h3>Html</h3>
                    <p>Hypertext Markup Language,a standardized system for tagging text files to achieve font,colour,graphic, and hyperlink effects on World Wide Web pages.</p>
                    <img src={Photo2} alt="Html Logo" width="1000px" height="200px" className="img-crl"/>
                </div>
                <div className="service">
                    <h3>Javascript</h3>
                    <p> An object-oriented computer programming language commonly used to create interactive effects within web browsers.</p>
                    <img src={Photo3} alt="Javascript" width="1000px" height="200px" className="img-crl"/>
                </div>
                <div className="service">
                    <h3>CSS</h3>
                    <p>CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
                    <img src={Photo4} alt="Css" width="1000px" height="200px" className="img-crl"/>
                </div>
                <div className="service">
                    <h3>SASS</h3>
                    <p>Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more</p>
                    <img src={Photo5} alt="sass" width="1000px" height="200px" className="img-crl"/>
                </div>
            </div>
            <div className="button">
                <a href="#work" class="btn">My Work</a>
            </div>

        </section>
    </fieldset>
    {/* About me */}
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>

        <div className="fool">
            <p className="section__substitle section__substitle--about">Frontend Web Developer</p>
        </div>


        <div className="about-me__body">
            <p>Specialized in front end development, also known as a front end web developer, responsible for the design and implementation of the interface. The users require this interface so that they can access the application in question and also makes sure that the design works online by using coding languages such as CSS, HTML, and JavaScript.</p>
        </div>

        <img src={Photo} alt="Ariel" className="about-me__img" height="600px"/>


    </section>
    {/* My Work */}
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A Selection Of My Range Of Work</p>

        <div className="portfolio">
            {/* <!--Portfolio item 01--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 02--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 03--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 04--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 05--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 06--> */}
            <Link to="/" className="portfolio__items">
            <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 07--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 08--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>
            {/* <!--Portfolio item 09--> */}
            <Link to="/" className="portfolio__items">
                <img src={Image} alt="" className="portfolio__img" width="700px" height="200px"/>
            </Link>

        </div>
    </section>

    {/* <!--Footer--> */}
    <footer className="footer">
        <a href="mailto:arielwobo@gmail.com" className="footer-link">arielwobo@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://whatsapp.com">
                    <i className="fa-brands fa-whatsapp "></i>
                </a>
            </li>
            <li className=" social-list__item ">
                <a className="social-list__link " href="https://instagram.com ">
                    <i className="fa-brands fa-instagram-square "></i>
                </a>
            </li>
            <li className="social-list__item ">
                <a className="social-list__link " href="https://twitter.com ">
                    <i className="fa-brands fa-twitter "></i>
                </a>
            </li>
            <li className="social-list__item ">
                <a className="social-list__link " href="https://facebook.com "><i className=" fa-brands fa-facebook "></i>
                </a>

            </li>
        </ul>
    </footer>




    <i className="fa-brands fa-linkedin "></i>
        </>
    )
}
export default Portfolio