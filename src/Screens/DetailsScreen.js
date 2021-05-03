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
  const {animeData} = props.route.params;
  const [playing, setPlaying] = useState(false);

  function renderImage() {
    return (
      <Image
        style={styles.poster}
        source={{uri: animeData.attributes.coverImage.original}}
        alt={animeData.attributes.canonicalTitle}
      />
    );
  }

  function renderTrailer() {
    return (
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={animeData.attributes.youtubeVideoId}
        onChangeState={onStateChange}
      />
    );
  }

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
    <SafeAreaView style={styles.display}>
      <ScrollView>
        <View>
          {!playing ? renderImage() : renderTrailer()}

          <Button
            title={playing ? 'pause' : 'Trailer'}
            onPress={togglePlaying}
          />

          <View style={styles.information}>
            <Text style={styles.title}>
              {animeData.attributes.canonicalTitle}
            </Text>
            <View style={styles.info}>
              <View style={styles.containText}>
                <Text style={styles.text}>Average Rating:</Text>
                <Text style={{color: '#22bb33'}}>
                  {animeData.attributes.averageRating}
                </Text>
              </View>
              <View style={styles.containText}>
                <Text style={styles.text}>Popularity Rank:</Text>
                <Text style={{color: '#22bb33'}}>
                  {animeData.attributes.popularityRank}
                </Text>
              </View>
              <View style={styles.containText}>
                <Text style={styles.text}>Episode Count:</Text>
                <Text style={{color: '#22bb33'}}>
                  {animeData.attributes.episodeCount}
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={{flexGrow: 1, color: 'white', marginTop: 4}}>
                Age Rating Guide: {animeData.attributes.ageRatingGuide}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 4,
                color: 'white',
                textAlign: 'justify',
                flexGrow: 1,
                flexBasis: 0,
              }}>
              Synopsis: {animeData.attributes.synopsis}
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
    flex: 1,
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
  containText: {
    margin: 6
  }
});

export default DetailsScreen;
