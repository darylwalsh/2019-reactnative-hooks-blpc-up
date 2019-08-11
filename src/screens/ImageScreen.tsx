import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/images/mountain.jpg')}
        score={5}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        score={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
