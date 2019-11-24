import React, { Component } from 'react'
import { Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MetMuseum extends Component{
    constructor(){
        super()
        this.state = {
            //
            imageURL: "https://www.underconsideration.com/brandnew/archives/the_met_logo.png",
            jsonResponse : ""
        }
        this.textInput = React.createRef()
        this.getImage = this.getImage.bind(this)
        this.swapImage = this.swapImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.notFound = this.notFound.bind(this)
    }

    getImage(searchTerm) {
        let request = new XMLHttpRequest();
        let searchImage = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${searchTerm}` 
        // get a callback when the server responds
        request.addEventListener('load', () => {
            if (request.responseText === undefined) { this.getImage();}
            let res = JSON.parse(request.responseText);
            console.log(res)
            this.setState({ jsonResponse: res } ) 
            this.swapImage();
        })
        request.open('GET', searchImage)
        request.send()
    }
    swapImage(){
        let imageRequest = new XMLHttpRequest();
        if (!Array.isArray(this.state.jsonResponse.objectIDs)) { this.notFound(); return}
        let objectID = this.state.jsonResponse.objectIDs[Math.floor(Math.random() * this.state.jsonResponse.objectIDs.length)]
        let imageURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
        imageRequest.addEventListener('load', () => {
            this.setState({ imageURL: JSON.parse(imageRequest.responseText).primaryImageSmall, jsonResponse: JSON.parse(imageRequest.responseText) })
        })
        imageRequest.open('GET', imageURL)
        imageRequest.send()
    }
    handleSubmit(event){ 
        event.preventDefault(); 
        this.getImage(this.textInput.current.value)
    }
    notFound(){
        console.log("made it here")
        this.setState({ imageURL:require("./images/not_found.png") })
    }

    render() {
        return ( 
            <div>
                <div className="formMetMuseum">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control ref={this.textInput} type="text" placeholder="Type your search term here and hit 'Enter'" />
                    </Form>
                </div>
                <div className="backgroundStyle">
                    <div className="metImageInner">
                        <img src={this.state.imageURL} /> 
                    </div>
                <Table className="tableResponse">
                    <tbody>
                        <tr>
                            <td>Object Name: </td>
                                {console.log(this.state.jsonResponse)}
                            <td>{this.state.jsonResponse.title}</td>
                        </tr>
                        <tr>
                            <td>Medium: </td>
                            <td>{this.state.jsonResponse.medium}</td>
                        </tr>
                        <tr>
                            <td>Artist: </td>
                            <td>{this.state.jsonResponse.artistDisplayName}</td>
                        </tr>
                        <tr>
                            <td>Date: </td>
                            <td>{this.state.jsonResponse.objectDate}</td>
                        </tr>
                        <tr>
                            {console.log(this.state.jsonResponse)}
                            <td><a href={this.state.jsonResponse.objectURL}>See more from the Met</a></td>
                        </tr>
                    </tbody>
                 </Table>
                </div>
            </div>
        )
    }
}


export default MetMuseum;