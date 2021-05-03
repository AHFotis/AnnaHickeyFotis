import React from "react";
import Footer from "../../components/Footer/index"
import Header from "../../components/Header"
import "./styles.css"


function Contact() {

    return (

        <div>

            <Header />


            <main className="mainBody">

                <header id="portfolio">

                    <div className="pTitle">
                        <div className="row">

                            <h1 className="pHeader">Contact</h1>

                        </div>
                    </div>



                </header>



                <section id="contact" className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Let's Connect!</h2>
                            <hr className="my-4"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 name">
                            <h3>Anna Hickey Fotis</h3>
                        </div>
                        <br></br>
                        <div className="col-lg-12 fa">
                            <p><i className="fa fa-phone fa-2x"></i>   : (952) 239 9980</p>
                        </div>
                        <br></br>
                        <div className="col-lg-12 fa">
                            <p><i className="fa fa-envelope fa-2x"></i><a href="mailto:annahickey2@gmail.com">   : annahickey2@gmail.com</a></p>
                        </div>
                        <br></br>
                        <div className="col-lg-12 fa">
                            <p><i className="fa fa-github fa-2x"></i><a href="https://github.com/AHFotis">   : https://github.com/AHFotis</a></p>
                        </div>
                        <br></br>
                        <div className="col-lg-12 fa">
                            <p><i className="fa fa-linkedin fa-2x"></i><a href="https://www.linkedin.com/in/anna-hickey-fotis"> : https://www.linkedin.com/in/anna-hickey-fotis</a></p>
                        </div>
                        <br></br>
                        <div className="col-lg-12 fa">
                            <p><i className="fa fa-facebook fa-2x"></i><a href="https://www.facebook.com/profile.php?id=13957518"> : https://www.facebook.com/profile.php?id=13957518</a></p>
                        </div>
                    </div>

                    <hr className="my-4"></hr>


                </section>

           <br></br>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;