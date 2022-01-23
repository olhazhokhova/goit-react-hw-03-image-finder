import { Component } from 'react';
import fetchImages from '../../services/pixabay-api';

import Loader from '../Loader';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

import s from './ImageGallery.module.css';

class ImageGallery extends Component { 

    state = {
        images: [],
        loading: false,
        page: 1,
        totalHits: 0,
        showModal: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({loading: true, images: []});
            fetchImages(this.props.query, this.state.page)
                .then(data => this.setState(prevState => ({ images: [...prevState.images, ...data.hits], totalHits: data.totalHits, page: 1 })))
                .finally(() => this.setState({ loading: false }));
        }
    }

    onLoadMoreClick = () => {
        this.setState(prevState => ({ page: prevState.page + 1, loading: true }));
        fetchImages(this.props.query, this.state.page)
            .then(data => this.setState(prevState => ({ images: [...prevState.images, ...data.hits], totalHits: prevState.totalHits - 12 })))
            .finally(() => this.setState({ loading: false }));
    }
    
    render() {
        const { images, loading, totalHits, showModal } = this.state;

        return (
            <>

                {loading && <Loader />}

                {images.length > 0 &&
                    <ul className={s.gallery}>
                        {images.map((image, index) => {
                            return <ImageGalleryItem key={index} image={image}/>
                        })}
                
                    </ul>
                }
                
                {totalHits > 12 && < Button onClick={this.onLoadMoreClick} />}         
                
            </>
        )
    }
}

export default ImageGallery;