import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AddTodo from './AddTodo';
import ShowTodoList from './ShowTodoList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <AddTodo />
        <ShowTodoList />
      </View>
    );
  }
}

export default App;