import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import styles from './styles';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../../../components/Checkbox';
import { categories } from '../../../constants/categories';
import Categories from '../../../components/Categories';
import { setToUpdate } from '../../../store/task';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.data);
  const [category, setCategory] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (category && category !== 'all') {
      const filtered = tasks?.filter(task => task?.category === category);
      setFilteredTasks(filtered);
      console.log("filtered are:"+filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [category, tasks]);

  const onTaskUpdate = item => {
    console.log("items is:"+item.taskId);
    firestore()
      .collection('Tasks')
      .doc(item?.taskId)
      .update({
        checked: !item.checked,
      })
      .then(() => {
        dispatch(setToUpdate());
      });
  };

  const renderTask = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
        <Text style={[styles.taskText, item?.checked ? styles.checked : {}]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <FlatList
        ListHeaderComponent={
          <View style={{marginBottom: 24}}>
            <Title type="thin">To Do Tasks</Title>
            <Categories
              categories={[{label: 'All', value: 'all'}, ...categories]}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </View>
        }
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => String(item?.taskId)}
      />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);