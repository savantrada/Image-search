import React from 'react';

class ImageCard extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);

    }

    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans});
    }

    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}  alt={this.props.image.discription} src={this.props.image.urls.regular} />
            </div>
        );
    }
}

export default ImageCard;