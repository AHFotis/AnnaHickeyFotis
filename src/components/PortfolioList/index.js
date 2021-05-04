import React from "react";
import "./styles.css"
import "../../assets/main.css"
import sugar from "../../assets/images/portPics/cupOfSugar.png"
import blogosphere from "../../assets/images/portPics/blogosphere.png"
import recharge from "../../assets/images/portPics/recharge.png"
import employee from "../../assets/images/portPics/employee.png"
import city from "../../assets/images/portPics/citySearch.png"
import codeQuiz from "../../assets/images/portPics/codeQuiz.png"

function PortfolioList() {
    return (

        <section className="container portBody">
            <section className="testAlign white">

                <img src={sugar} className="img img-thumbnail img-fluid" alt="Cup Of Sugar" data-position="center center" />

                <div className="content">
                    <div>
                        <header>
                            <h3>Cup of Sugar</h3>
                        </header>
                        <br></br>
                        <p className="portP">A full stack, charitable, community platform, Cup of Sugar users can easily find local and national resources, browse posts about what resources or services are available or needed in their community, and connect with one another to help fulfill those needs.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b> CSS, Express, MySQL, Sequelize, Session-Sequelize, Handlebars, jQuery, JavaScript, Axios, Charity Navigator, Dotenv, Bcrypt</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/Cup-of-Sugar"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://cup-of-sugar-application.herokuapp.com/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>

                    </div>
                </div>
            </section>


            <section className="testAlign white">

                <div className="content">
                    <div>
                        <header>
                            <h3>The Blogoshpere</h3>
                        </header>
                        <br></br>
                        <p className="portP">A full stack blogging website allowing users to write, update, and delete personal blogs. Bloggers can also view and comment on the blogs of others.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b>CSS, JavaScript, MySQL, Inquirer, Sequelize, Express, Handlebars, Session-Sequelize. Dotenv, Bcrypt</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/TheBlogosphere"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://the-blogosphere.herokuapp.com/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>


                    </div>
                </div>
                <img src={blogosphere} className="img img-thumbnail img-fluid" alt="The Blogosphere" data-position="top center" />
            </section>

            <section className="testAlign white">

            <img src={employee} className="img img-thumbnail img-fluid" alt="Employee Finder" data-position="top center" />

                <div className="content">
                    <div>
                        <header>
                            <h3>Employee Finder</h3>
                        </header>
                        <br></br>
                        <p className="portP">A React employee directory that allows the user to search an employee database. Users can search by name or click the carrot next to name to sort the employees alphabetically.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b>CSS, JavaScript, React, React-DOM, React-Scripts, Random User Generator API, Axios, Bootstrap.</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/EmployeeFinder"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://ahfotis.github.io/EmployeeFinder/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>


                    </div>
                </div>
                
            </section>

            <section className="testAlign white">

                <div className="content">
                    <div>
                        <header>
                            <h3>Recharge Car App</h3>
                        </header>
                        <br></br>
                        <p className="portP">An application to connect electric car owners with nearby charging stations, at home or on the go.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b> HTML5, CSS, JavaScript, jQuery, AJAX, Bulma, Mapquest, Radar, Open
                        Charger Map</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/RechargeCarApp"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://ahfotis.github.io/RechargeCarApp/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>

                    </div>
                </div>
                <img src={recharge} className="img img-thumbnail img-fluid" alt="Recharge" data-position="center center" />
            </section>

            

            <section className="testAlign white">

                <img src={city} className="img img-thumbnail img-fluid" alt="City Search" data-position="center center" />

                <div className="content">
                    <div>
                        <header>
                            <h3>City Search: A Weather Dashboard</h3>
                        </header>
                        <br></br>
                        <p className="portP">An easy to use platform for comprehensive weather information per city.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b> CHTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap, Bootswatch, Open
                        Weather Map API</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/CitySearchWeatherDashboard"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://ahfotis.github.io/CitySearchWeatherDashboard/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>

                    </div>
                </div>
            </section>

            <section className="testAlign white last">

                <div className="content">
                    <div>
                        <header>
                            <h3>Code Quiz For The Code Wiz</h3>
                        </header>
                        <br></br>
                        <p className="portP">A multiple choice quiz application to text your beginner coding knowledge. Save your score to see how you improve.</p>
                        <br></br>
                        <p className="portP"><b>Technologies Used: </b>HTML5, CSS, JavaScript, Bootstrap, Google Fonts</p>
                        <br></br>
                        <a class="link" href="https://github.com/AHFotis/CodeQuizForTheCodeWiz"
                            target="_blank"><button className="btnPink">Visit the Repository</button></a>
                        <a class="link"
                            href="https://ahfotis.github.io/CodeQuizForTheCodeWiz/" target="_blank"><button className="btnPink">Visit the Live Page</button></a>


                    </div>
                </div>
                <img src={codeQuiz} className="img img-thumbnail img-fluid" alt="Code Quiz" data-position="top center" />
            </section>

        
        </section>
    )
}

export default PortfolioList;