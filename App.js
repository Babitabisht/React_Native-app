import {Navigation} from 'react-native-navigation' ;

import AuthScreen from './src/screen/Auth/Auth' ;
import SharePlace from './src/screen/FindPlace/FindPlace'
import FindPlace  from './src/screen/SharePlace/SharePlace'

Navigation.registerComponent("app.AuthScreen" , ()=> AuthScreen);
Navigation.registerComponent("app.SharePlaceScreen" , ()=> SharePlace);
Navigation.registerComponent("app.FindPlaceScreen" , ()=> FindPlace);


Navigation.startSingleScreenApp({
  screen :{
    screen :"app.AuthScreen" ,
    title:'Login'
  }
})