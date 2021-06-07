import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}}
          style={styles.image}
          resizeMode="cover"/>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds
          to guess the number: <Text style={styles.highLight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    margin: 30
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highLight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  }
});

export default GameOverScreen;