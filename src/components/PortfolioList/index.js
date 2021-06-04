import React from "react";
import "../../assets/main.css"
import Project from "../Project"

import sugar from "../../assets/images/portPics/cupOfSugar.png"
import book from "../../assets/images/portPics/book.png"
import blogosphere from "../../assets/images/portPics/blogosphere.png"
import recharge from "../../assets/images/portPics/recharge.png"
import employee from "../../assets/images/portPics/employee.png"
import snuze from "../../assets/images/portPics/snuze.png"
// import codeQuiz from "../../assets/images/portPics/codeQuiz.png"


function PortfolioList() {
    return (

        <section className="container portBody">

            <Project
                pic={snuze}
                alt="Snüze"
                title="Snüze"
                description="Snüze is a tranquil React app, and was designed to meet the needs of users who want some extra help to fall asleep comfortably. Snuze users benefit from free access to relaxing audio, nightly sleep quality tracking, data-based resource recommendations, an online community of other Snuzers, speech-based journaling and site navigation, and so much more."
                technologies="React, Javascript, HTML, CSS, MongoDB, Mongoose, Node.js, Express, React Bootstrap, MDB React, Axios, Twilio, Web Search API, Date format, Material UI/Icons, Reach Chart js 2, JWT, RC Slider,
                Circular Progress Bar"
                repo="https://github.com/AHFotis/Snueze"
                live="https://snueze.herokuapp.com/"
            />

            <Project
                pic={book}
                alt="Book Worm"
                title="Google Book Worm"
                description="A MERN book search and save. Users can search by title and see a list. Users can either navigate to the google entry for that book or save it to their reading list. On the saved page, users can view books they've saved or delete them from their list."
                technologies="CSS, JavaScript, React, React-DOM, React-Scripts, Bootstrap, Google Books API, Axios, Express, Mongoose, MongoDB"
                repo="https://github.com/AHFotis/GoogleBookWorm"
                live="https://google-book-worm.herokuapp.com/"
            />

            <Project
                pic={sugar}
                alt="Cup of Sugar"
                title="Cup of Sugar"
                description="A full stack, charitable, community platform, Cup of Sugar users can easily find local and national resources, browse posts about what resources or services are available or needed in their community, and connect with one another to help fulfill those needs."
                technologies="CSS, Express, MySQL, Sequelize, Session-Sequelize, Handlebars, jQuery, JavaScript, Axios, Charity Navigator, Dotenv, Bcrypt"
                repo="https://github.com/AHFotis/Cup-of-Sugar"
                live="https://cup-of-sugar-application.herokuapp.com/"
            />

            <Project
                pic={blogosphere}
                alt="The Blogosphere"
                title="The Blogosphere"
                description="A full stack blogging website allowing users to write, update, and delete personal blogs. Bloggers can also view and comment on the blogs of others."
                technologies="CSS, JavaScript, MySQL, Inquirer, Sequelize, Express, Handlebars, Session-Sequelize. Dotenv, Bcrypt"
                repo="https://github.com/AHFotis/TheBlogosphere"
                live="https://the-blogosphere.herokuapp.com/"
            />

            <Project
                pic={employee}
                alt="Employee Finder"
                title="Employee Finder"
                description="A React employee directory that allows the user to search an employee database. Users can search by name or click the carrot next to name to sort the employees alphabetically."
                technologies="CSS, JavaScript, React, React-DOM, React-Scripts, Random User Generator API, Axios, Bootstrap"
                repo="https://github.com/AHFotis/EmployeeFinder"
                live="https://ahfotis.github.io/EmployeeFinder/"
            />

            <Project
                pic={recharge}
                alt="Recharge"
                title="Recharge Car App"
                description="An application to connect electric car owners with nearby charging stations, at home or on the go."
                technologies="HTML5, CSS, JavaScript, jQuery, AJAX, Bulma, Mapquest, Radar, Open
                Charger Map"
                repo="https://github.com/AHFotis/RechargeCarApp"
                live="https://ahfotis.github.io/RechargeCarApp/"
            />



        </section>
    )
}

export default PortfolioList;