import React from 'react';
import { Modal, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Header, Icon, Left, Right, Button } from 'native-base';

import styles from './styles';
const PhotoTile = ({ photo, i, onPress }) => {
    return (
        <TouchableOpacity onPress={photo => onPress(photo)}>
            <View key={i} style={styles.imageTile}>
                <Image
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={{ uri: photo.node.image.uri }}
                />
            </View>
        </TouchableOpacity>
    );
}

const PhotosTiles = ({ photos, onPress }) => {
    return (
        <View style={styles.photosTiles}>
            {photos.map((photo,i) => <PhotoTile key={i} photo={photo} onPress={onPress}/>)}
        </View>
    );
}

class PhotosModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: undefined
        }
    }

    render() {
        const { visible, photos, onCloseClick, onSelectClick } = this.props;
        return (
            <View style={styles.container}>
                <Modal
                    visible={visible}
                    animationType="slide"
                >
                    <Header>
                        <Left>
                            <Button transparent onPress={() => onCloseClick()}>
                                <Icon name='close' />
                            </Button>
                        </Left>
                        <Right>
                            {this.state.photo
                            && <Button transparent onPress={() => onSelectClick(this.state.photo)}>
                                    <Icon name='checkmark' />
                                </Button>}
                        </Right>
                    </Header>
                    <ScrollView>
                        <PhotosTiles photos={photos} onPress={(photo) => this.setState({ photo })}/>
                    </ScrollView>
                </Modal>
            </View>);
    }
}

export default PhotosModal;