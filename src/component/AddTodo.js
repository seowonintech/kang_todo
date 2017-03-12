import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  onButtonPress(){
    console.log('aaa');
  }

  render() {
    return (
      <View>
      <TextInput
        value='Add Todo'
      />
      <Button
        title='Add Todo'
      />
      </View>
    );
  }
}

export default AddTodo;