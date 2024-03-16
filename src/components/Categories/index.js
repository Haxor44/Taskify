import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item?.value)}
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 12}}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item?.value;
        const displayName = item?.label;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item?.value)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? {marginLeft: 24} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {displayName}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);