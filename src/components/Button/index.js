import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import styles from './styles';
const Button = ({onPress,type, children,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, type === "blue" ? styles.blueBg : {},style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button);