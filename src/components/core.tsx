import { ReactNode } from "react";
import { styled } from "nativewind";
import {
  TouchableOpacity as RNTouchableOpacity,
  ScrollView as RNScrollView,
  Text as RNText,
  View as RNView,
  StatusBar,
} from "react-native";

export type { TouchableOpacityProps, ViewProps } from "react-native";

export const TouchableOpacity = styled(RNTouchableOpacity);
export const ScrollView = styled(RNScrollView);
export const View = styled(RNView);
export const Text = styled(RNText);

export interface ButtonProps {
  children: ReactNode | string;
  classLabel?: string;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({ children, classLabel, ...props }) => {
  return (
    <TouchableOpacity { ...props }>
      {(typeof children === "string") ? (
        <Text className={ classLabel }>{ children }</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

export { StatusBar };