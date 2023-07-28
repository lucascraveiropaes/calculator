import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Modals from "./modals";
import Pages from "./pages";

const RootStack = createStackNavigator();

export default function Views() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen 
          name="Page" 
          component={Pages} 
          options={{ headerShown: false }}
        />
        <RootStack.Screen 
          name="Modal" 
          component={Modals}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};