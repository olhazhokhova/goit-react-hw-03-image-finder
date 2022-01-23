import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({image}) { 
    return (
        <li id={image.id} className={s.galleryItem}>
            <img src={image.webformatURL} alt="" />
        </li>
        )
}

export default ImageGalleryItem;