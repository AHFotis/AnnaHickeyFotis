import React from "react";
import "./styles.css"
import "../../assets/main.css"


function Project(props) {
    return (

        
            <section className="testAlign white">
               
                <div className="content text-wrap">
            
                    <div>
                        <header>
                            <h3 classname=".header">{props.title}</h3>
                        </header>
                        <br></br>
                        <img src={props.pic} className="img img-thumbnail img-fluid portImg" alt={props.alt}  />
                        <br></br>
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
            </section>





        
      
    )
}

export default Project;