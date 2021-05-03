import React from "react";
import "./styles.css"

function Footer() {

	return (
		<footer className="p-0 mb-0 bg-white text-dark fixed-bottom">
			<div className="footer-copyright pr-3 py-3 footDiv">
				<p>Anna Hickey Fotis | annahickey2@gmail.com | (952) 239-9980
			
				<a href="https://www.facebook.com/profile.php?id=13957518" target="_blank"
					className="social" title="Facebook"><i className="fa fa-facebook-f fa-1x"></i></a>
					
				<a href="https://www.linkedin.com/in/anna-hickey-fotis" target="_blank"
					className="social" title="LinkedIn"><i className="fa fa-linkedin fa-1x"></i></a>
					
				<a href="https://github.com/AHFotis" target="_blank" className="social" title="GitHub"><i
					className="fa fa-github fa-1x"></i></a>

				</p>
			</div>
		</footer>
		// <footer id="footer" classNameName="p-0 mb-0 bg-white text-dark fixed-bottom">
		//         <div classNameName="inner">
		//         <h5 className="footer-copyright text-center py-3">Anna Hickey Fotis |  
		//          annahickey2@gmail.com |  (952) 239-9980 | © 2020 Copyright</h5>
		//          <div classNameName="row">
		// 									<div classNameName="col-sm-10 ">
		// 										<p>Connect with Anna on Facebook, LinkedIn, and GitHub!</p>
		// 									</div>
		// 									<div classNameName="col-sm-2">
		// 										<div classNameName="row">
		// 											<div classNameName="col-sm-4">
		// 												<a href="https://www.facebook.com/profile.php?id=13957518" target="_blank"
		// 													classNameName="socialFace" title="Facebook"><i classNameName="fa fa-facebook-f fa-2x"></i></a>
		// 											</div>
		// 											<div classNameName="col-sm-4">
		// 												<a href="https://www.linkedin.com/in/anna-hickey-fotis" target="_blank"
		// 													classNameName="socialLinked" title="LinkedIn"><i classNameName="fa fa-linkedin fa-2x"></i></a>
		// 											</div>
		// 											<div classNameName="col-sm-4">
		// 												<a href="https://github.com/AHFotis" target="_blank" classNameName="socialGit" title="GitHub"><i
		// 													classNameName="fa fa-github fa-2x"></i></a>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</div>
		//         </div>
		//     </footer>
	)
}

export default Footer;