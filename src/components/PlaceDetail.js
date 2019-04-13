import React from 'react' ;
import {  Modal , View , Image ,Text ,Button ,StyleSheet,Alert , TouchableOpacity } from 'react-native' ;
import Icon from 'react-native-vector-icons/Ionicons' ;

const placeDetail = props =>{

    let modalContent=null ;

    if(props.selectedPlace){
       modalContent=(

    <View >
        <Image  source={props.selectedPlace.image}   style={styles.placeImage} />
        <Text  style={styles.placeName}   >
          {props.selectedPlace.name}
        </Text>
    </View>
        )

    }

return (

    <Modal  visible={props.selectedPlace !== null} animationType="slide"

onRequestClose={() => {

     Alert.alert(`hello ${props.selectedPlace !== null}`)

     }}
    >

<View style={styles.modalContainer} >
{modalContent
}
<View>
<TouchableOpacity    onPress={props.onItemDelete}>
<View  style={styles.deleteButton}>
  <Icon size={40} name="ios-trash" color="red" />
</View>

</TouchableOpacity>

<Button   title="close"   onPress={props.onModalClosed} />

</View>


</View>


</Modal>
)


}

const  styles=StyleSheet.create({
modalContainer :{
    margin:22

},
placeImage:{
    height:200,
    width:"100%"
},
placeName:{
    fontWeight:"bold" ,
    textAlign:"center" ,
    fontSize:28
},
deleteButton :{
alignItems:'center'
}

})


export default placeDetail;