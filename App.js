import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
//Screens 
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
//Navigator
import Main from './Navigators/Main';

//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

import Toast from 'react-native-toast-message';

//Context Apı
import Auth from './Context/store/Auth';



LogBox.ignoreAllLogs(true);

export default function App() {
  return (
<Auth>

<Provider store={store}>
    <NavigationContainer>
      <Header />
      <Main />
      <Toast ref={(ref)=> Toast.setRef(ref)}/>
    </NavigationContainer></Provider>
</Auth>

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
