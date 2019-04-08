/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button} from 'react-native';
import ListItem from './src/components/ListItem' ;
import PlaceList from './src/components/PlaceList'
import MyImage from './assets/interwork.png'
import PlaceDetail  from './src/components/PlaceDetail' ;
import {connect} from 'react-redux' ;
import {addPlace , deletePlace , selectPlace , unselectPlace} from './src/store/actions/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  state ={
    placeName:''
    }
placeNameChangedHandler = val => {


 this.setState({
   placeName:val
 })

}

placeSubmitHandler =() =>{

if(this.state.placeName.trim() === ''){
  return ;
}

let name=this.state.placeName
this.props.onAddPlace(name);

}

placeSelectedHandler = key =>{

this.props.selectPlace(key)

}

modalClosed=()=>{

  this.props.onDeselectPlace()
}

onItemDelete =()=>{

this.props.onDeletePlace()

}


  render() {

    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>

      <PlaceDetail
      selectedPlace={this.props.selectedPlace}

      onModalClosed={this.modalClosed}
      onItemDelete={this.onItemDelete}


      />

      <TextInput
        value={this.state.placeName}
        style={styles.placeInput}
        onChangeText={this.placeNameChangedHandler}

        placeholder="An awesome place"
          />

        <Button  title="Add"  style={styles.placeButton} onPress={this.placeSubmitHandler} />



      </View>
      <View  style={styles.listContainer}>
      <PlaceList  places={this.props.places}  onItemSelected={this.placeSelectedHandler}  />
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
  },
  listContainer:{
    width:'100%',

  }


});


const mapStateToProps = state =>{
  return {
    places :state.places.places,
    selectedPlace:state.places.selectedPlace
  }
}


const mapDispatchToProps =dispatch =>{
  return {
onAddPlace: name => dispatch(addPlace(name)),
onDeletePlace: ()=> dispatch(deletePlace()),
selectPlace: key => dispatch(selectPlace(key)),
onDeselectPlace: ()=> dispatch(unselectPlace())
  }
}

export default connect( mapStateToProps ,mapDispatchToProps )(App)

