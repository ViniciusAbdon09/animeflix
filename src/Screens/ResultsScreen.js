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

const ResultsScreen = props => {
  const {searchQueryInput} = props.route.params;
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState('');

  function animeItem(item) {
    return (
      <CardAnime
        navigate={props.navigation.navigate}
        anime={item}
        key={item.id}
        title={item.attributes.canonicalTitle}
        urlImage={item.attributes.posterImage.small}
      />
    );
  }

  useEffect(() => {
    fetch(`${api}anime?filter[text]=${searchQueryInput}&page[limit]=9`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json({});
      })
      .then(res => setAnimes(res))
      .catch(error => setError(error + ' Não foi possivel realizar a busca'));
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.text}>
        {!error ? `Search by ${searchQueryInput}...` : error}
      </Text>
      <View style={styles.display}>
        <FlatList
          data={animes.data}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => animeItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
