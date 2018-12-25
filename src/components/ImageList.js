import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = props =>{

    const images= props.images.map((image) =>{
        // eslint-disable-next-line jsx-a11y/alt-text
        return <ImageCard key={image.id} image={image}/>
    });

    return (
    <div className='image-list'>{images}</div>
    );

}

export default ImageList;