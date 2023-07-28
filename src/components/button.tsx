import { Button as CoreButton, ButtonProps } from "components/core";
import { Dimensions } from "react-native";
import { twMerge } from "tailwind-merge";

const { width } = Dimensions.get("window");
const size = Math.floor(width / 5.5);

const classes = {
  button: `bg-[#FFA007] w-[${size}] h-[${size}] rounded-full flex items-center justify-center`,
  label: `text-[25px] text-white`,
}

const Button: React.FC<ButtonProps> = ({ className, classLabel, ...props }) => {
  return (
    <CoreButton
      className={ twMerge(classes.button, className) }
      classLabel={ twMerge(classes.label, classLabel) }
      { ...props }
    />
  )
}

export default Button;

export type { ButtonProps };