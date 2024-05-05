import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,LogBox } from 'react-native';
//Screens 
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
//Navigator
import Main from './Navigators/Main';


LogBox.ignoreAllLogs(true);

export default function App() {
  return (

    <NavigationContainer>
  
      <Header/>
   <Main/>
     
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
