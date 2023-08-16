import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
 
class Inputs extends React.Component{

  state = {
    height: "",
    weight: "",
    bmi: "",
    };

    handleHeight = (text)=>{
      this.setState({
        height: text
      });
    }

    handleWeight = (text)=>{
      this.setState({
        weight: text
      });
}

calculate = (height,weight)=>{
  var result = (parseFloat(weight*10000)/parseFloat(height)*parseFloat(height));
  result = result.toFixed(2)
}
  
  render(){
    return(
      <View>
        <Text>BMI CALCULATOR</Text>
        <Text>HEIGHT</Text>
        <TextInput
        style = {styles.input}
        underlineColorAndroid= "transparent"
        placeholder= 'HEIGHT (CM)'
        autoCapitalize= 'none'
        onChangeText={this.handleHeight}
        />
        
        <Text>WEIGHT</Text>
        <TextInput
        style = {styles.input}
        underlineColorAndroid= 'transparent'
        placeholder= 'WEIGHT (KG)'
        autoCapitalize= 'none'
        onChangeText= {this.handleWeight}
        />

        <TouchableOpacity style = {styles.submitButton}
        onPress={()=>{
          this.calculate(this.state.height,this.state.weight)
        }}>
          <Text style = {styles.submitButtonText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    paddingTop: 23,
  },
  input:{
    height: 40,
   margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    height: 40,
    margin: 15,
    backgroundColor: "red",
    padding: 10,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }

});

export default Inputs;
