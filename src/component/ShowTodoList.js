import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      todos.map(todo => {
        <View>
          <Text>todo.text</Text>
        </View>
      })
    );
  }
}

export default ShowTodoList;