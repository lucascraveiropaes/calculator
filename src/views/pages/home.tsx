import { View, Text } from "components/core";
import { Container } from "components/layout";
import KeyBoard, { ACTIONS } from "components/keyboard";
import { useCalculator } from "context/calculator";

export default function Home({ navigation }: any) {
  const { state, dispatch } = useCalculator();
  
  const goToHistoryModal = () => navigation.navigate("Modal", { screen: "History" });

  const onPress = (type: string, value: string) => {
    if (ACTIONS.HISTORY === type)
      return goToHistoryModal();

    return dispatch({ type, payload: value });
  }

  return (
    <Container className={`flex flex-col justify-end`}>
      <View className="flex items-end justify-end h-1/3 p-5">
        <Text className="text-[85px] font-light text-white">{ state.display }</Text>
      </View>
      <KeyBoard onPress={ onPress }/>
    </Container>
  );
};