import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Corporate extends Component{
    constructor(){
        super()
        this.state = {
            resp: ""
        }
        this.textInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const numAPI = `https://corporatebs-generator.sameerkumar.website/`
        let req = new XMLHttpRequest();
        req.addEventListener('load', () => {
            this.setState({ resp: JSON.parse(req.responseText) })
        })
        req.open('GET', numAPI);
        req.send();
        
    }
    render(){
        return(
        <div>
            <div className="backgroundStyle">
                <div className="innerNum">
                    <Button variant="primary" onClick={this.handleSubmit}>Gimmie some jive</Button>
                </div>
                <div>
                        <h3>{this.state.resp.phrase}</h3>
                </div>
            </div>
        </div>
        )
    }

}

export default Corporate