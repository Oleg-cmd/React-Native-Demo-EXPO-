import React, { useState } from "react"

import { View, StyleSheet, TextInput, Button, Alert } from "react-native"

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("")

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue("")
    } else {
      // error
      Alert.alert("Deal name cant be empty")
    }
  }

  return (
    <View style={styles.addtodo}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter deal name"
        // autoCorrect={false}
        // autoCapitalize="none"
        // keyboardType="numeric"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  addtodo: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "80%",
    padding: 5,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "#3949ab",
  },
})
