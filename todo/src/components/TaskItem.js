import { Pressable, StyleSheet, Text, View } from "react-native";
import Typography from "./Typography";
import CheckBoxEmptyIcon from "../icons/CheckBoxEmptyIcon";
import CheckBoxFilledIcon from "../icons/CheckBoxFilledIcon";
import CategoryEventIcon from "../icons/CategoryEventIcon";
import CategoryGoalIcon from "../icons/CategoryGoalIcon";
import CategoryTaskIcon from "../icons/CategoryTaskIcon";
import React from "react";

function TaskItem({ task, toggleTaskCompletion }) {
  const textDecorationLine = task.isCompleted ? "line-through" : "none";
  const opacity = task.isCompleted ? 0.7 : 1;
  const iconMap = {
    CategoryEventIcon: CategoryEventIcon,
    CategoryGoalIcon: CategoryGoalIcon,
    CategoryTaskIcon: CategoryTaskIcon,
  };
  const Icon = iconMap[task.icon] || CategoryTaskIcon;

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer} opacity={opacity}>
        <Icon style={styles.icon} />
        <View style={styles.textsContainer}>
          <Typography
            text={task.title}
            color={"#1B1B1D"}
            fontWeight={600}
            fontSize={16}
            textDecorationLine={textDecorationLine}
          />
          <Typography
            text={task.time}
            color={"#1B1B1D"}
            fontWeight={500}
            fontSize={14}
            textAlign={"left"}
            textDecorationLine={textDecorationLine}
          />
        </View>
      </View>
      <Pressable onPress={handleToggleCompletion}>
        <View style={styles.rightContainer}>
          {task.isCompleted ? <CheckBoxFilledIcon /> : <CheckBoxEmptyIcon />}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  leftContainer: {
    height: 48,
    width: 264,
    gap: 12,
    flexDirection: "row",
  },
  rightContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    height: 48,
    width: 48,
  },
  textsContainer: {
    justifyContent: "center",
    gap: 2,
  },
});

export default TaskItem;
