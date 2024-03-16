import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import React from 'react';
import auth from "@react-native-firebase/auth";
import { Linking, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';
import { PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL } from '../../constants/links';

  function DrawerContent(props) {
    const { navigation } = props;
    const logout = ()=> {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }
    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.link} onPress={()=> navigation.navigate("Home")}>Home</Text>
        <Text style={styles.link} onPress={()=> navigation.navigate("Tasks")}>Tasks</Text>
        <Text style={styles.link} onPress={()=> Linking.openURL(PRIVACY_POLICY_URL)}>Privacy Policy</Text>
        <Text style={styles.link} onPress={()=> Linking.openURL(TERMS_AND_CONDITIONS_URL)}>Terms and Conditions</Text>
        <Text style={styles.link} onPress={logout}>Log out</Text>
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    link:{
        color:colors.black,
        fontWeight:"500",
        fontSize:13,
        margin:8,
        marginHorizontal:16
    }
  })

  export default React.memo(DrawerContent);