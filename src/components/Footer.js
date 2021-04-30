import React from "react";
import "../assets/css/main.css"

function Footer() {

    return (
    <footer id="footer">
            <div className="inner">
            <h5 class="footer-copyright text-center py-3">Anna Hickey Fotis |  
             annahickey2@gmail.com |  (952) 239-9980 | © 2020 Copyright</h5>
                <ul className="icons">
                    <li><a href="https://www.facebook.com/profile.php?id=13957518" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/ahickeyfotis/?hl=en" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/AHFotis" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/anna-hickey-fotis" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;