
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
							<div className="col-lg-9 col-sm-7">
						<h1 className="mainTitle">Anna Hickey Fotis</h1>
						</div>
						
						<div className="col-lg-3 col-sm-5">
						<img className="img img-fluid anna" src={Anna} alt="Anna Hickey Fotis"></img>
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