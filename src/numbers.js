import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class Numbers extends Component{
    constructor(){
        super()
        this.state = {
            num: "Please enter a number!",
            resp: ""
        }
        this.textInput = React.createRef();
        this.numRequest = this.numRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    numRequest(reqNum){
        const numAPI = `http://numbersapi.com/${reqNum}`
        let req = new XMLHttpRequest();
        req.addEventListener('load', () => {
            this.setState({ resp: req.responseText})
        })
        req.open('GET', numAPI);
        req.send();
    }
    handleSubmit(event){
        event.preventDefault();
        let input = this.textInput.current.value
        this.setState({ num: input})
        this.numRequest(input)
    }
    render(){
        return(
        <div>
            <div className="numberForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control ref={this.textInput} type="text" placeholder="Enter a number here and hit 'Enter'" />
                </Form>
            </div>
            <div className="backgroundStyle">
                <div className="innerNum">
                    <h2>{this.state.num}</h2>
                    <br></br>
                    <h3>{this.state.resp}</h3>
                </div>
            </div>
        </div>
        )
    }

}

export default Numbers 