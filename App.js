/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
state ={
placeName:'' ,
places:[]

}
placeNameChangedHandler = val =>{

 this.setState({
   placeName:val
 })

}

placeSubmitHandler =() =>{
if(this.state.placeName.trim() === ''){
  return ;
}

this.setState( prevState =>{

  return{
    places:prevState.places.concat(prevState.placeName)
  }
}    )

}


  render() {

const placesOutput=this.state.places.map( place=>{ 
  <Text>{place}</Text>
  } )

    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>

      <TextInput 
        value={this.state.placeName}
        style={styles.placeInput}
        onChangeText={this.placeNameChangedHandler}
        placeholder="An awesome place"
          />

        <Button  title="Add"  style={styles.placeButton} onPress={this.placeSubmitHandler} />

         <Text>{ placesOutput }</Text>  
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer:{

    width:"100%",
    flexDirection:"row",
    justifyContent : "space-between" ,
    alignItems:"center"
  },
  placeInput:{
width:"70%"
  } ,
  placeButton:{
    width:"30%"
  }

  
});
