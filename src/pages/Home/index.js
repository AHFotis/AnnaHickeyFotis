
import React from "react";
import Footer from "../../components/Footer/index"
import Header from "../../components/Header"
import "./styles.css"
import "../../assets/main.css"
import Anna from "../../assets/images/Anna_Main.jpg"
import About from "../../components/About"
import Skills from "../../components/Skills"
import HomeNav from "../../components/HomeNav"



function Home() {
	return (

		<div>

			<Header />


			<main className="mainBody">
				
				<header id="welcome">

					<div className=" container title">
						<div className="row">
							<div className="col-sm-9">
						<h1>Anna Hickey Fotis</h1>
						<p className="description">Creating content with compassion</p>
						</div>
						
						<div className="col-sm-3">
						<img className="img img-thumbnail img-fluid anna" src={Anna}
								alt="Picture of Anna"></img>
						</div>
						</div>
						</div>

						
							
						
				</header>


				<About />

				<Skills />
				
				<HomeNav/>

			</main>
			<Footer />
		</div>
	)
}

export default Home;