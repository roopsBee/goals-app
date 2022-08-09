import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },

  button: {},
  goalsContainer: {
    flex: 5,
    marginTop: 35,
  },
});

export type GoalItemType = {
  name: string;
  id: number;
};

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [goals, setGoals] = useState<GoalItemType[]>([]);

  const textInputHandler = (text: string) => {
    setTextInput(text);
  };
  const pressHandler = () => {
    setGoals([...goals, { name: textInput, id: Math.random() }]);
  };
  return (
    <View style={styles.container}>
      <GoalInput textInputHandler={textInputHandler} pressHandler={pressHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GoalItem item={item} />}
        />
      </View>
    </View>
  );
}
