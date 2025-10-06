import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({ text, color }) => {
  return (
    <View style={[styles.item, { backgroundColor: color || '#f2f2f2' }] }>
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
