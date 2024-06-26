import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Context API
import Auth from "./Context/store/Auth";

// Navigators
import Main from "./Navigators/Main";

// Screens
import Header from "./Shared/Header";

if (Platform.OS === "web") {
  // Web için LogBox kullanmak istemiyorsanız
  console.log("Ignoring all logs on web platform");
  console.ignoreAllLogs(true);
}

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
