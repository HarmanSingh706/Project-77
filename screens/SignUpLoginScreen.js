import React, { Component } from 'react'
import {View,TextInput,KeyboardAvoidingView,TouchableOpacity,StyleSheet,Alert,Text} from 'react-native'
import firebase from 'firebase'
import { Header } from 'react-native-elements'


export default class SignUpLoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
          email : "",
          password : ""
        }
      }
      userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

         userSignUp = (email,password) =>{
             firebase.auth().createUserWithEmailAndPassword(email,password)
             .then((response)=>{
                 return Alert.alert("User Added Successfully")
             })
             .catch(function(error){
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 return Alert.alert(errorMessage)
             });
         }
      
    render(){
        return(
           
                <View style={styles.container}>
                     <KeyboardAvoidingView>
                <Header
                backgroundColor={'#FF0000'}
                centerComponent={{
                  text: 'Barter System',
                  style: { color: '#FFC0CB', fontSize: 30, fontFamily:'Felix Titling' },
                }}
                />
                <Text style={{alignSelf:'center',fontFamily:'Agency FB',fontSize:20}}>Email</Text>
             <TextInput
            style={styles.loginBox}
            keyboardType ='email-address'
            placeholder="Type Your Email Here...."
            onChangeText={(text)=>{
              this.setState({
                email: text
              })
            }}
            value={this.state.email}
            />
<Text style={{alignSelf:'center',fontFamily:'Agency FB',fontSize:20}}>Password</Text>
<TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="Type Password Here...."
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
              value={this.state.password}
            />

          <TouchableOpacity 
          style = {styles.loginButton}
              onPress = {()=>{this.userLogin(this.state.email, this.state.password)}}
              >
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'LuzSans-Book',alignSelf:'center'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.signUpButton}
          onPress={()=>{this.userSignUp(this.state.email, this.state.password)}}
           >
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'LuzSans-Book',alignSelf:'center'}}>Sign Up</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
          </View>
            
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: 200,
        height: 50,
        borderRadius: 5,
        alignSelf:'center'
    },
    
    loginButton: {
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#FFC0CB',
        alignSelf:'center',
        flex:1,
        margin: 10,
        border: 15,
        borderColor:'#800080',
    },
    signUpButton: {
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#FFC0CB',
        alignSelf:'center',
        flex:1,
        margin: 1,
        border: 15,
        borderColor: '#800080'
    },
    container: {
        backgroundColor:'#FFA500',
        width:'100%',
        height:'100%',
        flex:1
    }
});