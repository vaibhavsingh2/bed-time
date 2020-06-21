import React from 'react';
import { Text, View,TextInput,TouchableOpacity,FlatList,StyleSheet,ScrollView } from 'react-native';
import db from '../config';
import {Header} from 'react-native-elements';

export default class Searchscreen extends React.Component {
  constructor(){
    super();
    this.state={
      search: '',
      allTransactions: [],
      lastVisibleTransaction: null,
    };
  }  
  searchTransaction=async(text)=>{
    
      const story=await db.collection("Stories").where('author','==',text).get();
      story.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc

        })
      })
    
   
  }
  fetchMoreTransaction=async(text)=>{
    var text=this.state.search.toUpperCase();
    var enteredText = text.split("");
  
      const transaction=await db.collection("Stories").where('author','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get();
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc

        })
      })
  
    
  }
  render() {
   
      
      
      return (

<View style={{ flex: 1}}>
<Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Bedtime story',
           style: { color: '#fff', fontSize: 20 },
         }}
        />
<View style={styles.container}>

         <View>
          <TextInput
  style={styles.inputBox}
  placeholder="author"
  onChangeText={(text)=>{this.setState({search: text})}}          
          />
          <TouchableOpacity style={styles.searchButton}
          onPress={()=>{this.searchTransaction(this.state.search)}}>
          <Text>Search</Text>
            
          </TouchableOpacity>

                    
      </View>
        </View>
        <FlatList
        data={this.state.allTransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth: 5}}>
            <Text>
              {"author: " + item.author}
            </Text>
            <Text>
            {"story: " + item.storyText}
            </Text>
            <Text>
              {"title: " + item.title}
            </Text>
            
   
          </View>
        )}
        keyExtractor={(item,index)=>index.toString()}
        onEndReached={this.fetchMoreTransaction}
        onEndReachedThreshold={0.7}
        />
        
         </View>
      );
        
    }
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    width: 200,
    height: 40,
   
    marginTop:30,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
   
  },
searchButton:{
  width: 200,

  height: 40,
  backgroundColor: 'yellow',
  borderWidth: 2,
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 0,
  fontSize: 20,
  marginTop:30
}
});
