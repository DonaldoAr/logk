import React from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableOpacityBase } from "react-native";
//import image from './assets/zero.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login </Text>  
      <TextInput 
          style= {styles.input}
          placeholder = "Username"
      />
      <TextInput 
        style= {styles.input}
        placeholder = "Password"
        secureTextEntry
      />

      <View style={styles.buttonCountainer}>
        
        <TouchableOpacity
          style={styles.userButton}
          onPress= {() => alert("Login works")}
        >
          <Text style={styles.btnTxt}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.userButton}
          onPress={()=>alert("Signup works")}
        >
          <Text style={styles.btnTxt}> Signup </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, 
              justifyContent: "center", 
              alignItems: "center", 
              backgroundColor: "#c81d11"},
  title: { fontSize: 30, 
           color: "#fff" },
  image: {height: 600, 
          width:200},
  input:{
      width: "90%",
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10
  },
  userButton:{
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%"

  },
  buttonCountainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"

  },
  btnTxt:{
    fontSize: 18,
    textAlign: "center"
  }

});
export default App;
