import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default props => {
  const {navigate} = props
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.navigate('Details', {animeData: props.anime});
      }}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexGrow: 1,
    overflow: 'hidden',
    flexBasis: 0,
    padding: 4,
    margin: 4,
  },
});
