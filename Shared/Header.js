import React from 'react';
import { StyleSheet,Image,SafeAreaView } from 'react-native-web';

const Header =()=>{
    return (

        <SafeAreaView style={styles.header}>
            <Image source={require("../assets/logo.png")} resizeMode="contain"
            style= {{height:50}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"center",
      padding:20,
      marginTop:80
      // Assuming you want to align items in the center vertically
      // Add other styles as needed
    }
  });
  

  export default Header;