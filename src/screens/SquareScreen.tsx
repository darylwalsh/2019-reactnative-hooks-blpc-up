import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ColorCounter from '../components/ColorCounter'

// interface StateInterface {
// red: number
// green: number
// blue: number
// }
interface StateType {
  red: number
  green: number
  blue: number
}
interface ActionType {
  type: 'change_red' | 'change_green' | 'change_blue'
  payload: number
}
// type Action =
// | { type: 'request' }
// | { type: 'success', results: HNResponse }
// | { type: 'failure', error: string };
// interface ActionInterface {
// colorToChange: string
// payload: number
// }
const reducer = (state: StateType, action: ActionType): StateType => {
  // state is === { red: number, green: number, blue: number}
  // action === {colorToChange: red || green || blue, payload: 15 || -15}

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
    default:
      throw new Error('Action not supported')
  }
}
const COLOR_INCREMENT = 15
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
