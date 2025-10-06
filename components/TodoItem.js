import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default TodoItem;
