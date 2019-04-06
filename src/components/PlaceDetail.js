import React from 'react' ;
import {  Modal , View , Image ,Text ,Button ,StyleSheet,Alert } from 'react-native' ;

const placeDetail = props =>{

    let modalContent=null ;

    if(props.selectedPlace){
       modalContent=( <View >
            <Image  source={props.selectedPlace.placeImage}   style={styles.placeImage} />
<Text  style={styles.placeName}   >
{props.selectedPlace.placeName}

</Text>
 </View>
        )

    }

return (

    <Modal  visible={props.selectedPlace !== null} animationType="slide"

onRequestClose={() => {


            Alert.alert('please touch the close button')
          }}
    >

<View style={styles.modalContainer} >
{modalContent
}
<View>

<Button  title="delete" color="red"  onPress={props.onItemDelete} />

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
    width:200
},
placeName:{
    fontWeight:"bold" ,
    textAlign:"center" ,
    fontSize:28
}

})


export default placeDetail;