import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";

const MainStack = createStackNavigator();

export default function Pages() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={ Home } />
    </MainStack.Navigator>
  );
};