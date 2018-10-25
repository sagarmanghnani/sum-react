import React from 'react';
import { StyleSheet, View, AppRegistry, Text, TextInput } from 'react-native';
import { Button } from 'react-native';
import { black } from 'ansi-colors';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      field1: '',
      field2: '',
      sum: '',
    }
    this.displaySum = null;
  }

  handleField1 = (text) => {
    this.setState({
      field1: +text
    });
  }

  handleField2 = (text) => {
    this.setState({
      field2: +text
    });
  }

  doSum = () => {
    this.sum = this.state.field1 + this.state.field2;
   
    if(this.sum)
    {
      this.displaySum = (<Text style = {styles.texts}>Total: {this.sum}</Text>);
    }
    else if(isNaN(parseFloat(this.sum)))
    {
      this.displaySum = (<Text style = {styles.texts}>You might Have Entered Invalid Input</Text>)
    }
    this.setState({
      sum: this.sum
    });
  }
   

  render() {
   
    return (
      <View style={styles.container}>
        <Text style = {styles.texts}>Enter the Input</Text>

        <Text style = {styles.texts}>Input Field 1</Text>
        <TextInput onChangeText={this.handleField1} style = {styles.input} keyboardType = 'numeric'></TextInput>

        <Text style = {styles.texts}>Input Field 2</Text>
        <TextInput onChangeText = {this.handleField2} keyboardType = 'numeric'></TextInput>


        {this.displaySum}
        <Button onPress = {() => {this.doSum()}} title="Sum"/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },

  input: {
     height: 30 
  },

  texts: {
    height: 35
  }
});
