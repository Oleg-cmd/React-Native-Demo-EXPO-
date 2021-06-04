import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

import { AddTodo } from "./src/components/AddTodo"

import { Navbar } from "./src/components/Navbar"
import { Todo } from "./src/components/Todo"

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos([])
  }, [])

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    }
    setTodos(prev => [newTodo, ...todos])
  }

  const remove = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style="">
      <Navbar title="My beautiful navbar" />
      <StatusBar style="auto" />

      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <Todo todo={item} onRemove={remove} />
          }}
        />

        {/* <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})
