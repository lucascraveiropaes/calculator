import { StatusBar, Button, Text, View, ViewProps } from "components/core";
import { useNavigation } from '@react-navigation/native';
import { twMerge } from "tailwind-merge";

const classes = {
  container: "w-full h-full bg-[#000] pt-9",
  header: {
    view: "w-full h-[60] px-2 flex flex-row justify-between items-center bg-[#000]",
    title: "text-lg font-bold text-slate-200",
    button: {
      container: "w-[50] h-full flex justify-center items-center",
      label: "text-md font-semibold text-slate-200",
    },
  }
}

interface ContainerProps extends ViewProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <View
        className={ twMerge(classes.container, className) }
        { ...props }
      />
    </>
  )
}

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View className={ classes.header.view }>
      <Button
        classLabel={ classes.header.button.label }
        className={ classes.header.button.container }
        onPress={ () => navigation.goBack() }
      >
        Back
      </Button>

      <Text className={ classes.header.title }>{ title }</Text>

      <Button
        classLabel={ classes.header.button.label }
        className={ classes.header.button.container }
        onPress={ () => navigation.goBack() }
        children=""
      />
    </View>
  );
}

export default {
  Container,
  Header,
}