import React from 'react';
import { Image, View, Dimensions } from 'react-native';
import { Item, Input, Label, Button, Text, Card, CardItem, Body, Icon } from 'native-base';
import { observer } from 'mobx-react/native';

import { ScreenContainer, ScreenContent } from '../../components';
import { CarListModel, CarModel, PhotosModel } from '../../models';

import PhotosModal from '../PhotosModal';

import styles from './styles';

const win = Dimensions.get('window');
const ratio = win.width/541; 

class CarForm extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button transparent style={styles.checkMarkButton} onPress={navigation.getParam('addCar')}>
                    <Icon name="md-checkmark-circle" />
                </Button>
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            brand: '',
            photo: undefined,
            modalVisible: false
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            addCar: this.onAddCarPress.bind(this)
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.modalVisible === false && PhotosModel.photos.length) {
            PhotosModel.resetPhotos();
        }
    }

    async onAddCarPress() {
        const car = new CarModel({
            name: this.state.name,
            brand: this.state.brand
        });
        await CarListModel.addCar(car);
        this.props.navigation.navigate('Home');
    }

    async handlePhotoButtonPress() {
        PhotosModel.loadPhotos();
        this.setState({ modalVisible: true });
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenContent>
                    {this.state.photo
                        &&
                        <Image
                            style={{
                                width: win.width,
                                height: 362 * ratio
                            }}
                            source={{ uri: this.state.photo.node.image.uri }}
                        />
                    }
                    <Card>
                        <CardItem>
                            <Body>
                                <Item inlineLabel>
                                    <Label>Name</Label>
                                    <Input value={this.state.name} onChangeText={text => this.setState({ name: text })} />
                                </Item>
                                <Item inlineLabel last>
                                    <Label>Brand</Label>
                                    <Input value={this.state.brand} onChangeText={text => this.setState({ brand: text })} />
                                </Item>
                                <Button onPress={this.handlePhotoButtonPress.bind(this)}>
                                    <Text>Photo</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <PhotosModal
                        visible={this.state.modalVisible}
                        onSelectClick={photo => this.setState({ photo, modalVisible: false })}
                        onCloseClick={() => this.setState({ modalVisible: false })}
                        photos={PhotosModel.photos}
                    />
                </ScreenContent>
            </ScreenContainer>
        );
    }
}

CarForm = observer(CarForm);

export default CarForm;