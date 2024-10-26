import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/home";
const App=()=>{
  return(
    <SafeAreaView style={styles.conatiner}>
<Home />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  conatiner:{
    flex:1
  }
})
export default App