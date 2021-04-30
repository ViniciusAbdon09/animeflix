import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CardAnime from '../components/CardAnime';

const api = 'https://kitsu.io/api/edge/';

const ResultsScreen = (props) => {
  const {search} = props.route.params;
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${api}anime?filter[text]=${search}&page[limit]=9`)
      .then(res => res.json({}))
      .then(res => setAnimes(res));
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.text}>Search by {search}...</Text>
      <View style={styles.display}>
        <FlatList
          data={animes.data}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  props.navigation.navigate('Details', {anime: item});
                }}>
                <View>
                  <CardAnime
                    key={item.id}
                    title={item.attributes.canonicalTitle}
                    urlImage={item.attributes.posterImage.small}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexGrow: 1,
    overflow: 'hidden',
    flexBasis: 0,
    padding: 4,
    margin: 4,
  },
  display: {
    margin: 0,
  },
  safe: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.84,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ResultsScreen;