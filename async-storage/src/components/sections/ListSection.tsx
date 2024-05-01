import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Props } from "../../types";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListSection = ({ content, navigation }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {content({ item, navigation })}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default ListSection;
