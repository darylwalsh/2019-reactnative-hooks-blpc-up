import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1Style: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  view2Style: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
    top: 50,
  },
  view3Style: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
})

export default BoxScreen
