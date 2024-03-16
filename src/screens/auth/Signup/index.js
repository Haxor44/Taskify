import { Text, SafeAreaView, View, Linking, Alert, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react'
import Button from '../../../components/Button';
import styles from './styles';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';
import { PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL } from '../../../constants/links';

const Signup = ({navigation}) => {
  const [agreed,setAgreed] = useState(false);
  const [value,setValue] = useState({});

  const onCheckBoxPress = ()=>{
    setAgreed(value => !value);
  }

  const onLinkPress = (url)=>{
    Linking.openURL(url)
  }

  const onChange = (value,key)=>{
    setValue((vals)=>({
      ...vals,
      [key]:value
    }))
  }
  
  const onSubmit = ()=>{
    if (!value.first_name || !value.last_name) {
      Alert.alert("Please first and last name");
      return;
    }

    if (value.password !== value.confirm_password) {
      Alert.alert("Passwords do not match");
      return;
    }

    if (!agreed) {
      Alert.alert("Please accept terms");
      return;
    }
    auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(() => {
        auth().currentUser.updateProfile({displayName: `${value.first_name} ${value.last_name}`});
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Join the hub!</Title>
          <Input onChangeText={(val)=>onChange(val, "first_name")} placeholder="First Name"/>
          <Input onChangeText={(val)=>onChange(val,"last_name")} placeholder="Last Name"/>
          <Input onChangeText={(val)=>onChange(val,"email")} placeholder="Email" keyboardType="email-address" />
          <Input onChangeText={(val)=>onChange(val,"password")} placeholder="Password" secureTextEnty/>
          <Input onChangeText={(val)=>onChange(val,"confirm_password")} placeholder="Confirm Password" secureTextEnty/>
          <View style={styles.row}>
            <Checkbox checked={agreed} onPress={onCheckBoxPress}/>
            <Text style={styles.agreedText}>
              I agree to
              <Text style={styles.link} onPress={()=> onLinkPress(TERMS_AND_CONDITIONS_URL)}> Terms and Conditions</Text> and
              <Text style={styles.link} onPress={()=> onLinkPress(PRIVACY_POLICY_URL)}> Privacy Policy</Text>
            </Text>
          </View>
          <Button onPress={onSubmit} type="blue">Create new account</Button>
          <Text style={styles.footerText}>
            Already Registered?
            <Text onPress={()=> navigation.navigate("Signin")} style={styles.footerLink}> Sign in!</Text>
          </Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Signup);