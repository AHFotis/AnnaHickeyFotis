import React from "react";
import "../../assets/main.css"
import Project from "../Project"

import sugar from "../../assets/images/portPics/cupOfSugar.png"
import blogosphere from "../../assets/images/portPics/blogosphere.png"
import recharge from "../../assets/images/portPics/recharge.png"
import employee from "../../assets/images/portPics/employee.png"
import city from "../../assets/images/portPics/citySearch.png"
import codeQuiz from "../../assets/images/portPics/codeQuiz.png"


function PortfolioList() {
    return (

        <section className="container portBody">

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

            <Project
                pic={city}
                alt="City Search"
                title="City Search: A Weather Dashboard"
                description="An easy to use platform for comprehensive weather information per city."
                technologies="HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap, Bootswatch, Open
                Weather Map API"
                repo="https://github.com/AHFotis/CitySearchWeatherDashboard"
                live="https://ahfotis.github.io/CitySearchWeatherDashboard/"
            />

            <Project
                pic={codeQuiz}
                alt="Code Quiz"
                title="Code Quiz For The Code Wiz"
                description="A multiple choice quiz application to text your beginner coding knowledge. Save your score to see how you improve."
                technologies="HTML5, CSS, JavaScript, Bootstrap, Google Fonts"
                repo="https://github.com/AHFotis/CodeQuizForTheCodeWiz"
                live="https://ahfotis.github.io/CodeQuizForTheCodeWiz/"
            />


        </section>
    )
}

export default PortfolioList;