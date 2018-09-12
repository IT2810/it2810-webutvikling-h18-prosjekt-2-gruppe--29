import React, { Component } from 'react';
import axios from 'axios';
import {Music} from './Music.js';

export class PictureFrame extends Component {
    
    constructor(props){
        super()
        this.state = {
            tekst: "",
            imgUrl: ""
        }
        this.getText(props.textName);
        this.getImg(props.imgName);
    }

    getText(props){
        axios.get('/text/' + props + '.json')
          .then(res => {
            this.setState({tekst: res.data.text})
          })
      }

    getImg = async (props) => {
      try {
        const picture = await axios.get('/pictures/' + props + '.svg');
        this.setState({
          imgUrl: picture.data
        })
      }
      catch (error) {
        console.error(error);
      }
    }

    render () {
        return (
            <div className="pictureFrame">
                <p>{this.state.tekst}</p>
                <div dangerouslySetInnerHTML={{__html: this.state.imgUrl}}></div>
                <Music audioName={this.props.audioName}/>
            </div>
        )
    }
}
