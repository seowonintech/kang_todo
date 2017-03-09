import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer);

class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>aaaa</Text>
                </View>
            </Provider>
        );
    }
}

export default TodoApp;
