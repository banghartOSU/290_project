import React, { Component } from "react"

class About extends Component{
    

    render(){
        return(
            <div>
                <h1>About</h1>
                <div className="aboutText">
                    <h3>
                        This is a simple test website to make use of some of the skills learned in
                        CS 290. <br></br>Below are short explanations of each page. 
                    </h3>
                        <br></br><br></br>
                        <div className="list">
                        <ul>
                            <li> <h4>"The Met"</h4>
                                <ul>
                                    <li>
                                        Takes a term from the user and uses the <a href="https://metmuseum.github.io/">Metropolitan Museum of Art's API </a> 
                                         to return an image and details from a random object in the collection returned from the search. This one may take some time
                                         so please be patient!
                                    </li>
                                </ul>
                            </li>
                            <br></br>
                            <li> <h4>Article</h4>
                                <ul>
                                    <li>
                                        A theory paper I wrote in a past life regarding object-oriented ontology as it applies to archaeology.
                                        I use the paper here to demonstrate a scrollbox html element
                                    </li>
                                </ul>
                            </li>
                            <br></br>
                            <li> <h4>Download Resume</h4>
                                <ul>
                                    <li>
                                        My outdated resume, used to demostrate downloading a file.
                                    </li>
                                </ul>
                            </li>
                            <br></br>
                            <li> <h4>Corporate API</h4>
                                <ul>
                                    <li>
                                        More parctice using API requests. This time using the <a href="https://github.com/sameerkumar18/corporate-bs-generator-api/">Corporate Buzzword Generator API</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                </div>
                <p>
                    First Carousel Image: https://www.wsj.com/articles/taking-the-visitor-by-the-hand-11554492422
                    <br></br>
                    Second Carousel Image: http://cvq42.access.ly/ikarus-mythos.html 
                </p>
            </div>
        )
    }

}
export default About;