import { observable, decorate, flow, action } from 'mobx';
import { PhotosCommons } from '../common';

class PhotosModel {
    photos = [];

    loadPhotos = flow(function *(params) {
        const photos = yield PhotosCommons.loadPhotosFromGallery(params);
        this.photos = photos;
    })

    resetPhotos() {
        this.photos = [];
    }
}

decorate(PhotosModel, {
    photos: observable,
    loadPhotos: action,
    resetPhotos: action
})

const photosModel = new PhotosModel();

export default photosModel;