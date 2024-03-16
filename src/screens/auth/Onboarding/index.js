import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Button from '../../../components/Button'

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
         <Image style={styles.image} source={require("../../../assets/onboarding.png")}/>

         <View style={styles.footer}/>
        </View>
      <View style={styles.content}>
        <Text style={styles.title}>Best management app</Text>
        <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>

        <Button onPress={()=> navigation.navigate("Signin")}>Log in</Button>
        <Button onPress={()=> navigation.navigate("Signup")} type={"blue"}>Get Started</Button>
      </View>
    </View>
  )
}

export default React.memo(Onboarding)