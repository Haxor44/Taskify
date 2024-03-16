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

const Tasks = () => {
  const tasks = useSelector(state => state.tasks.data);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const [FilteredTasks,setFilteredTasks] = useState([]);

  const onTaskUpdate = (item) => {
    firestore()
      .collection("Tasks")
      .doc(item?.uid)
      .update({
        checked:!item?.checked
      })
      .then(()=>{
        dispatch(setToUpdate())
      });
  }

  useEffect(()=>{
    if (category && category !== "all") {
      const filtered = tasks?.filter(task => task?.category === category);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks)
    }
  })
  const renderTask = ({item}) => {
    <View style={styles.row}>
      <Checkbox checked={item.checked} onPress={()=> onTaskUpdate(item)}/>
      <Text style={[styles.taskText,item?.checked ? styles.checked : {} ]}>{item.title}</Text>
    </View>
  }
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Tasks"/>

        <FlatList 
          ListHeaderComponent={
            <View style={{marginBottom:24}}>
              <Title type="thin">To Do Tasks</Title>
              <Categories
                categories={[{label:"All",value:"All"},...categories]}
                selectedCategory={category}
                onCategoryPress={setCategory}
              />
            </View>
          
        }
          data={FilteredTasks}
          renderItem={renderTask}
          keyExtractor={item => String(item?.uid)}
        />   
        <PlusIcon/>
    </SafeAreaView>
  )
}

export default React.memo(Tasks);