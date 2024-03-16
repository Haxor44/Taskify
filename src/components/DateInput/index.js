import moment from 'moment';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false);

  const onDateOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onDateOpen} style={styles.oultine}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('../../assets/calendar_active.png')}
        />
        <Text style={styles.text}>
          {moment(value).format('L') || 'Select Date...'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateInput);