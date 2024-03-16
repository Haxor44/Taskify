import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../../store/task';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const [counts,setCounts] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    firestore()
    .collection('Users')
    .where("userId", "==", user?.uid)
    .get()
    .then(querySnapshot => {
      console.log('Total tasks: ', querySnapshot.size);
      const taskslist = []
      
      querySnapshot.forEach(documentSnapshot => {
      console.log('TaskID: ', documentSnapshot.id, documentSnapshot.data());
      taskslist.push({
        taskId: documentSnapshot.id,
        ...(documentSnapshot.data() || {}),
    });
  });
  dispatch(setTasks(taskslist));
});
}, [user,toUpdate,dispatch]);

useEffect(() => {
  if(tasks?.length){
    const highPriority = tasks?.filter(task => task?.category === "urgent" || task?.category === "important",);
    const quickWin = tasks?.filter(task => task?.category === "quick_task");
    const today = moment(new Date()).format("YYYY-MM-DD")
    const dueDeadline = tasks?.filter(task => {
      const deadline = task?.deadline?.seconds * 1000;
      const deadlineFormatted = moment(deadline).format("YYYY-MM-DD");
      return moment(deadlineFormatted).isBefore(today);
    })
    setCounts({
      highPriority:highPriority?.length,
      quickWin:quickWin?.length,
      dueDeadline:dueDeadline?.length
    });
  }
},[tasks])
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority}/>
          <StatusCard label="Due Deadline" type="error" count={counts?.dueDeadline}/>
          <StatusCard label="Quick Win" count={counts?.quickWin}/>
        </View>
        <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate("Tasks")}>
          <Text style={styles.title}>Check all my task.</Text>
          <Text style={styles.subtitle}>See all tasks and filter them by categories you have selected when creating them.</Text>
        </TouchableOpacity>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  )
  }


export default React.memo(Home);