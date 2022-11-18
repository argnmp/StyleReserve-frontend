import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import Loading from "./screens/Loading";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import FindPassword from "./screens/FindPassword";
import FoundPassword from "./screens/FoundPassword";
import MainPage from "./screens/MainPage";
import OverallStylerReservation from "./screens/OverallStylerReservation";
import StylerReservation from "./screens/StylerReservation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Loading" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="FindPassword" component={FindPassword} options={{ headerShown: false }} />
      <Stack.Screen name="FoundPassword" component={FoundPassword} options={{ headerShown: false }} />
      <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      <Stack.Screen name="OverallStylerReservation" component={OverallStylerReservation} options={{ headerShown: false }} />
      <Stack.Screen name="StylerReservation" component={StylerReservation} options={{ headerShown: false }} />
    </Stack.Navigator>
    
  );
};

const App = () => {
  
  return (
    <NavigationContainer>
      <AppNavigator />

    </NavigationContainer>
  );
};

export default App;
