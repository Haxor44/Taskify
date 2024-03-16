import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

const PlusIcon = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AddTask');
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default React.memo(PlusIcon);