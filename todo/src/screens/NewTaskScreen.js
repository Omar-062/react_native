import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Header from "../components/Header";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

import CloseIcon from "../icons/CloseIcon";
import CategoryEventIcon from "../icons/CategoryEventIcon";
import CategoryGoalIcon from "../icons/CategoryGoalIcon";
import CategoryTaskIcon from "../icons/CategoryTaskIcon";

function NewTaskScreen({ route, navigation }) {
  const { handleAddTask } = route.params;

  let [title, setTitle] = useState("");
  let [time, setTime] = useState("");
  let [date, setDate] = useState("");
  let [notes, setNotes] = useState("");
  let [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelection = (categoryIcon) => {
    setSelectedCategory(categoryIcon.name);
    console.log(selectedCategory);
  };

  const handleClosePress = () => {
    navigation.navigate("MainScreen");
  };

  const saveTask = () => {
    const newTask = {
      id: Date.now(),
      title: title,
      time: time,
      date: date,
      notes: notes,
      icon: selectedCategory,
      isCompleted: false,
    };
    handleAddTask(newTask);
    handleClosePress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <Header
          icon={CloseIcon}
          text={"Add New Task"}
          onPress={() => handleClosePress()}
        />
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.innerContainer}>
          <CustomInput text="Task Title" value={title} setValue={setTitle} />

          <View style={styles.categoriesContainer}>
            <Typography
              style={styles.inputTitleText}
              text={"Category"}
              color={"#1B1B1D"}
              fontWeight={600}
              fontSize={14}
            />

            <View style={styles.categoriesIconsContainer}>
              <TouchableOpacity
                onPress={() => handleCategorySelection(CategoryEventIcon)}
                style={styles.iconContainer}
              >
                <CategoryEventIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleCategorySelection(CategoryGoalIcon)}
                style={styles.iconContainer}
              >
                <CategoryGoalIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleCategorySelection(CategoryTaskIcon)}
                style={styles.iconContainer}
              >
                <CategoryTaskIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <CustomInput text="Date" value={date} setValue={setDate} />
            <CustomInput text="Time" value={time} setValue={setTime} />
          </View>

          <CustomInput text="Notes" value={notes} setValue={setNotes} />
        </View>
        <CustomButton text={"Save"} onPress={() => saveTask()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  purpleContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: "#4A3780",
    gap: 24,

    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  whiteContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: "#F1F5F9",
    justifyContent: "space-between",

    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  innerContainer: {
    gap: 24,
  },
  rowContainer: {
    flexDirection: "row",
    width: "50%",
    gap: 8,
  },
  categoriesContainer: {
    flexDirection: "row",
    height: 48,
    gap: 24,
  },
  categoriesIconsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  iconContainer: {
    width: 48,
  },
});
export default NewTaskScreen;
