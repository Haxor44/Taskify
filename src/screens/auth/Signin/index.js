import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
  const [value,setValue] = useState({});

  const onChange = (value,key)=>{
    setValue((vals)=>({
      ...vals,
      [key]:value
    }))
  }
  const onSubmit = ()=> {
    if (!value.email || !value.password ) {
      Alert.alert("Please fill in fields")
    }
    auth()
      .signInWithEmailAndPassword(value.email, value.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

    console.error(error);
  });
  }
  return (
    <SafeAreaView style={styles.container}>
        <Title>Welcome back!</Title>
        <Input onChangeText={(val)=> onChange(val,"email")} placeholder="Email" keyboardType="email-address"/>
        <Input onChangeText={(val)=> onChange(val,"password")} placeholder="Password" secureTextEnty/>
        <Button onPress={onSubmit}>Login</Button>
        <Text style={styles.footerText}>
            Not Registered?
            <Text onPress={()=> navigation.navigate("Signup")} style={styles.footerLink}> Sign up!</Text>
        </Text>
    </SafeAreaView>
  )
}

export default React.memo(Signin);