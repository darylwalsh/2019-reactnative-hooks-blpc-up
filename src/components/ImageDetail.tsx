import React from 'react'
import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'

interface Props {
  title: string
  imageSource: ImageProps
  score: number
}
const ImageDetail = ({ score, title, imageSource }: Props) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
