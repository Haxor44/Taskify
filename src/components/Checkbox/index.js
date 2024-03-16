import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';

const Checkbox = ({checked,onPress}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container, checked ? styles.checkedBox : {}]}>
        {checked ? (
            <View style={styles.innerSquare}/>
        ): null}
    </Pressable>
  )
}

export default React.memo(Checkbox);