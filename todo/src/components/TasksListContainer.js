import { StyleSheet, ScrollView } from "react-native";
import Typography from "./Typography";
import TaskItem from "./TaskItem";

function TasksListContainer({ tasks, toggleTaskCompletion }) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        tasks.length === 0 && styles.noTasksContainer,
      ]}
    >
      {tasks.length === 0 ? (
        <Typography
          style={styles.noTasksText}
          text={"Empty"}
          color={"#1B1B1D"}
          fontWeight={500}
          fontSize={14}
        />
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 242,
    gap: 1,
    backgroundColor: "#E5E9ED",
    backgroundColor: "transparent",
  },
  noTasksContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

});

export default TasksListContainer;
