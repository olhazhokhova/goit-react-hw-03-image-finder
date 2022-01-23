import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) { 
    return (
        <ul className={s.gallery}>
            {images.map((image, index) => {
                return <ImageGalleryItem key={index} image={image} onClick={onImageClick} />
            })}
    
        </ul>    
    )
}

export default ImageGallery;