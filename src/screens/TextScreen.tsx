import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen = () => {
  const [passwd, setPasswd] = useState('')
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setPassword(newValue)}
      />
      {passwd.length < 4 ? <Text>Password must be min 4 chars</Text> : null}
      {false ? <Text>That was true</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
