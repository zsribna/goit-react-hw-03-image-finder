import React, { Component } from 'react'
import {  GalleryImg,   ModalStyled, } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export class ImageGalleryItem extends Component {
  state = { showModal: false }
  hendleOpenModal = () => {
    this.setState({showModal: true})
  }
  hendleCloseModal = () => {
        this.setState({ showModal: false });
  }
  
  render() {
   
    const { webformatURL, tags, largeImageURL } = this.props.item;
    return (
      <>
        <div onClick={this.hendleOpenModal}>
          <GalleryImg src={webformatURL} alt={tags} />
        </div>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.hendleCloseModal}
          style={ModalStyled}
          contentLabel="Example Modal"
        >
        
            <img src={largeImageURL} alt={tags} width="1150" height="650" />
          

        </Modal>
      </>
    );
     
  }
}

export default ImageGalleryItem
