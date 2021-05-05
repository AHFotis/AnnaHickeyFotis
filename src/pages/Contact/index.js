import React from "react";
import Footer from "../../components/Footer/index"
import Header from "../../components/Header"
import "./styles.css"


function Contact() {

    return (

        <div>

            <Header />


            <main>

                <div id="mainContact">

                    <div className="container pTitle">
                        <div className="row">

                            <h1 className="pHeader">Contact</h1>

                        </div>
                    </div>



                



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
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-5">
                            <p className="faOne phoneEmail"><i className="fa fa-phone fa-1x"></i>   : (952) 239 9980</p>
                        </div>
                        <div className="col-sm-7">
                            <p className="phoneEmail"><i className="fa fa-envelope fa-1x"></i><a className="iconLink text-wrap" href="mailto:annahickey2@gmail.com">   : annahickey2@gmail.com</a></p>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-sm-12">
                        <p className='socTitle'>Follow me on GitHub, LinkedIn, and Facebook</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-2 fa">
                            <p className="clickables" ><a className="iconLink" title="GitHub" href="https://github.com/AHFotis"><i className="fa fa-github fa-3x"></i></a></p>
                        </div>
                        
                        <div className="col-sm-2 fa">
                            <p className="clickables"><a className="iconLink" href="https://www.linkedin.com/in/anna-hickey-fotis"><i className="fa fa-linkedin fa-3x"></i></a></p>
                        </div>
                       
                        <div className="col-sm-2 fa">
                            <p className="clickables"><a className="iconLink" href="https://www.facebook.com/profile.php?id=13957518"><i className="fa fa-facebook fa-3x"></i></a></p>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>

                    <hr className="my-4"></hr>


                </section>

           <br></br>
           </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;