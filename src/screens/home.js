import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { Button,Modal,PaperProvider,Portal } from "react-native-paper";
const Home=()=>{
   return (
    <PaperProvider>
<View style={styles.container}>
<View></View>
<View>
    <Button>Choose Picture</Button>
    <Button>Choose HairColor</Button>
</View>
<Portal>
<Modal>

</Modal>
</Portal>
</View>
</PaperProvider>
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1 ,
       backgroundColor:'green',
       flexDirection:'column'
    }
})


export default Home