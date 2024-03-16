import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';
import store from './src/store';


const App = () => {
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:"#fff"
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes/>
      </NavigationContainer>
    </Provider>
    
    
  )
}

export default App