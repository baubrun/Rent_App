import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import About from "./components/About";
import RentList from "./components/RentList";
import RentItem from "./components/RentItem";

const AppNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#1B4079" },
        }}
      >
        <AppNavigator.Screen name="Welcome" component={Home} />
        <AppNavigator.Screen name="About" component={About} />
        <AppNavigator.Screen name="RentList" component={RentList} />
        <AppNavigator.Screen name="RentItem" component={RentItem} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
