import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import CalenderCategoryIcon from '../../icons/CalenderCategoryIcon';
import CheckBoxEmptyIcon from '../../icons/CheckBoxEmptyIcon';
import CheckBoxFilledIcon from '../../icons/CheckBoxFilledIcon';

const TodoItem = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked((isChecked) => !isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, isChecked && styles.checkedContainer]}>
        <CalenderCategoryIcon style={styles.iconContainer} />
        <View style={styles.textContainer}>
          <Text style={[styles.textMedium, isChecked && styles.strikeThrough]}>Enter title</Text>
          <Text style={[styles.textSmall, isChecked && styles.strikeThrough]}>Enter time</Text>
        </View>
      </View>
      <Pressable onPress={handleCheckboxClick}>
        {isChecked ? <CheckBoxFilledIcon /> : <CheckBoxEmptyIcon />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 344,
    height: 80,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  checkedContainer: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 264,
    gap: 12,
  },
  textSmall: {
    color: '#1B1B1D',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16.8,
  },
  textMedium: {
    color: '#1B1B1D',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 17.6,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
