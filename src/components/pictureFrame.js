import React, { Component } from 'react';
import axios from 'axios';

export class PictureFrame extends Component {
    constructor(props){
        super()
        this.state = {
            tekst: "",
        }
        this.getText(props.textName);
    }

    getText(props){
        axios.get('/text/' + props + '.json')
          .then(res => {
            this.setState({tekst: res.data.text})
          })
      }

    render () {
        return (
            <div className="pictureFrame">
                <p>{this.state.tekst}</p>
            </div>
        )
    }
}

