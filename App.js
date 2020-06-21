import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'; 
import readScreen from './screens/readScreen';
import  writeScreen from './screens/writeScreen';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    
    };
  }
 
  render(){
 
    return (
 
      <AppContainer/>
    
  );
  }
}
const TabNavigator=createBottomTabNavigator({
  Write: {screen: writeScreen},
  Read: {screen: readScreen}
},
{
defaultNavigationOptions : ({navigation})=>({
tabBarIcon:({})=>{
  const routeName=navigation.state.routeName
  if(routeName==='Read'){
    return(
      <Image
      source= {require('./assets/er.png')}
      style={{width:40,height:40}}
     />
    )
  }
  else if(routeName==='Write'){
    return(
      <Image
      source={require('./assets/download.jpg')}
      style={{width:40, height:40}}
      />
    )
  }
}  
})
});

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

