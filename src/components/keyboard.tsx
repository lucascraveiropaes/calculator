import { FC } from "react";
import { View } from "components/core";
import Button from "components/button";

const inverse = {
  className: "bg-[#A5A5A5]",
  classLabel: "text-black",
}

export const NUMBERS = (new Array(9).fill(null)).map((_, i) => ({ label: `${i + 1}` }));
export const OPERATIONS = {
  DIVIDE: "÷",
  MULTIPLY: "x",
  MINUS: "-",
  SUM: "+",
}
export const ACTIONS = {
  EQUAL: "=",
  CLEAR: "AC",
  HISTORY: "H",
  PERCENTAGE: "%"
}

interface KeyBoardProps {
  onPress: (type: string, value?: string | any) => any;
}

const KeyBoard: FC<KeyBoardProps> = ({ onPress }) => {
  const useOnPress = (type: string, value?: string) => ({
    onPress: () => onPress(type, value || type),
  });

  return (
    <View className="flex flex-row justify-around">
      <View className={`flex flex-row flex-wrap justify-around gap-4 w-3/4`}>
        <Button
          children="AC"
          { ...useOnPress(ACTIONS.CLEAR) }
          { ...inverse }
        />
        <Button
          children="H"
          { ...useOnPress(ACTIONS.HISTORY) }
          { ...inverse }
        />
        <Button
          children="%"
          { ...useOnPress(ACTIONS.PERCENTAGE) }
          { ...inverse }
        />
        
        { NUMBERS.map(({ label }) => 
          <Button
          { ...useOnPress("value", label) }
          className="bg-[#333333]"
          children={ label }
          key={ label }
          />
        )}
        
        <Button { ...useOnPress("value", "0") } className="w-[60%]">0</Button>
        <Button { ...useOnPress("value", ".") }>.</Button>
      </View>
      <View className={`flex flex-col w-1/4 items-center justify-between`}>
        { [...Object.values(OPERATIONS), ACTIONS.EQUAL].map(value => 
          <Button key={ value } { ...useOnPress(value) }>{ value }</Button>
        )}
      </View>
    </View>
  )
}

KeyBoard.defaultProps = {
  onPress: () => null
}

export default KeyBoard;