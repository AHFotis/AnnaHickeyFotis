import React from "react";
import "./styles.css"
import "../../assets/main.css"
import { Link, useLocation } from "react-router-dom";



function HomeNav() {
    const location = useLocation();


    return (




        <section id="homeNav">

            <div className="container">
                <div className="row">


                    <div className="col-sm-5 portfolio">
                    <Link
                        style={{ textDecorationColor: 'black' }}
                        to="/portfolio"
                        className={location.pathname === "/portfolio"}
                    >
                        <h3 className="headline">Portfolio</h3>
                        </Link>
                    </div>

                    <div class="col-sm-2"></div>
                    


                        <div class="col-sm-5 contact">
                        <Link
                        style={{ textDecorationColor: 'black' }}
                        to="/contact"
                        className={location.pathname === "/contact"}
                    >
                            <h3 className="headline">Contact</h3>
                            </Link>
                        </div>
                    
                </div>
            </div>



        </section>


    )
}

export default HomeNav;