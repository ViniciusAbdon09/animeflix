import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Alert
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const DetailsScreen = props => {
  const {anime} = props.route.params;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Finished trailer!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.display} >
      <ScrollView>
        <View >
          {!playing && (
            <Image
              style={styles.poster}
              source={{uri: anime.attributes.coverImage.original}}
              alt={anime.attributes.canonicalTitle}
            />
          )}
          {playing && (
            <YoutubePlayer
              height={200}
              play={playing}
              videoId={anime.attributes.youtubeVideoId}
              onChangeState={onStateChange}
            />
          )}

          <Button
            title={playing ? 'pause' : 'Trailer'}
            onPress={togglePlaying}
          />

          <View style={styles.information}>
            <Text style={styles.title}>{anime.attributes.canonicalTitle}</Text>
            <View style={styles.info}>
              <Text style={styles.text}>
                Avarage Rating:{' '}
                <Text style={{color: '#22bb33'}}>
                  {anime.attributes.averageRating}
                </Text>
              </Text>
              <Text style={styles.text}>
              {' '}Popularity Rank:{' '}
                <Text style={{color: '#22bb33'}}>
                  {anime.attributes.popularityRank}
                </Text>
              </Text>
              <Text style={styles.text}>
                Episode Count:{' '}
                <Text style={{color: '#22bb33'}}>
                  {anime.attributes.episodeCount}
                </Text>
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={{flexGrow: 1, color: 'white', marginTop: 4}}>
                Age Rating Guide: {anime.attributes.ageRatingGuide}
              </Text>
            </View>
            <Text style={{marginTop: 4, color: 'white', textAlign: 'justify', flexGrow:1, flexBasis: 0}}>
              Synopsis: {anime.attributes.synopsis}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  poster: {
    height: 300,
  },
  display: {
    backgroundColor: 'black',
    opacity: 0.84,
    height: '100%',
    flexGrow: 1,
  },
  information: {
    margin: 20,
    marginTop: 10,
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    flexGrow: 1,
    flexBasis: 0,
  },
});

export default DetailsScreen;