import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';

const Title = ({children, type}) => {
  return (
    <Text style={[styles.title, type === "thin" ? styles.thin :{}]}>{children}</Text>
  )
}

export default React.memo(Title);