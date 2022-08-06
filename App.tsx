import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#777',
    marginRight: 10,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 5,
  },
  button: {},
  goalsContainer: {
    flex: 5,
    marginTop: 35,
  },
  goal: {
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 15,
    paddingVertical: 10,
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#2035ab',
  },
  goalText: {
    color: 'white',
  },
});

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [goals, setGoals] = useState<string[]>([]);

  const textInputHandler = (text: string) => {
    setTextInput(text);
  };
  const pressHandler = () => {
    setGoals([...goals, textInput]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textInputHandler}
          style={styles.textInput}
          placeholder="Add your app goals"
        />
        <Button title="Add goal" onPress={pressHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => {
          return (
            <View style={styles.goal} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
