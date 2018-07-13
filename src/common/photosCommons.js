import { CameraRoll } from 'react-native';

export async function loadPhotosFromGallery(params = { first: 20 }) {
    return getPhotos(params);
}

async function getPhotos(params) {
    try {
        const { edges } = await CameraRoll.getPhotos(
            Object.assign(
                params,
                {
                    assetType: 'Photos'
                }
            )
        )

        return edges;
    } catch(error) {
        console.error('Cannot load photos');
    }
}
