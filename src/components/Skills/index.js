
import React from "react";
import "./styles.css"
import "../../assets/main.css"
import html from "../../assets/images/icons/html.png"
import css from "../../assets/images/icons/CSS.png"
import js from "../../assets/images/icons/js.png"
import ajax from "../../assets/images/icons/AJAX.png"
import jquery from "../../assets/images/icons/jquery.png"
import git from "../../assets/images/icons/git.png"
import node from "../../assets/images/icons/node.png"
import express from "../../assets/images/icons/express.png"
import vscode from "../../assets/images/icons/vscode.png"
import mongodb from "../../assets/images/icons/mongodb.png"
import mysql from "../../assets/images/icons/mysql.png"
import react from "../../assets/images/icons/react.png"


function Skills() {
	return (

			<section id="skills">
				<div className="container">
				<h2>Anna Is Skilled In</h2>
				<hr></hr>
				<div className="row rowOne">
					<div className="col-sm-2">
						
						<img className="img img-thumbnail img-fluid icon" src={html}
										alt="html"></img>
										<p>HTML5</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={css}
										alt="css"></img>
										<p>CSS</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={js}
										alt="js"></img>
										<p>JavaScript and ES6</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={ajax}
										alt="ajax"></img>
										<p>AJAX/Axios</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={jquery}
										alt="jquery"></img>
										<p>jQuery</p>
						
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={git}
										alt="git"></img>
										<p>Git</p>
					</div>
				</div>
				<div className="row rowTwo">
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={node}
										alt="node"></img>
										<p>Node.js</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={express}
										alt="express"></img>
										<p>Express</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={vscode}
										alt="vscode"></img>
										<p>Visual Studio Code</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={mongodb}
										alt="mongodb"></img>
										<p>MongoDB</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={mysql}
										alt="mysql"></img>
										<p>MySQL</p>
					</div>
					<div className="col-sm-2">
					
						<img className="img img-thumbnail img-fluid icon" src={react}
										alt="react"></img>
										<p>React</p>
					</div>
				</div>
				</div>
				

			</section>

    )
}

export default Skills;