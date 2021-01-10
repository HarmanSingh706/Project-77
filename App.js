import React from 'react'
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default function App(){
      return(
     <SafeAreaProvider>
     <SignUpLoginScreen/>
     </SafeAreaProvider>
    )
  }


