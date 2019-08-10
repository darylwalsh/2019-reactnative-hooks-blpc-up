import { createAppContainer, createStackNavigator } from 'react-navigation'

import ComponentsScreen from './src/screens/ComponentsScreen'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
