import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Modal, PaperProvider, Portal, Card} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {hairColorInfo} from '../../utils/hairColorInfo';
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        setImageUri(selectedImage);
      }
    });
  };
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUri && (
            <Image
              resizeMode="contain"
              source={{uri: imageUri}}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="outlined" style={styles.button} onPress={openGallery}>
            Choose Picture
          </Button>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => {
              setOpenModal(true);
            }}>
            Choose HairColor
          </Button>
        </View>
        <Portal>
          <Modal
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'flex-start',
              flex: 1,
            }}
            contentContainerStyle={{
              width: '70%',
              minHeight: '50%',
              borderRadius: 15,
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              padding: '2%',
            }}
            visible={openModal}>
            <View style={styles.hairColorContainer}>
              {Array.isArray(hairColorInfo)
                ? hairColorInfo.map((item,index) => {
                    return (
                      <View key={index} style={{backgroundColor:'skyblue',width:'20%',margin:'3%',justifyContent:'center',alignItems:'center',flex:1}}>
                 
                        <Text>{item.name}</Text>
                      </View>
                    );
                  })
                : ''}
            </View>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    backgroundColor:'green',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '5%',
    alignContent: 'center',
  },
  imageContainer: {
    width: '90%',
    height: '70%',
    backgroundColor: '#d9d9d9',
    borderRadius: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    padding: '5%',
    width: '70%',
    height: '20%',
    margin: '2%',
  },
  button: {
    width: '100%',
    marginVertical: '2%',
    // backgroundColor:'skyblue'
  },
  image: {
    width: 500,
    height: 600,
    marginTop: 20,
    borderRadius: 10,
  },
  hairColorContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
});

export default Home;
