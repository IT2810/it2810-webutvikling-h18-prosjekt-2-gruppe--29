import React, { Component } from 'react';
import axios from 'axios';

export class PictureFrame extends Component {
    constructor(props){
        super()
        this.state = {
            text: "",
            imgUrl: ""
        }
        
    }
    componentDidMount(){
        this.getText(this.props.textName);
        this.getImg(this.props.imgName);
    }

    getText= (props) => {
        const cachedHits = localStorage.getItem(props);
        if (cachedHits) {
            this.setState({
                text: cachedHits
            });     
          return;
        }
        axios.get('/text/' + props + '.json')
          .then(res => {
            this.onSetResult(props, res.data.text)});
      }
      onSetResult = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        this.setState({ text: value });
      }

    getImg = async (props) => {
        let dataVar = JSON.parse(localStorage.getItem(props))
        if(dataVar){
            this.setState({
                imgUrl:  dataVar
            });
            return;
        }
        try {
            const picture = await axios.get('/pictures/' + props + '.svg');
            this.setState({
                imgUrl: picture.data
            })
            localStorage.setItem(props, JSON.stringify(picture.data))
        }
        catch (error) {
            console.error(error);
        }
    }
    render () {
        return (
            <div className="pictureFrame">
                <p className="loadedText">{this.state.text}</p>
                <svg preserveAspectRatio="none" className="img" dangerouslySetInnerHTML={{__html: this.state.imgUrl}}></svg>                
            </div>
        )
    }
}
