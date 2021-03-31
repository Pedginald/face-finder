import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import FaceRecognition from './components/faceRecognition/faceRecognition.js';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/rank'
import './App.css';

const app = new Clarifai.App({
    apiKey: '1e5632eb173448bdad7b5ec1c84f8d55'
});

const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: ''
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
        .predict(
            Clarifai.COLOR_MODEL,
            this.state.input)
            .then(
            function(response) {
                console.log(response);
            },
            function(err) {
                
            }
        )
    }

    render () {
        return (
            <div className="App">
                <Particles className='particles'
                    params={{particlesOptions}}
                />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit} 
                />
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        );
    }
}

export default App;
