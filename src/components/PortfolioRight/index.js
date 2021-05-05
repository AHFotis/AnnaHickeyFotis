import React from "react";
import "./styles.css"
import "../../assets/main.css"

function PortfolioRight(props) {
    return (

<section className="testAlign white">

<div className="content">
    <div>
        <header>
            <h3>{props.title}</h3>
        </header>
        <br></br>
        <p className="portP">{props.description}</p>
        <br></br>
        <p className="portP"><b>Technologies Used: </b>{props.technologies}</p>
        <br></br>
        <a className="link" href={props.repo}
            target="_blank" rel="noreferrer"><button className="btnPink">Visit the Repository</button></a>
        <a className="link"
            href={props.live} target="_blank" rel="noreferrer"><button className="btnPink">Visit the Live Page</button></a>


    </div>
</div>
<img src={props.pic} className="img img-thumbnail img-fluid" alt={props.alt} data-position="top center" />
</section>

)
}

export default PortfolioRight;