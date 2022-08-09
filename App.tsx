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
  const [goals, setGoals] = useState<GoalItemType[]>([]);

  const pressHandler = (textInput: string) => {
    setGoals([...goals, { name: textInput, id: Math.random() }]);
  };

  const deleteGoalHandler = (id: number) => {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };
  return (
    <View style={styles.container}>
      <GoalInput pressHandler={pressHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GoalItem deleteGoalHandler={deleteGoalHandler} item={item} />}
        />
      </View>
    </View>
  );
}
