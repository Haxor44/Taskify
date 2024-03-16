import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
    const navigation = useNavigation();

    const openDrawer = ()=>{
        navigation.openDrawer();
    }
  return (
    <View style={styles.container}>
        <Pressable onPress={openDrawer} hitSlop={8}>
            <Image
                source={require("../../assets/menu.png")} 
                style={{width:32,height:32}}
            />
        </Pressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon}></View>
    </View>
  )
}

export default React.memo(Header);