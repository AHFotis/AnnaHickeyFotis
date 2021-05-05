import React from "react";
import Footer from "../../components/Footer/index"
import Header from "../../components/Header"
import "./styles.css"
import "../../assets/main.css"
import resume from "../../pdf/2021WebDevelopmentResume.pdf"
import PortfolioList from "../../components/PortfolioList"


function Portfolio() {

    return (

        <div>

            <Header />


            <main className="mainBody">

                <header id="portfolio">

                    <div className="container pTitle">
                        <div className="row">

                            <h1 className="pHeader">Portfolio</h1>

                        </div>
                    </div>



              

                <br></br>

                <section id="pDescription" className="container">

                    <div className="row">
                        <div className="col-lg-12">

                            <p className="resume">Download Anna's Resume <a href={resume}><i
                                className="fa fa-file"></i></a></p>
                        </div>
                    </div>




                </section>

                <br></br>

            <PortfolioList />
            </header>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;