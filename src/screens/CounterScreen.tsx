import React, { useReducer } from 'react'
import { ActionSheetIOS, Button, StyleSheet, Text, View } from 'react-native'

interface StateType {
  count: number
}
interface ActionType {
  type: 'increment' | 'decrement'
  payload: number
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      throw new Error('Action not supported')
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 })
        }}
      />
      <Text>Counter Count: {state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default CounterScreen
