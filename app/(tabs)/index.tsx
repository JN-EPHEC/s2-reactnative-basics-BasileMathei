import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
  <TodoItem text="Save my file" color="#FFCDD2" />
  <TodoItem text="Test my code locally" color="#C8E6C9" />
  <TodoItem text="Commit my changes to Git" color="#BBDEFB" />
  <TodoItem text="Check my project online" color="#FFF9C4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
});
