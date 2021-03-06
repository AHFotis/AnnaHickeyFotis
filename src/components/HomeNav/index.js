import React from "react";
import "./styles.css"
import "../../assets/main.css"
import { Link } from "react-router-dom";



function HomeNav() {
    

    return (




        <section id="homeNav">

            <div className="container">
                <div className="row">


                    <div className="col-sm-5 portfolio">
                    <Link
                        style={{ textDecorationColor: 'black' }}
                        to="/portfolio"
                        
                    >
                        <h3 className="headline img-fluid">Portfolio</h3>
                        </Link>
                    </div>

                    <div className="col-sm-2"></div>
                    


                        <div className="col-sm-5 contact">
                        <Link
                        style={{ textDecorationColor: 'black' }}
                        to="/contact"
                       
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