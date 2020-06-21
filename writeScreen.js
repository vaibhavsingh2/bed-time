import * as React from 'react';
import {Text,View,TouchableOpacity,TextInput,StyleSheet,KeyboardAvoidingView,ToastAndroid,Alert,ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config';
import {Header} from 'react-native-elements'

export default class WriteScreen extends React.Component{
  
   submitStory=async()=>{
    db.collection("Stories").add({
      'author': this.state.author,
      'storyText':this.state.text,
     'title': this.state.storyTitle 

    })
 
  } 

  constructor() {
    super();
    this.state = {
      text: '',
    author: '',
    storyTitle: ''
    };
  } 
 handleStories=async()=>{
   db.collection("Stories").doc(this.state.text).get()
   .then((doc)=>{
    var story=doc.data();
    if(story===undefined){
      this.submitStory();
   // if(Alert.alert("Hi")){
   //   console.log("working")
    //}
    //else {
   // //  console.log("Not working")
    //}      
   
    }  
    else{
      console.log("Hi");

    } 
  })

  }
  render(){  
    
  
return(
  <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>

<View style={{ flex: 1}}>
<Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Bedtime story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        </View>
        <ScrollView>
        <ScrollView horizontal>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:1}}>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:1}}>

<TextInput
 editable
 maxLength={1000}
multiline= {true}
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
  
</View>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:1}}>
<TextInput
 editable
 maxLength={100}

          style={styles.inputsBox}
          onChangeText={author => {
            this.setState({ author: author });
          }}
          value={this.state.author}
        />
  </View>   
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:1}}>
<TextInput
 editable
 maxLength={100}
          style={styles.inputsBox}
          onChangeText={storyTitle => {
            this.setState({ storyTitle: storyTitle });
          }}
          value={this.state.storyTitle}
        />
  </View>            
<View>
            <TouchableOpacity
            style={{backgroundColor: 'red',marginTop:50,width:99,height:50,paddingTop:15,paddingLeft:20}}
            onPress={async()=>{
              this.handleStories()}}
          >
           <Text> Submit </Text>  
            </TouchableOpacity>
    
    </View>
           
         
            </View>
 </ScrollView>
 </ScrollView>
 </KeyboardAvoidingView>    
 
     )
      
      }

} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
      
    },
    inputBox: {
      marginTop: 50,
      width: '99%',
      
      alignSelf: 'center',
      height: 300,
      textAlign: 'center',
      borderWidth: 4,
    },
    inputsBox: {
      marginTop: 50,
      width: '120%',
      
      alignSelf: 'center',
      height: 50,
      textAlign: 'center',
      borderWidth: 4,
    },
    
  });