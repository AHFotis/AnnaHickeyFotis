
import React from "react";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./styles.css"
import "../../assets/main.css"
import Anna from "../../assets/images/Anna_Main.jpg"
import About from "../../components/About"
import Skills from "../../components/Skills"



function Home() {
	return (

		<div id="wrapper" className="mainBody">

			<Header />


			<main>
					<header >
						
								<div className="row">
								<div className="col-sm-2"></div>
									<div className="col-sm-6 mb-0">
										<h1>Anna Hickey Fotis</h1>
										
									</div>
									<div className="col-sm-2">
									<img className="img img-thumbnail img-fluid" src={Anna}
										alt="Picture of Anna"></img>
									</div>
									<div className="col-sm-2"></div>
								</div>
							
					</header>


		<About />

			<Skills />

      

    </main>
						<Footer />
</div>
    )
}

export default Home;