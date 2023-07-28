import { Container } from "components/layout";
import { ScrollView, Text } from "components/core";
import { useCalculator } from "context/calculator";

export default function History() {
  const { state: { history }} = useCalculator();

  return (
    <Container className="p-0">
      <ScrollView className="flex px-4">
        {(history.length === 0) && (
          <Text className="text-lg text-slate-200">Nothing to show</Text>
        )}

        { history.map(item =>
          <Text key={ item } className="text-lg text-slate-200 my-1">{ item }</Text>
        )}
      </ScrollView>
    </Container>
  );
};