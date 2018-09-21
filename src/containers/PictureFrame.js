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

    componentDidUpdate(prevProps, prevState){
        if (prevProps.textName !== this.props.textName) {
            this.getText(this.props.textName);
        }
        if (prevProps.imgName !== this.props.imgName) {
            this.getImg(this.props.imgName);
        }
    }

    componentDidMount() {
        this.getText(this.props.textName);
        this.getImg(this.props.imgName);
    }

    getText= (props) => {
        const cachedHits = sessionStorage.getItem(props);
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

    getImg = async (props) => {
        let dataVar = JSON.parse(sessionStorage.getItem(props))
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
            sessionStorage.setItem(props, JSON.stringify(picture.data))
        }
        catch (error) {
            console.error(error);
        }
    }

    onSetResult = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
        this.setState({ text: value });
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
