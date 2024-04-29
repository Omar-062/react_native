import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface Props {
  content: any;
  navigation?: any;
}

const ListSection = ({ content, navigation }: Props) => {
  console.log("Navigation prop in SmallContentList:", navigation);
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
