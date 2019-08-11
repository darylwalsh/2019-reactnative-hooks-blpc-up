import React from 'react'
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface Props {
  color: string
  onIncrease: (e: GestureResponderEvent) => void
  onDecrease: any
  // onIncrease: (event: GestureResponderEvent) => void
  //onIncrease: (event: React.MouseEvent<HTMLElement>) => void
  // onDecrease: (event: React.MouseEvent<HTMLElement>) => void
}
const ColorCounter = ({ color, onIncrease, onDecrease }: Props) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={e => onIncrease(e)} />
      <Button title={`Decrease ${color}`} onPress={e => onDecrease(e)} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter
