import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const data = [
  {
    id: 1,
    title: 'Connect people around the world',
    img: () => require('../assets/app/screen1.svg'),
  },
  {
    id: 2,
    title: 'Live your life smarter with us',
    img: () => require('../assets/app/screen2.svg'),
  },
  {
    id: 3,
    title: 'Get a new experience of imagination',
    img: () => require('../assets/app/screen3.svg'),
  },
];

const Intro = () => {
  return (
    <View>
      <Text>Intro</Text>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})