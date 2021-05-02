import React from "react";
import "../assets/main.css"

function Footer() {

    return (
    <footer id="footer">
            <div className="inner">
            <h5 class="footer-copyright text-center py-3">Anna Hickey Fotis |  
             annahickey2@gmail.com |  (952) 239-9980 | © 2020 Copyright</h5>
                        <div className="row">
										<div className="col-sm-10">
											<p className="footDes">Connect with Anna on Facebook, LinkedIn, and GitHub!</p>
										</div>
										<div className="col-sm-2">
											<div className="row">
												<div className="col-sm-4">
													<a href="https://www.facebook.com/profile.php?id=13957518" target="_blank"
														className="socialFace" title="Facebook"><i className="fa fa-facebook-f fa-2x"></i></a>
												</div>
												<div className="col-sm-4">
													<a href="https://www.linkedin.com/in/anna-hickey-fotis" target="_blank"
														className="socialLinked" title="LinkedIn"><i className="fa fa-linkedin fa-2x"></i></a>
												</div>
												<div className="col-sm-4">
													<a href="https://github.com/AHFotis" target="_blank" className="socialGit" title="GitHub"><i
														className="fa fa-github fa-2x"></i></a>
												</div>
											</div>
										</div>
									</div>
            </div>
        </footer>
    )
}

export default Footer;