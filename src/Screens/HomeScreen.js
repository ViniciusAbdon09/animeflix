import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import Image from '../../assets/JumpSuper.jpg';

const HomeScreen = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={Image} style={styles.image} opacity={0.81}>
        <View style={styles.box}>
          <Text style={styles.text}> Search for Anime</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: Dragon Ball..."
            placeholderTextColor="white"
            value={text}
            onChangeText={setText}
          />
          <Button
            title="SEARCH"
            onPress={() => {
              props.navigation.navigate('Results', {search: text})
              setText('')
              }
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'black',
    opacity: 0.74,
    width: 320,
    height: 400,
    justifyContent: 'center',
    padding: 25,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 20,
    color: 'white',
  },
});

export default HomeScreen;