import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  addGoalsRow: {
    display: 'flex',
  },
  addGoalsInput: {
    width: '70%',
  },
  addGoalsButton: {
    width: '30%',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.addGoalsRow}>
        <TextInput style={styles.addGoalsInput}>This is my goals app</TextInput>
        <Button title="Add goal" />
      </View>
      <View>
        <Text>New goals here</Text>
      </View>
    </View>
  );
}
