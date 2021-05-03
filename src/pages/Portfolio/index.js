import React from "react";
import Footer from "../../components/Footer/index"
import Header from "../../components/Header"
import "./styles.css"
import resume from "../../pdf/2021WebDevelopmentResume.pdf"


function Portfolio() {

    return (

        <div>

            <Header />


            <main className="mainBody">

                <header id="portfolio">

                    <div className="pTitle">
                        <div className="row">

                            <h1 className="pHeader">Portfolio</h1>

                        </div>
                    </div>



                </header>

                <br></br>

                <section id="pDescription" className="container">

                    <div className="row">
                        <div className="col-lg-12">

                            <p className="resume">Download Anna's Resume <a href={resume}><i
                                class="fa fa-file"></i></a></p>
                        </div>
                    </div>




                </section>

                <br></br>



            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;