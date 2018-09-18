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
            this.setState({tekst: res.data.text});
            localStorage.setItem(props, JSON.stringify(res.data.text));
          })
      }

    getImg = async (props) => {
      try {
        const picture = await axios.get('/pictures/' + props + '.svg');
        this.setState({
          imgUrl: picture.data
        })
        localStorage.setItem(props, JSON.stringify(picture.data));
      }
      catch (error) {
        console.error(error);
      }
    }

    render () {
        return (
            <div className="pictureFrame">
                <p className="loadedText">{this.state.tekst}</p>
                <svg preserveAspectRatio="none" className="img" dangerouslySetInnerHTML={{__html: this.state.imgUrl}}></svg>                
            </div>
        )
    }
}
