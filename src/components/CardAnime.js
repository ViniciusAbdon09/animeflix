import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default props => {
  return (
    <>
      <View>
        <Image
          source={{uri: props.urlImage}}
          style={{width: 130, height: 200}}
          resizeMode="contain"
          alt={props.title}
        />
      </View>
      <View style={{marginLeft: 8, marginRight: 8}}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
