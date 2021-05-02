
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
				<h2>Skilled In</h2>
				<div className="row">
					<div className="col-sm-2">
						<p>HTML5</p>
						<img className="img img-thumbnail img-fluid icon" src={html}
										alt="html"></img>
					</div>
					<div className="col-sm-2">
					<p>CSS</p>
						<img className="img img-thumbnail img-fluid icon" src={css}
										alt="css"></img>
					</div>
					<div className="col-sm-2">
					<p>JavaScript and ES6</p>
						<img className="img img-thumbnail img-fluid icon" src={js}
										alt="js"></img>
					</div>
					<div className="col-sm-2">
					<p>AJAX/Axios</p>
						<img className="img img-thumbnail img-fluid icon" src={ajax}
										alt="ajax"></img>
					</div>
					<div className="col-sm-2">
					<p>jQuery</p>
						<img className="img img-thumbnail img-fluid icon" src={jquery}
										alt="jquery"></img>
						
					</div>
					<div className="col-sm-2">
					<p>Git</p>
						<img className="img img-thumbnail img-fluid icon" src={git}
										alt="git"></img>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-2">
					<p>Node.js</p>
						<img className="img img-thumbnail img-fluid icon" src={node}
										alt="node"></img>
					</div>
					<div className="col-sm-2">
					<p>Express</p>
						<img className="img img-thumbnail img-fluid icon" src={express}
										alt="express"></img>
					</div>
					<div className="col-sm-2">
					<p>Visual Studio Code</p>
						<img className="img img-thumbnail img-fluid icon" src={vscode}
										alt="vscode"></img>
					</div>
					<div className="col-sm-2">
					<p>MongoDB</p>
						<img className="img img-thumbnail img-fluid icon" src={mongodb}
										alt="mongodb"></img>
					</div>
					<div className="col-sm-2">
					<p>MySQL</p>
						<img className="img img-thumbnail img-fluid icon" src={mysql}
										alt="mysql"></img>
					</div>
					<div className="col-sm-2">
					<p>React</p>
						<img className="img img-thumbnail img-fluid icon" src={react}
										alt="react"></img>
					</div>
				</div>
				</div>
				

			</section>

    )
}

export default Skills;