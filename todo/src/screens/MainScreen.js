import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import TasksListContainer from "../components/TasksListContainer";

import BackArrowIcon from "../icons/BackArrowIcon";

function MainScreen({ route, navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study lesson",
      time: 12,
      icon: "CategoryEventIcon",
      date: "null",
      isCompleted: false,
    },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <Header icon={BackArrowIcon} text={"October 10, 2022"} />
        <View>
          <Typography
            text={"My Todo List"}
            color={"#FFFFFF"}
            fontWeight={700}
            fontSize={30}
          />
        </View>
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.tasksContainer}>
          <View style={styles.listContainer}>
            <TasksListContainer
              tasks={tasks.filter((task) => !task.isCompleted)}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          </View>

          <Typography
            text={"Completed"}
            color={"#000000"}
            fontWeight={600}
            fontSize={16}
            textAlign={"left"}
          />
          <View style={styles.listContainer}>
            <TasksListContainer
              tasks={tasks.filter((task) => task.isCompleted)}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          </View>
        </View>

        <CustomButton
          text={"Add New Task"}
          onPress={() =>
            navigation.navigate("NewTaskScreen", {
              handleAddTask: handleAddTask,
            })
          }
        />
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
    height: "30%",
    backgroundColor: "#4A3780",

    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  whiteContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "#F1F5F9",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    gap: 12,
    justifyContent: "space-between",
    marginTop: -80,
  },
  listContainer: {
    maxHeight: 242,
    justifyContent: "flex-start",
    borderRadius: 16,
  },
});
export default MainScreen;
