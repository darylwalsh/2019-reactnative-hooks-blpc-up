import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentsScreen = () => {
  const greeting = 'Hi there'
  const name = 'Android'

  return (
    <View>
      <Text style={styles.textStyle}>This is a Component Screen</Text>
      <Text style={styles.subHeaderStyle}>
        {greeting} {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
