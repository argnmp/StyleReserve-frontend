import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Loading from "./screens/Loading";
import Login from "./screens/Login";
import SignUpScreen from "./screens/SignUpScreen";
import FindPassword from "./screens/FindPassword";
import FoundPassword from "./screens/FoundPassword";
import MainPage from "./screens/MainPage";
import StylerReservation from "./screens/StylerReservation";
import EditInfo from "./screens/EditInfo";
import MyCloset from "./screens/MyCloset";
import AddClothes from "./screens/AddClothes";
import MyPage from "./screens/MyPage";
import TodayReservation from "./screens/TodayReservation";
import reserveclothes from "./screens/reserveclothes";
import StylingReservation from "./screens/StylingReservation";
import StylingMain from "./screens/StylingMain";

import Layout from "./screens/layout";

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
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FindPassword" component={FindPassword} options={{ headerShown: false }} />
      <Stack.Screen name="FoundPassword" component={FoundPassword} options={{ headerShown: false }} />
      <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />

      <Stack.Screen name="TodayReservation" component={TodayReservation} options={{ headerShown: false, unmountOnBlur: true }} />
      <Stack.Screen name="StylerReservation" component={StylerReservation} options={{ headerShown: false }} />
      <Stack.Screen name="EditInfo" component={EditInfo} options={{ headerShown: false }} />

      <Stack.Screen name="MyCloset" component={MyCloset} options={{ headerShown: false }} />
      <Stack.Screen name="AddClothes" component={AddClothes} options={{ headerShown: false }} />
      <Stack.Screen name="MyPage" component={MyPage} options={{ headerShown: false }} />
      <Stack.Screen name="StylingMain" component={StylingMain} options={{ headerShown: false }} />
      <Stack.Screen name="StylingReservation" component={StylingReservation} options={{ headerShown: false }} />

      
      <Stack.Screen name="reserveclothes" component={reserveclothes} options={{ headerShown: false }} />
      <Stack.Screen name="Layout" component={Layout} options={{ headerShown: false }} />
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
