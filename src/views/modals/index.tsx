import { createStackNavigator } from "@react-navigation/stack";
import History from "views/modals/history";
import Layout from "components/layout";

const ModalStack = createStackNavigator();

export default function Modals() {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name="History"
        component={ History }
        options={{ header: () => <Layout.Header title="History"/> }}
      />
    </ModalStack.Navigator>
  );
};