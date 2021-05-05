import React from "react";
import "./styles.css"

function Footer() {

	return (
		<footer className="p-0 mb-0 bg-white text-dark fixed-bottom">
			<div className="footer-copyright pr-3 py-3 footDiv">
				<p>Anna Hickey Fotis | annahickey2@gmail.com | (952) 239-9980
			
				<a href="https://www.facebook.com/profile.php?id=13957518" target="_blank" rel="noreferrer"
					className="social" title="Facebook"><i className="fa fa-facebook-f fa-1x"></i></a>
					
				<a href="https://www.linkedin.com/in/anna-hickey-fotis" target="_blank" rel="noreferrer"
					className="social" title="LinkedIn"><i className="fa fa-linkedin fa-1x"></i></a>
					
				<a href="https://github.com/AHFotis" target="_blank" rel="noreferrer" className="social" title="GitHub"><i
					className="fa fa-github fa-1x"></i></a>

				</p>
			</div>
		</footer>
	)
}

export default Footer;