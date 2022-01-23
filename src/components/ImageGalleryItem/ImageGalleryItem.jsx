import React from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component { 
    handleClick = () => {
        const { largeImageURL, tags } = this.props.image;
        this.props.onClick(largeImageURL, tags);
    }

    render() {
        
        const { image } = this.props;
    
        return (
            <li id={image.id} className={s.galleryItem} onClick={this.handleClick}>
                <img src={image.webformatURL} alt="" />
            </li>
        )
     }
    
}

export default ImageGalleryItem;